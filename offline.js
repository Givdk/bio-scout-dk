/**
 * offline.js — Feltkø til Bio-Scout
 *
 * PROBLEMET: skolens iPads har intet SIM-kort, og hverken Brøndbyskoven eller
 * Valbyparken har wifi. Appen kan altså ikke identificere noget i felten.
 *
 * LØSNINGEN: børnene fotograferer ude i naturen. Billederne lægges i en kø på
 * selve iPad'en. Når klassen kommer tilbage på skolens wifi, arbejdes køen
 * igennem, og fundene ryger på listen.
 *
 * PRIVATLIV — de tre regler der holder løftet så stramt som muligt:
 *
 *   1. Billedet forlader aldrig iPad'en, før det identificeres. Ingen server,
 *      ingen sky, ingen mellemstation.
 *   2. Billedet slettes i samme øjeblik arten er bestemt. Kun navnet gemmes.
 *   3. Køen tømmer sig selv efter et døgn — også hvis nogen glemmer det.
 *
 * Der bruges IndexedDB frem for localStorage, fordi localStorage kun rummer
 * omkring 5 MB og ikke er bygget til billeddata.
 */

const DB_NAVN    = "bioscout-felt";
const LAGER      = "koe";
const VERSION    = 1;
const LEVETID_MS = 24 * 60 * 60 * 1000;   // et døgn
const MAX_PX     = 900;                    // længste side efter nedskalering
const KVALITET   = 0.65;                   // JPEG-kvalitet

// ---------------------------------------------------------------------------
// DATABASE
// ---------------------------------------------------------------------------

function aabnDB() {
  return new Promise((ok, nej) => {
    const anmod = indexedDB.open(DB_NAVN, VERSION);
    anmod.onupgradeneeded = () => {
      const db = anmod.result;
      if (!db.objectStoreNames.contains(LAGER)) {
        const lager = db.createObjectStore(LAGER, { keyPath: "id", autoIncrement: true });
        lager.createIndex("tid", "tid");
      }
    };
    anmod.onsuccess = () => ok(anmod.result);
    anmod.onerror   = () => nej(new Error("Kunne ikke åbne feltkøen"));
  });
}

function transaktion(lager, tilstand, arbejd) {
  return aabnDB().then(db => new Promise((ok, nej) => {
    const t = db.transaction(lager, tilstand);
    const s = t.objectStore(lager);
    let resultat;
    try { resultat = arbejd(s); } catch (e) { nej(e); return; }
    t.oncomplete = () => ok(resultat && resultat.result !== undefined
      ? resultat.result : resultat);
    t.onerror    = () => nej(new Error("Feltkøen svarede ikke"));
  }));
}

// ---------------------------------------------------------------------------
// NEDSKALERING — mindre billeder fylder mindre og sendes hurtigere.
// En art kan sagtens bestemmes ud fra 900 px.
// ---------------------------------------------------------------------------

export function nedskalerBillede(fil) {
  return new Promise((ok, nej) => {
    const url = URL.createObjectURL(fil);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width: b, height: h } = img;
      if (Math.max(b, h) > MAX_PX) {
        const f = MAX_PX / Math.max(b, h);
        b = Math.round(b * f);
        h = Math.round(h * f);
      }
      const c = document.createElement("canvas");
      c.width = b; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, b, h);
      ok(c.toDataURL("image/jpeg", KVALITET).split(",")[1]);   // base64 uden præfiks
    };

    img.onerror = () => { URL.revokeObjectURL(url); nej(new Error("Kunne ikke læse billedet")); };
    img.src = url;
  });
}

// ---------------------------------------------------------------------------
// KØEN
// ---------------------------------------------------------------------------

/**
 * Læg et fund i køen.
 * @param {File} fil - billedet fra kameraet
 * @param {object} meta - {tilstand, trin, omraade, missionId, stedId}
 */
export async function gemIKoe(fil, meta = {}) {
  const base64 = await nedskalerBillede(fil);
  await transaktion(LAGER, "readwrite", s =>
    s.add({ base64, meta, tid: Date.now() })
  );
  return antalIKoe();
}

/** Alle ventende fund, ældste først. */
export async function hentKoe() {
  await ryddUdloebne();
  const alle = await transaktion(LAGER, "readonly", s => s.getAll());
  return (alle || []).sort((a, b) => a.tid - b.tid);
}

export async function antalIKoe() {
  await ryddUdloebne();
  const n = await transaktion(LAGER, "readonly", s => s.count());
  return n || 0;
}

/** Slet ét fund — kaldes så snart arten er bestemt. */
export function sletFraKoe(id) {
  return transaktion(LAGER, "readwrite", s => s.delete(id));
}

/** Tøm hele køen. Bør altid være en synlig knap i UI'et. */
export function ryddKoe() {
  return transaktion(LAGER, "readwrite", s => s.clear());
}

/** Sletter alt over et døgn gammelt. Kører automatisk ved hvert opslag. */
export async function ryddUdloebne() {
  const graense = Date.now() - LEVETID_MS;
  const alle = await transaktion(LAGER, "readonly", s => s.getAll());
  const gamle = (alle || []).filter(p => p.tid < graense);
  for (const p of gamle) {
    await transaktion(LAGER, "readwrite", s => s.delete(p.id));
  }
  return gamle.length;
}

// ---------------------------------------------------------------------------
// FORBINDELSE
// ---------------------------------------------------------------------------

/**
 * navigator.onLine lyver ofte: den siger "online", når iPad'en hænger på et
 * wifi uden internet bagved. Derfor prøves der et rigtigt kald.
 */
export async function erOnline() {
  if (!navigator.onLine) return false;

  // AbortSignal.timeout() kom først i Safari 16 (2022) og findes ikke på
  // ældre skole-iPads. Der ville den kaste en fejl, som blev opfanget
  // nedenfor og tolket som "offline" — og så ville alle billeder ryge i
  // køen uden nogensinde at blive bestemt. Derfor bygges timeouten
  // manuelt med AbortController, som har virket siden 2018.
  const styring = new AbortController();
  const ur = setTimeout(() => styring.abort(), 4000);

  try {
    const svar = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),                 // tomt kald → 400, men det beviser forbindelse
      signal: styring.signal,
    });
    return svar.status > 0;
  } catch {
    return false;
  } finally {
    clearTimeout(ur);
  }
}

/** Kald tilbage når forbindelsen kommer eller går. */
export function lytTilForbindelse(naarOnline, naarOffline) {
  window.addEventListener("online",  () => naarOnline && naarOnline());
  window.addEventListener("offline", () => naarOffline && naarOffline());
}

// ---------------------------------------------------------------------------
// AFVIKLING AF KØEN
// ---------------------------------------------------------------------------

/**
 * Arbejder køen igennem, ét fund ad gangen.
 *
 * @param {function} identificer - async (base64, meta) => art
 * @param {function} paaFund     - (art, meta, restITil) => void
 * @param {function} paaFejl     - (fejl, post) => void
 *
 * Et fund slettes, så snart det er behandlet — også hvis der var en person på
 * billedet, eller hvis identifikationen slog fejl. Intet bliver liggende.
 */
export async function afvikleKoe(identificer, paaFund, paaFejl) {
  const koe = await hentKoe();
  let behandlet = 0;

  for (const post of koe) {
    try {
      const art = await identificer(post.base64, post.meta);
      await sletFraKoe(post.id);
      behandlet++;
      if (!art.personPaaBillede && paaFund) {
        paaFund(art, post.meta, koe.length - behandlet);
      }
    } catch (fejl) {
      await sletFraKoe(post.id);      // ryd op uanset hvad
      behandlet++;
      if (paaFejl) paaFejl(fejl, post);
    }
  }

  return behandlet;
}
