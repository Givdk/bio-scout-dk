/**
 * steder.js — Stedspakker til Bio-Scout
 *
 * Hvorfor stedet betyder noget:
 *
 *  1. IDENTIFIKATION BLIVER BEDRE. Når billedgenkendelsen ved, at billedet er
 *     taget i en løvskov på Vestegnen frem for "et sted i Danmark", bliver
 *     gættet markant mere præcist. Stedet sendes med i prompten.
 *
 *  2. MISSIONERNE BLIVER ÆGTE. "Find noget levende under en sten" er fint.
 *     "Find Grisekæret og se, hvem der bor i det" er en rigtig opgave et
 *     rigtigt sted.
 *
 *  3. PERSPEKTIVERINGEN BLIVER KONKRET. Begge steder er natur, mennesker har
 *     skabt. Det er en historie, børn kan stå midt i.
 *
 * Tilføj flere steder ved at kopiere et objekt og rette indholdet.
 */

export const STEDER = {

  // =========================================================================
  brøndbyskoven: {
    id: "brøndbyskoven",
    navn: "Brøndbyskoven",
    kort: "Løvskov på Vestegnen",
    ikon: "🌳",

    // Sendes med til billedgenkendelsen
    habitat:
      "Anlagt lystskov på Vestegnen ved København. Blanding af løvtræer og " +
      "nåletræer; bøg dominerer i Hovedskoven, mens Østskoven har bøg, ahorn " +
      "og spidsløn samt fugtige partier med rød-el og pil. Bakkeskoven er " +
      "yngre og mere åben med sletter og vandhullet Grisekæret. Der efterlades " +
      "dødt ved til svampe, insekter og hulrugende fugle.",

    // Den historie, der gør stedet til andet end en baggrund
    historie:
      "Skoven blev plantet fra 1952 til 1960 på gammel landbrugsjord. Hele " +
      "skoven er altså yngre end de fleste bedsteforældre — de første to træer " +
      "står stadig på Festpladsen.",

    vidsteDu: [
      "Der er registreret omkring 130 forskellige fuglearter i skoven.",
      "De døde træer får lov at blive stående med vilje — det er der, spætterne bor.",
      "Bakkeskoven blev først plantet i 2003. Nogle af træerne er yngre end dig.",
    ],

    // Missioner der kun giver mening netop her
    missioner: [
      {
        id: "bs-ældre",
        titel: "Ældre end skoven?",
        ikon: "🌲",
        opdrag:
          "Skoven blev plantet i 1952. Find et træ, du tror er fra dengang — " +
          "og et, der er kommet til siden.",
        varighed: "20 min",
        udendoers: true,
      },
      {
        id: "bs-doedtrae",
        titel: "Det døde træ lever",
        ikon: "🪵",
        opdrag:
          "Find et dødt eller væltet træ. Hvor mange forskellige ting kan I " +
          "finde, der bor i det?",
        varighed: "20 min",
        udendoers: true,
      },
      {
        id: "bs-spaette",
        titel: "Hvem har banket her?",
        ikon: "🐦",
        opdrag:
          "Led efter huller i træstammer. Nogle er lavet af spætter. " +
          "Kan I finde et hul, nogen bor i lige nu?",
        varighed: "20 min",
        udendoers: true,
      },
      {
        id: "bs-vand",
        titel: "Ved vandet",
        ikon: "💧",
        opdrag:
          "Gå ned til vandhullet. Find noget levende i eller lige ved vandet.",
        varighed: "25 min",
        udendoers: true,
      },
      {
        id: "bs-lysning",
        titel: "Lys og skygge",
        ikon: "☀️",
        opdrag:
          "Find en plante, der vokser i en lysning — og en, der vokser under " +
          "de tætte træer. Er de ens?",
        varighed: "20 min",
        udendoers: true,
      },
    ],
  },

  // =========================================================================
  valbyparken: {
    id: "valbyparken",
    navn: "Valbyparken",
    kort: "Park, sø og kyst i København",
    ikon: "🌿",

    habitat:
      "Stor bypark i København, der strækker sig ned til Kalveboderne. Åbne " +
      "græssletter med grupper af eg og lærk, spredte buskadser, en lavvandet " +
      "sø ved hovedindgangen, fire anlagte vandhuller (Den Grønne Frøpark) med " +
      "stendiger, en kilometerlang allé af pyramidepopler, rosenhave og " +
      "temahaver med både danske og fremmede træarter samt kyst mod " +
      "vildtreservatet Kalveboderne.",

    historie:
      "Området var losseplads fra 1913 til 1937. Da dyngen lukkede, blev der " +
      "kørt jord ovenpå, sået græs og plantet træer — parken står bogstaveligt " +
      "talt oven på Københavns gamle affald.",

    vidsteDu: [
      "Der er fundet op mod 40 rødlistede fuglearter i og omkring parken.",
      "Der lever fire forskellige arter flagermus i området.",
      "Vandhullerne blev gravet i 1995, alene for at frøer og tudser kunne yngle.",
      "Nogle af træerne i temahaverne hører slet ikke hjemme i Danmark.",
    ],

    missioner: [
      {
        id: "vp-froepark",
        titel: "Frøparken",
        ikon: "🐸",
        opdrag:
          "Find de ovale vandhuller. Hvad kan I se i vandet — og hvad gemmer " +
          "sig ved stendigerne?",
        varighed: "25 min",
        udendoers: true,
      },
      {
        id: "vp-losseplads",
        titel: "Oven på affaldet",
        ikon: "🕰️",
        opdrag:
          "Her lå en losseplads for 90 år siden. Find tre forskellige levende " +
          "ting, der vokser her nu.",
        varighed: "20 min",
        udendoers: true,
      },
      {
        id: "vp-fremmed",
        titel: "Den der ikke hører til",
        ikon: "🌏",
        opdrag:
          "I temahaverne står træer fra andre verdensdele. Find et træ, I " +
          "aldrig har set før.",
        varighed: "20 min",
        udendoers: true,
      },
      {
        id: "vp-kysten",
        titel: "Ud til vandet",
        ikon: "🦆",
        opdrag:
          "Gå ned til Kalveboderne. Find noget, der lever ved eller på vandet.",
        varighed: "30 min",
        udendoers: true,
      },
      {
        id: "vp-blomst",
        titel: "Hvem besøger blomsten?",
        ikon: "🐝",
        opdrag:
          "Find en blomst med et insekt på. Bliv stående og se, hvor længe " +
          "det bliver.",
        varighed: "15 min",
        udendoers: true,
      },
      {
        id: "vp-allé",
        titel: "Den lange allé",
        ikon: "🌾",
        opdrag:
          "Poppelalléen er præcis én kilometer lang. Find noget levende i " +
          "hver ende — er det det samme?",
        varighed: "30 min",
        udendoers: true,
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// HJÆLPEFUNKTIONER
// ---------------------------------------------------------------------------

/** Alle steder som liste — til at bygge en vælger i UI'et. */
export function alleSteder() {
  return Object.values(STEDER);
}

/** Hent et sted. Returnerer null for "ingen steder valgt", hvilket er gyldigt. */
export function hentSted(id) {
  return id && STEDER[id] ? STEDER[id] : null;
}

/**
 * Missioner til fritidstilstand: stedets egne først, derefter de almene.
 * Kald med de generelle missioner fra opgaver.js som andet argument.
 */
export function missionerForSted(stedId, almeneMissioner = []) {
  const sted = hentSted(stedId);
  return sted ? [...sted.missioner, ...almeneMissioner] : almeneMissioner;
}

/**
 * Tekststump om stedet, der lægges ind i identifikationsprompten.
 * Tom streng hvis intet sted er valgt — så opfører appen sig som før.
 */
export function stedTilPrompt(stedId) {
  const sted = hentSted(stedId);
  if (!sted) return "";
  return `\n\nBilledet er taget i ${sted.navn}. Om stedet: ${sted.habitat}\n` +
         `Brug det til at gøre din bestemmelse mere præcis — arter, der ikke ` +
         `findes i denne type levested, er usandsynlige.`;
}

/** Et tilfældigt "vidste du"-punkt til at vise, mens der ventes. */
export function vidsteDu(stedId) {
  const sted = hentSted(stedId);
  if (!sted) return "";
  return sted.vidsteDu[Math.floor(Math.random() * sted.vidsteDu.length)];
}
