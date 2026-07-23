/**
 * opgaver.js — Pædagogisk motor til Nature Explorer / Bio-Scout
 *
 * TO TILSTANDE, ÉN MOTOR:
 *
 *   SKOLE    → undervisning. Klassetrin, kompetencemål fra Fælles Mål,
 *              formativ feedback og lærernote. Læreren er til stede.
 *
 *   FRITID   → SFO og klub. Aldersblandet, frivilligt, kort.
 *              Ingen vurdering, ingen klassetrin, ingen mål på skærmen.
 *              Nysgerrighed og fælles samling driver det.
 *
 * Samme fund kan bruges i begge tilstande — det er netop det samspil mellem
 * SFO'ens aktiviteter og skolens undervisning, som SFO'ens mål- og
 * indholdsbeskrivelse skal redegøre for (folkeskolelovens § 40, stk. 4).
 */

export const TILSTAND = { SKOLE: "skole", FRITID: "fritid" };

// ===========================================================================
// DEL 1 — SKOLETILSTAND
// ===========================================================================

export const KLASSETRIN = {
  "1-2": {
    label: "1.-2. klasse",
    fag: "Natur/teknologi",
    sprogniveau:
      "Meget enkelt dansk. Korte sætninger. Konkrete, sanselige ord (farve, form, " +
      "størrelse, lyd, hvor den bor). Undgå fagord uden forklaring. Max 2 linjer.",
    forventning:
      "Eleven svarer ud fra egne iagttagelser. Et svar er godt, hvis eleven " +
      "beskriver noget, den faktisk kan se eller har oplevet.",
  },
  "3-4": {
    label: "3.-4. klasse",
    fag: "Natur/teknologi",
    sprogniveau:
      "Enkelt dansk med få fagord, der forklares i samme sætning. Max 3 linjer.",
    forventning:
      "Eleven kan udføre enkle undersøgelser og begrunde med mindst én observation.",
  },
  "5-6": {
    label: "5.-6. klasse",
    fag: "Natur/teknologi",
    sprogniveau:
      "Alderssvarende dansk med naturfaglige begreber (levested, tilpasning, " +
      "fødekæde, art). Begreberne må gerne udfordre lidt.",
    forventning:
      "Eleven kan designe en undersøgelse ud fra en begyndende hypotese og " +
      "forklare en sammenhæng mellem organisme og levested.",
  },
  "7-9": {
    label: "7.-9. klasse",
    fag: "Biologi",
    sprogniveau:
      "Fagligt dansk med korrekt biologisk terminologi (økosystem, tilpasning, " +
      "biodiversitet, evolution, næringsstofkredsløb, indikatorart).",
    forventning:
      "Eleven kan forklare med biologisk fagsprog, argumentere ud fra evidens " +
      "og perspektivere til biodiversitet og bæredygtighed.",
  },
};

export const KOMPETENCEOMRAADER = {
  undersoegelse: {
    label: "Undersøgelse",
    ikon: "🔍",
    laeringsmaal: {
      "1-2": "Eleven kan udføre enkle undersøgelser på baggrund af egne og andres spørgsmål.",
      "3-4": "Eleven kan gennemføre enkle undersøgelser med brug af enkelt udstyr.",
      "5-6": "Eleven kan designe undersøgelser på baggrund af begyndende hypotesedannelse.",
      "7-9": "Eleven kan designe, gennemføre og vurdere undersøgelser i biologi.",
    },
    opgavetype:
      "Stil ét spørgsmål, der får eleven til at KIGGE IGEN på organismen og " +
      "beskrive en konkret iagttagelse — en kropsdel, en farve, et mønster, " +
      "hvor den sad, eller hvad den lavede.",
  },
  modellering: {
    label: "Modellering",
    ikon: "🧩",
    laeringsmaal: {
      "1-2": "Eleven kan anvende naturtro modeller.",
      "3-4": "Eleven kan anvende modeller med stigende abstraktionsgrad.",
      "5-6": "Eleven kan designe enkle modeller.",
      "7-9": "Eleven kan anvende og vurdere modeller i biologi.",
    },
    opgavetype:
      "Bed eleven placere organismen i en sammenhæng — tegne eller beskrive en " +
      "fødekæde, den indgår i, eller hvor den hører til i sit levested. " +
      "Eleven skal bygge en model, ikke huske et faktum.",
  },
  perspektivering: {
    label: "Perspektivering",
    ikon: "🌍",
    laeringsmaal: {
      "1-2": "Eleven kan genkende natur og teknologi i sin hverdag.",
      "3-4": "Eleven kan relatere natur og teknologi til andre kontekster.",
      "5-6": "Eleven kan perspektivere natur/teknologi til omverdenen og aktuelle hændelser.",
      "7-9": "Eleven kan perspektivere biologi til omverdenen og relatere fagets indhold til udvikling af naturvidenskabelig erkendelse.",
    },
    opgavetype:
      "Kobl organismen til elevens egen hverdag eller til et større tema " +
      "(årstider, biodiversitet, menneskets påvirkning). Konkret, ikke moraliserende.",
  },
  kommunikation: {
    label: "Kommunikation",
    ikon: "💬",
    laeringsmaal: {
      "1-2": "Eleven kan kommunikere om natur og teknologi.",
      "3-4": "Eleven kan beskrive egne undersøgelser med naturfaglige ord.",
      "5-6": "Eleven kan kommunikere om natur/teknologi med brug af naturfaglige begreber.",
      "7-9": "Eleven kan kommunikere om naturfaglige forhold med biologi.",
    },
    opgavetype:
      "Bed eleven forklare noget om organismen, som om det skulle fortælles " +
      "til en yngre elev eller en kammerat, der ikke var med ude.",
  },
};

// ===========================================================================
// DEL 2 — FRITIDSTILSTAND (SFO OG KLUB)
// ===========================================================================

/**
 * Missioner erstatter opgaver. De er aldersblinde: en 6-årig og en 12-årig
 * kan løse den samme mission på hvert sit niveau uden at nogen vælger niveau.
 * De sender børnene UD — skærmen er kun undervejs.
 */
export const MISSIONER = [

  // ---- LED EFTER NOGET BESTEMT -------------------------------------------
  { id:"under-stenen", titel:"Under stenen", ikon:"🪨", kategori:"find",
    opdrag:"Find noget levende under en sten eller en træstamme.",
    varighed:"10-15 min", udendoers:true },

  { id:"mindre-end-finger", titel:"Mindre end din finger", ikon:"🐜", kategori:"find",
    opdrag:"Find et dyr, der er mindre end din lillefinger.",
    varighed:"10 min", udendoers:true },

  { id:"aeldre-end-dig", titel:"Ældre end dig", ikon:"🌳", kategori:"find",
    opdrag:"Find noget levende, der er ældre end dig selv.",
    varighed:"15 min", udendoers:true },

  { id:"tre-slags-blade", titel:"Tre slags blade", ikon:"🍃", kategori:"find",
    opdrag:"Saml tre blade fra tre forskellige planter.",
    varighed:"15 min", udendoers:true },

  { id:"flyver", titel:"Noget der flyver", ikon:"🦋", kategori:"find",
    opdrag:"Fotografér noget, der kan flyve. Det tæller også, hvis det sidder stille.",
    varighed:"15-20 min", udendoers:true, aarstid:["forår","sommer","efterår"] },

  { id:"farvejagt", titel:"Farvejagten", ikon:"🎨", kategori:"find",
    opdrag:"Find noget levende i en farve, du ikke troede fandtes i naturen.",
    varighed:"15 min", udendoers:true },

  { id:"prikker", titel:"Prikker og pletter", ikon:"🐞", kategori:"find",
    opdrag:"Find noget levende med prikker, pletter eller striber.",
    varighed:"10 min", udendoers:true },

  { id:"hoejt-lavt", titel:"Højt og lavt", ikon:"↕️", kategori:"find",
    opdrag:"Find noget levende så højt oppe, du kan nå — og noget helt nede ved jorden.",
    varighed:"15 min", udendoers:true },

  { id:"gemmer-sig", titel:"Noget der gemmer sig", ikon:"🫣", kategori:"find",
    opdrag:"Find noget levende, man kun ser, hvis man kigger rigtig godt efter.",
    varighed:"15 min", udendoers:true },

  { id:"helt-rundt", titel:"Helt rundt", ikon:"⭕", kategori:"find",
    opdrag:"Find noget levende, der er rundt.",
    varighed:"10 min", udendoers:true },

  { id:"sidder-fast", titel:"Noget der sidder fast", ikon:"🧲", kategori:"find",
    opdrag:"Find noget levende, der sidder fast på noget andet.",
    varighed:"15 min", udendoers:true },

  { id:"mindste-blomst", titel:"Den mindste blomst", ikon:"🌼", kategori:"find",
    opdrag:"Find den allermindste blomst, I kan få øje på.",
    varighed:"15 min", udendoers:true, aarstid:["forår","sommer"] },

  { id:"flere-ben", titel:"Flere end fire ben", ikon:"🕷️", kategori:"find",
    opdrag:"Find et dyr med flere end fire ben. Tæl dem, hvis I kan.",
    varighed:"15 min", udendoers:true },

  { id:"ingen-ben", titel:"Slet ingen ben", ikon:"🐌", kategori:"find",
    opdrag:"Find et dyr helt uden ben.",
    varighed:"15 min", udendoers:true },

  { id:"paa-stenen", titel:"Livet på stenen", ikon:"🪨", kategori:"find",
    opdrag:"Kig på en sten eller en mur. Der vokser noget på den — hvad?",
    varighed:"10 min", udendoers:true },

  { id:"det-vaade", titel:"Det våde sted", ikon:"💧", kategori:"find",
    opdrag:"Find det vådeste sted, I kan. Hvem bor der?",
    varighed:"15 min", udendoers:true },

  { id:"skygge-sol", titel:"Skygge og sol", ikon:"🌤️", kategori:"find",
    opdrag:"Find en plante i solen og en i skyggen. Ser de ens ud?",
    varighed:"15 min", udendoers:true, aarstid:["forår","sommer"] },

  { id:"doede-trae", titel:"Det døde træ", ikon:"🪵", kategori:"find",
    opdrag:"Find et dødt eller væltet træ. Hvor mange ting bor der i det?",
    varighed:"20 min", udendoers:true },

  // ---- SANSER -------------------------------------------------------------
  { id:"luk-oejnene", titel:"Luk øjnene", ikon:"👂", kategori:"sanser",
    opdrag:"Stå helt stille med lukkede øjne i et minut. Hvor mange lyde hører I? Find så det, der lavede én af dem.",
    varighed:"10 min", udendoers:true },

  { id:"hvad-dufter", titel:"Hvad dufter her?", ikon:"👃", kategori:"sanser",
    opdrag:"Find noget, der dufter. Gnid forsigtigt et blad mellem fingrene.",
    varighed:"10 min", udendoers:true, aarstid:["forår","sommer"] },

  { id:"blodeste", titel:"Det blødeste", ikon:"🤲", kategori:"sanser",
    opdrag:"Find det blødeste, I kan røre ved. Og bagefter det mest ru.",
    varighed:"10 min", udendoers:true },

  // ---- TÆL OG SAMMENLIGN --------------------------------------------------
  { id:"tael-benene", titel:"Tæl benene", ikon:"🔢", kategori:"tael",
    opdrag:"Find et dyr og tæl, hvor mange ben det har.",
    varighed:"10 min", udendoers:true },

  { id:"to-der-ligner", titel:"To der ligner hinanden", ikon:"👯", kategori:"tael",
    opdrag:"Find to ting, der ligner hinanden — men ikke er helt ens.",
    varighed:"15 min", udendoers:true },

  { id:"hvor-mange-groenne", titel:"Hvor mange grønne?", ikon:"🟢", kategori:"tael",
    opdrag:"Find fem forskellige slags grøn. De er ikke ens, når man kigger godt efter.",
    varighed:"15 min", udendoers:true, aarstid:["forår","sommer"] },

  { id:"samme-plante", titel:"Samme plante, tre steder", ikon:"📍", kategori:"tael",
    opdrag:"Find den samme slags plante tre forskellige steder. Er den lige stor alle tre steder?",
    varighed:"20 min", udendoers:true },

  // ---- SPOR ---------------------------------------------------------------
  { id:"nogen-bor-her", titel:"Nogen bor her", ikon:"🏠", kategori:"spor",
    opdrag:"Find et spor efter et dyr — et hul, en rede, gnavemærker, fjer.",
    varighed:"15 min", udendoers:true },

  { id:"hvem-spiste", titel:"Hvem har spist her?", ikon:"🍽️", kategori:"spor",
    opdrag:"Find et blad med huller i, eller en nød nogen har gnavet i.",
    varighed:"15 min", udendoers:true, aarstid:["forår","sommer","efterår"] },

  { id:"fodspor", titel:"Fodspor", ikon:"🐾", kategori:"spor",
    opdrag:"Find et fodspor i mudder, sand eller sne. Hvem gik her?",
    varighed:"20 min", udendoers:true, aarstid:["efterår","vinter"] },

  { id:"fjer-haar-skal", titel:"Fjer, hår eller skal", ikon:"🪶", kategori:"spor",
    opdrag:"Find noget, et dyr har efterladt sig.",
    varighed:"15 min", udendoers:true },

  { id:"rede-eller-bo", titel:"En rede eller et bo", ikon:"🪺", kategori:"spor",
    opdrag:"Find et sted, hvor nogen har bygget sig et hjem.",
    varighed:"20 min", udendoers:true },

  { id:"hul-i-jorden", titel:"Hullet i jorden", ikon:"🕳️", kategori:"spor",
    opdrag:"Find et hul i jorden eller i et træ. Hvem tror I bor der?",
    varighed:"15 min", udendoers:true },

  // ---- VAND ---------------------------------------------------------------
  { id:"vandkanten", titel:"Ved vandkanten", ikon:"🏞️", kategori:"vand",
    opdrag:"Gå hen til vand. Find noget levende lige ved kanten.",
    varighed:"20 min", udendoers:true },

  { id:"i-vandet", titel:"Noget i vandet", ikon:"🐟", kategori:"vand",
    opdrag:"Kig ned i vandet og bliv stående. Der sker noget, hvis man venter.",
    varighed:"20 min", udendoers:true, aarstid:["forår","sommer","efterår"] },

  // ---- ÅRSTIDER -----------------------------------------------------------
  { id:"foerste-blomst", titel:"Den første blomst", ikon:"🌱", kategori:"find",
    opdrag:"Find en blomst, der lige er sprunget ud.",
    varighed:"15 min", udendoers:true, aarstid:["forår"] },

  { id:"knopper", titel:"Knopper på vej", ikon:"🌿", kategori:"find",
    opdrag:"Find en knop, der er ved at springe ud. Kan I se, hvad der gemmer sig indeni?",
    varighed:"15 min", udendoers:true, aarstid:["forår"] },

  { id:"insekt-paa-blomst", titel:"Hvem besøger blomsten?", ikon:"🐝", kategori:"find",
    opdrag:"Find en blomst med et insekt på. Bliv stående og se, hvor længe det bliver.",
    varighed:"15 min", udendoers:true, aarstid:["forår","sommer"] },

  { id:"svampejagt", titel:"Svampejagten", ikon:"🍄", kategori:"find",
    opdrag:"Find en svamp. Kig efter i det fugtige, mørke og under træerne. Rør den ikke.",
    varighed:"20 min", udendoers:true, aarstid:["efterår"] },

  { id:"froe-og-noedder", titel:"Frø og nødder", ikon:"🌰", kategori:"find",
    opdrag:"Find tre forskellige frø eller nødder. Hvilket træ kom de fra?",
    varighed:"20 min", udendoers:true, aarstid:["efterår"] },

  { id:"roedeste-blad", titel:"Det rødeste blad", ikon:"🍁", kategori:"find",
    opdrag:"Find det mest farvestrålende blad, I kan.",
    varighed:"15 min", udendoers:true, aarstid:["efterår"] },

  { id:"hvem-er-her-vinter", titel:"Hvem er her om vinteren?", ikon:"❄️", kategori:"find",
    opdrag:"De fleste insekter er væk nu. Find noget, der stadig er her.",
    varighed:"20 min", udendoers:true, aarstid:["vinter"] },

  { id:"stadig-groent", titel:"Stadig grønt", ikon:"🌲", kategori:"find",
    opdrag:"Find noget, der stadig er grønt midt om vinteren.",
    varighed:"15 min", udendoers:true, aarstid:["vinter"] },

  // ---- SAMMEN -------------------------------------------------------------
  { id:"en-ting-hver", titel:"Én ting hver", ikon:"🤝", kategori:"sammen",
    opdrag:"Alle finder én ting hver. Mødes bagefter og se, hvem der fandt det mærkeligste.",
    varighed:"20 min", udendoers:true },

  { id:"byt-fund", titel:"Byt fund", ikon:"🔄", kategori:"sammen",
    opdrag:"Find noget, og vis det til en anden gruppe. Kan de gætte, hvor I fandt det?",
    varighed:"20 min", udendoers:true },

  { id:"det-maerkeligste", titel:"Det mærkeligste", ikon:"❓", kategori:"sammen",
    opdrag:"Find det mest mærkelige, I kan. Noget I ikke aner, hvad er.",
    varighed:"20 min", udendoers:true },

  { id:"samme-sted-igen", titel:"Samme sted igen", ikon:"🔁", kategori:"sammen",
    opdrag:"Gå hen til et sted, I har været før. Er der noget nyt nu?",
    varighed:"20 min", udendoers:true },
];

/** Hvilken årstid er det? Bruges til at sortere missioner fra, der ikke passer. */
export function aarstid(dato = new Date()) {
  const m = dato.getMonth() + 1;
  if (m >= 3 && m <= 5) return "forår";
  if (m >= 6 && m <= 8) return "sommer";
  if (m >= 9 && m <= 11) return "efterår";
  return "vinter";
}

/**
 * Vælger næste mission.
 *
 * To ting gøres her, som ren tilfældighed ikke klarer:
 *   1. Missioner, der ikke passer til årstiden, sorteres fra. Ingen skal lede
 *      efter sommerfugle i januar.
 *   2. Missioner, der allerede har været brugt i dag, springes over — indtil
 *      hele puljen er brugt, hvorefter der startes forfra.
 *
 * @param {Array}  pulje  - missioner at vælge fra (sted + almene)
 * @param {Array}  brugte - id'er på missioner, der allerede har været brugt
 * @param {Date}   dato   - kan overskrives til test
 */
export function vaelgMission(pulje = MISSIONER, brugte = [], dato = new Date()) {
  const saeson = aarstid(dato);
  const iSaeson = (m) => !m.aarstid || m.aarstid.includes(saeson);

  let mulige = pulje.filter((m) => iSaeson(m) && !brugte.includes(m.id));
  if (!mulige.length) mulige = pulje.filter(iSaeson);   // alle brugt → forfra
  if (!mulige.length) mulige = pulje;                   // ingen i sæson → tag hvad der er

  return mulige[Math.floor(Math.random() * mulige.length)];
}

/** Slår en bestemt mission op på id. */
export function missionMedId(id, pulje = MISSIONER) {
  return pulje.find((m) => m.id === id) || null;
}

/** Hvor mange missioner er der reelt til rådighed lige nu? */
export function antalMissioner(pulje = MISSIONER, dato = new Date()) {
  const saeson = aarstid(dato);
  return pulje.filter((m) => !m.aarstid || m.aarstid.includes(saeson)).length;
}

// ===========================================================================
// DEL 3 — PROMPT-BYGGERE
// ===========================================================================

/** Billedgenkendelse (Gemini). Virker i begge tilstande. */
export function byggIdentifikationsPrompt(tilstand, trin = null, stedTekst = "") {
  const maalgruppe =
    tilstand === TILSTAND.SKOLE
      ? `elever i ${KLASSETRIN[trin].label} (${KLASSETRIN[trin].fag})`
      : "børn mellem 6 og 14 år i en SFO eller klub";

  const sprog =
    tilstand === TILSTAND.SKOLE
      ? KLASSETRIN[trin].sprogniveau
      : "Enkelt, levende dansk som en begejstret naturvejleder ville tale. " +
        "Skal kunne forstås af en 6-årig, men ikke være barnligt for en 12-årig. " +
        "Ingen skolesprog, ingen fagmål.";

  return `Du er en dansk naturvejleder, der hjælper ${maalgruppe}.

FØRST: se efter, om der er et menneske på billedet — et ansigt, en person,
en hånd der holder noget tæller ikke, men en person i billedet gør.
Dette er vigtigt af hensyn til børnenes privatliv.

DEREFTER: identificér organismen (dyr, plante, svamp, insekt m.m.).

Svar KUN med gyldig JSON, uden markdown og uden indledning:
{
  "personPaaBillede": true eller false,
  "navn": "dansk artsnavn",
  "latin": "videnskabeligt navn hvis kendt, ellers tom streng",
  "gruppe": "fx insekt, fugl, blomsterplante, svamp",
  "sikkerhed": "høj | middel | lav",
  "beskrivelse": "2-3 sætninger om organismen",
  "levested": "hvor den typisk findes i Danmark",
  "vildtFakta": "én overraskende ting om den, som får børn til at sige wow"
}

Hvis "personPaaBillede" er true, udfyld de øvrige felter med tomme strenge.
Sprogkrav: ${sprog}
Hvis du ikke kan se en organisme tydeligt, sæt "sikkerhed" til "lav" og forklar hvorfor i "beskrivelse".${stedTekst}`;
}

/** SKOLE: opgave forankret i kompetencemål. */
export function byggSkoleopgave(art, trin, omraade) {
  const k = KLASSETRIN[trin];
  const komp = KOMPETENCEOMRAADER[omraade];

  return `Du laver en opgave til en elev i ${k.label} i faget ${k.fag}.

Eleven har fundet og fotograferet: ${art.navn}${art.latin ? ` (${art.latin})` : ""}.
Levested: ${art.levested || "ukendt"}.

Kompetenceområde: ${komp.label}
Læringsmål: ${komp.laeringsmaal[trin]}
Opgavetype: ${komp.opgavetype}
Sprogkrav: ${k.sprogniveau}

Svar KUN med gyldig JSON, uden markdown:
{
  "spoergsmaal": "selve spørgsmålet til eleven",
  "hjaelp": "et lille hint, hvis eleven går i stå — må ikke afsløre svaret",
  "godtSvar": "hvad kendetegner et godt svar på dette trin (til læreren)"
}`;
}

/** FRITID: undren i stedet for opgave. Ingen rigtige eller forkerte svar. */
export function byggFritidsspoergsmaal(art, mission) {
  return `Du er en naturvejleder i en dansk SFO eller klub. Et barn mellem 6 og 14 år
har lige fotograferet: ${art.navn}${art.latin ? ` (${art.latin})` : ""}.

Missionen var: "${mission.opdrag}"

Stil ÉT spørgsmål, der gør barnet nysgerrigt. Vigtige regler:
- Det må IKKE være et quizspørgsmål med et rigtigt svar.
- Det skal kunne besvares af både en 6-årig og en 12-årig, hver på sit niveau.
- Det skal helst få barnet til at kigge på fundet igen eller gå videre ud.
- Ingen skolesprog. Ingen læringsmål. Dette er fritid.
- Barnet kan ikke læse lange tekster. Max to linjer.

Svar KUN med gyldig JSON, uden markdown:
{
  "undren": "dit spørgsmål til barnet",
  "vildtFakta": "én sætning om organismen, der er sjov eller overraskende",
  "naesteMission": "et forslag til hvad barnet kan lede efter nu, én sætning"
}`;
}

/** SKOLE: formativ feedback med lærernote. */
export function byggSkolefeedback(art, trin, omraade, elevSvar, opgave) {
  const k = KLASSETRIN[trin];
  const komp = KOMPETENCEOMRAADER[omraade];

  return `Du giver formativ feedback til en elev i ${k.label} i faget ${k.fag}.

Organisme: ${art.navn}
Spørgsmål: ${opgave.spoergsmaal}
Elevens svar: "${elevSvar}"

Læringsmål: ${komp.laeringsmaal[trin]}
Forventning på trinnet: ${k.forventning}

Retningslinjer:
- Skriv direkte TIL eleven i du-form på dansk.
- Start med noget konkret, eleven faktisk skrev. Ikke tom ros.
- Peg på ÉN ting, eleven kan gøre bedre eller kigge nærmere på.
- Slut med ét nyt spørgsmål, der driver undersøgelsen videre.
- Ret aldrig eleven hårdt. Et delvist svar er et skridt på vejen.
- Sprogkrav: ${k.sprogniveau}

Svar KUN med gyldig JSON, uden markdown:
{
  "feedback": "3-4 sætninger til eleven",
  "naesteSkridt": "ét spørgsmål der driver undersøgelsen videre",
  "maalnaaet": "ja | delvist | endnu-ikke",
  "laerernote": "1 sætning til læreren om hvor eleven står ift. læringsmålet"
}`;
}

/** FRITID: svar på barnets undren. Ingen bedømmelse overhovedet. */
export function byggFritidssvar(art, barnetsSvar, undren) {
  return `Et barn i en SFO eller klub har fotograferet ${art.navn}.

Du spurgte: "${undren}"
Barnet svarede: "${barnetsSvar}"

Svar tilbage som en begejstret naturvejleder. Regler:
- Bedøm ALDRIG svaret. Der er intet rigtigt eller forkert her.
- Byg videre på det barnet sagde — tag det alvorligt, også hvis det er skævt.
- Tilføj én ting, barnet ikke vidste.
- Send barnet videre ud med noget nyt at lede efter.
- Max 3 korte sætninger. Ingen skolesprog.

Svar KUN med gyldig JSON, uden markdown:
{
  "svar": "dit svar til barnet, max 3 sætninger",
  "gaaUdOgLed": "hvad barnet skal lede efter nu, én sætning"
}`;
}

// ===========================================================================
// DEL 4 — SAMLING (fælles artsliste for klassen, SFO'en eller klubben)
// ===========================================================================

/**
 * Motivationen i fritidstilstand er ikke point, men samlingen:
 * "hvor mange arter har VI fundet?". Den virker på tværs af aldre,
 * belønner de sjældne fund og skaber fællesskab frem for konkurrence.
 */
export function opdaterSamling(samling, art) {
  const eksisterende = samling.find(
    (a) => a.navn.toLowerCase() === art.navn.toLowerCase()
  );

  if (eksisterende) {
    eksisterende.antal += 1;
    eksisterende.sidstSet = new Date().toISOString();
    return { samling, nyArt: false, art: eksisterende };
  }

  const ny = {
    navn: art.navn,
    latin: art.latin || "",
    gruppe: art.gruppe || "",
    antal: 1,
    foersteGang: new Date().toISOString(),
    sidstSet: new Date().toISOString(),
  };
  samling.push(ny);
  return { samling, nyArt: true, art: ny };
}

/** Nøgletal til opslagstavlen i SFO'en eller klasselokalet. */
export function samlingsStatus(samling) {
  const grupper = {};
  samling.forEach((a) => {
    const g = a.gruppe || "andet";
    grupper[g] = (grupper[g] || 0) + 1;
  });

  return {
    antalArter: samling.length,
    antalFund: samling.reduce((sum, a) => sum + a.antal, 0),
    grupper,
    sjaeldneste: samling
      .filter((a) => a.antal === 1)
      .map((a) => a.navn)
      .slice(0, 5),
  };
}

// ===========================================================================
// DEL 5 — HJÆLPEFUNKTIONER
// ===========================================================================

/** Robust JSON-parsing af LLM-svar (fjerner markdown-fences). */
export function parseJSON(tekst) {
  return JSON.parse(tekst.replace(/```json|```/g, "").trim());
}

/** Til lærervisning i skoletilstand. */
export function laeringsmaalTekst(trin, omraade) {
  const k = KLASSETRIN[trin];
  const komp = KOMPETENCEOMRAADER[omraade];
  return {
    fag: k.fag,
    trin: k.label,
    kompetenceomraade: komp.label,
    maal: komp.laeringsmaal[trin],
  };
}

/** Sikrer at klassen kommer hele vejen rundt om de fire kompetenceområder. */
export function naesteOmraade(brugte = []) {
  const alle = Object.keys(KOMPETENCEOMRAADER);
  const ubrugte = alle.filter((o) => !brugte.includes(o));
  return ubrugte.length ? ubrugte[0] : alle[0];
}
