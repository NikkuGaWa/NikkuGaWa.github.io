/* ════════════════════════════════════════════════
   ⚙️  CONFIG
════════════════════════════════════════════════ */
const CONFIG = {
  twitch: {
    clientId:    'zyuas00puvna3l849h834yc1ssqro1',
    redirectUri: 'https://nikkugawa.github.io//Pokedex',
    scopes:      'user:read:email',
  },
  supabase: {
    url: 'https://jgzjwhubabsnvccjzbau.supabase.co',
    key: 'sb_publishable_F2HuBjCaZC9QwL4qTuv4aA_kQtKaFvl',
  },
};

const EXCLUDED_USER_NAMES = ['nikkugawa',"nikku_bot_","octavie9"];

const MEGA_EVOLUTIONS = {
  3: { slug: 'venusaur-mega', nom: 'Méga-Florizarre' },
  6: [
    { slug: 'charizard-mega-x', nom: 'Méga-Dracaufeu X' },
    { slug: 'charizard-mega-y', nom: 'Méga-Dracaufeu Y' }
  ],
  9: { slug: 'blastoise-mega', nom: 'Méga-Tortank' },
  15: { slug: 'beedrill-mega', nom: 'Méga-Dardargnan' },
  18: { slug: 'pidgeot-mega', nom: 'Méga-Roucarnage' },
  26: [
    { slug: 'raichu-mega-x', nom: 'Méga-Raichu X' },
    { slug: 'raichu-mega-y', nom: 'Méga-Raichu Y' }
  ],
  36: { slug: 'clefable-mega', nom: 'Méga-Mélodelfe' },
  65: { slug: 'alakazam-mega', nom: 'Méga-Alakazam' },
  71: { slug: 'victreebel-mega', nom: 'Méga-Empiflor' },
  80: { slug: 'slowbro-mega', nom: 'Méga-Flagadoss' },
  94: { slug: 'gengar-mega', nom: 'Méga-Ectoplasma' },
  115: { slug: 'kangaskhan-mega', nom: 'Méga-Kangourex' },
  121: { slug: 'starmie-mega', nom: 'Méga-Staross' },
  127: { slug: 'pinsir-mega', nom: 'Méga-Scarabrute' },
  130: { slug: 'gyarados-mega', nom: 'Méga-Léviator' },
  142: { slug: 'aerodactyl-mega', nom: 'Méga-Ptéra' },
  149: { slug: 'dragonite-mega', nom: 'Méga-Dracolosse' },
  150: [
    { slug: 'mewtwo-mega-x', nom: 'Méga-Mewtwo X' },
    { slug: 'mewtwo-mega-y', nom: 'Méga-Mewtwo Y' }
  ],
  154: { slug: 'meganium-mega', nom: 'Méga-Méganium' },
  160: { slug: 'feraligatr-mega', nom: 'Méga-Aligatueur' },
  181: { slug: 'ampharos-mega', nom: 'Méga-Pharamp' },
  208: { slug: 'steelix-mega', nom: 'Méga-Steelix' },
  212: { slug: 'scizor-mega', nom: 'Méga-Cizayox' },
  214: { slug: 'heracross-mega', nom: 'Méga-Scarhino' },
  227: { slug: 'skarmory-mega', nom: 'Méga-Airmure' },
  229: { slug: 'houndoom-mega', nom: 'Méga-Démolosse' },
  248: { slug: 'tyranitar-mega', nom: 'Méga-Tyranocif' },
  254: { slug: 'sceptile-mega', nom: 'Méga-Jungko' },
  257: { slug: 'blaziken-mega', nom: 'Méga-Braségali' },
  260: { slug: 'swampert-mega', nom: 'Méga-Laggron' },
  282: { slug: 'gardevoir-mega', nom: 'Méga-Gardevoir' },
  302: { slug: 'sableye-mega', nom: 'Méga-Ténéfix' },
  303: { slug: 'mawile-mega', nom: 'Méga-Mysdibule' },
  306: { slug: 'aggron-mega', nom: 'Méga-Galeking' },
  308: { slug: 'medicham-mega', nom: 'Méga-Charmina' },
  310: { slug: 'manectric-mega', nom: 'Méga-Élecsprint' },
  319: { slug: 'sharpedo-mega', nom: 'Méga-Sharpedo' },
  323: { slug: 'camerupt-mega', nom: 'Méga-Camérupt' },
  334: { slug: 'altaria-mega', nom: 'Méga-Altaria' },
  354: { slug: 'banette-mega', nom: 'Méga-Branette' },
  358: { slug: 'chimecho-mega', nom: 'Méga-Éoko' },
  359: [
    { slug: 'absol-mega', nom: 'Méga-Absol' },
    { slug: 'absol-mega-z', nom: 'Méga-Absol Z' }
  ],
  362: { slug: 'glalie-mega', nom: 'Méga-Oniglali' },
  373: { slug: 'salamence-mega', nom: 'Méga-Drattak' },
  376: { slug: 'metagross-mega', nom: 'Méga-Métalosse' },
  380: { slug: 'latias-mega', nom: 'Méga-Latias' },
  381: { slug: 'latios-mega', nom: 'Méga-Latios' },
  382: { slug: 'kyogre-primal', nom: 'Primo-Kyogre' },
  383: { slug: 'groudon-primal', nom: 'Primo-Groudon' },
  384: { slug: 'rayquaza-mega', nom: 'Méga-Rayquaza' },
  398: { slug: 'staraptor-mega', nom: 'Méga-Étouraptor' },
  428: { slug: 'lopunny-mega', nom: 'Méga-Lockpin' },
  445: [
    { slug: 'garchomp-mega', nom: 'Méga-Carchacrok' },
    { slug: 'garchomp-mega-z', nom: 'Méga-Carchacrok Z' }
  ],
  448: [
    { slug: 'lucario-mega', nom: 'Méga-Lucario' },
    { slug: 'lucario-mega-z', nom: 'Méga-Lucario Z' }
  ],
  460: { slug: 'abomasnow-mega', nom: 'Méga-Blizzaroi' },
  475: { slug: 'gallade-mega', nom: 'Méga-Gallame' },
  478: { slug: 'froslass-mega', nom: 'Méga-Momartik' },
  485: { slug: 'heatran-mega', nom: 'Méga-Heatran' },
  491: { slug: 'darkrai-mega', nom: 'Méga-Darkrai' },
};

const megaSpriteCache = {};

/* ════════════════════════════════════════════════
   TIERS
════════════════════════════════════════════════ */
const POKEMON_TIERS = {};
const TIERS_DEF = {
  commun: [
      10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,29,32,39,40,41,42,43,44,46,48,50,54,56,60,66,69,70,72,77,79,81,84,86,88,90,92,96,98,100,102,104,109,116,118,120,129,
    ],

  peuCommun:[
      24,28,30,31,33,34,35,37,45,47,49,51,52,53,55,57,58,61,64,67,71,73,74,75,78,80,82,85,87,89,91,93,95,97,99,101,103,105,106,107,108,110,111,117,119,121,122,127,128,137,147,
    ],

  rare: [
      1,2,4,5,7,8,25,26,36,38,59,62,63,65,68,76,83,94,112,114,115,123,124,125,126,130,131,133,134,135,136,138,140,142,143,148,
    ],

  epique: [
      3,6,9,113,132,139,141,149,
    ],

  fabuleux: [
      151,
    ],

  legendaire: [
      144,145,146,150,
    ]
};

/* ── Gen 2 ajoutée dans chaque tier ── */
TIERS_DEF.commun.push(
  161,162,163,164,165,166,167,168,170,171,179,187,188,190,191,193,194,204,206,209,210,211,216,217,218,219,220,223,224,228,231,232,234,
);
TIERS_DEF.peuCommun.push(
  172,173,174,175,177,178,180,183,184,189,192,195,198,200,202,203,205,207,213,214,215,221,222,226,236,237,238,239,240,241,246,
);
TIERS_DEF.rare.push(
  152,153,155,156,158,159,169,176,181,182,185,186,196,197,199,208,212,229,230,233,247,
);
TIERS_DEF.epique.push(
  154,157,160,201,225,227,235,242,248,
);
TIERS_DEF.fabuleux.push(
  251,
);
TIERS_DEF.legendaire.push(
  243,244,245,249,250,
);

/* ── Gen 3 ajoutée dans chaque tier ── */
TIERS_DEF.commun.push(
  261,262,263,264,265,266,268,270,273,276,277,278,283,284,285,287,290,293,294,296,300,304,307,309,313,314,316,318,322,325,326,327,328,331,332,333,339,341,343,353,355,358,363,366,367,368,370,
);
TIERS_DEF.peuCommun.push(
  267,269,271,274,279,281,288,291,292,295,297,298,299,301,302,305,308,310,311,312,315,317,319,320,323,324,329,335,336,337,338,340,342,344,352,354,356,357,360,361,362,364,369,371,374,
);
TIERS_DEF.rare.push(
  252,253,255,256,258,259,272,275,280,286,289,303,306,321,330,334,345,347,351,359,365,372,375,
);
TIERS_DEF.epique.push(
  254,257,260,282,346,348,349,350,373,376,
);
TIERS_DEF.fabuleux.push(
  385,386,
);
TIERS_DEF.legendaire.push(
  377,378,379,380,381,382,383,384,
);

/* ── Gen 4 ajoutée dans chaque tier ── */
// Posés sans condition : POKEDEX_TOTAL les rend inatteignables hors prévisualisation.
TIERS_DEF.commun.push(
  396,397,398,399,400,401,403,404,412,415,
  420,421,422,431,432,436,449,450,451,452,
  455,456,457,459,460,
);
TIERS_DEF.peuCommun.push(
  402,405,406,408,413,414,418,419,423,424,
  425,427,433,434,435,437,438,439,440,441,
  446,447,453,454,458,
);
TIERS_DEF.rare.push(
  387,388,390,391,393,394,
  407,410,416,417,426,428,429,430,443,444,
  461,462,463,464,465,466,467,469,470,471,
  472,473,476,477,
);
TIERS_DEF.epique.push(
  389,392,395,409,411,442,445,448,468,474,475,
  478,479,489,
);
TIERS_DEF.fabuleux.push(
  490,491,492,
);
TIERS_DEF.legendaire.push(
  480,481,482,483,484,485,486,487,488,
);

/* ── Palier « Arceus » ── */
TIERS_DEF.arceus = [493];

for (const [tier, ids] of Object.entries(TIERS_DEF)) {
  for (const id of ids) POKEMON_TIERS[id] = tier;
}

const ARCEUS_TIER = 'arceus';

const TIER_LABELS = { commun:'Commun', peuCommun:'Peu commun', rare:'Rare', epique:'Épique', fabuleux:'Fabuleux', legendaire:'Légendaire', arceus:'Arceus' };
const TIER_STARS  = { commun:'★', peuCommun:'★★', rare:'★★★', epique:'★★★★', fabuleux:'★★★★★', legendaire:'★★★★★★', arceus:'★★★★★★★' };
// Repli pour le code qui attend un #rrggbb ; le rendu passe par .tier-arceus.
const TIER_COLORS = { commun:'#ffffff', peuCommun:'#4caf50', rare:'#2196f3', epique:'#e040fb', fabuleux:'#fa73ff', legendaire:'#f0d050', arceus:'#c9a7ff' };

const SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/';

/* ════════════════════════════════════════════════
   ZARBI — 28 FORMES
════════════════════════════════════════════════ */
// 28 formes sur le seul id 201, stockées dans captures.form. Pas d'official-artwork
// par lettre : les sprites viennent du jeu HOME.
const UNOWN_ID = 201;

const UNOWN_FORMS = [
  ...'abcdefghijklmnopqrstuvwxyz'.split('').map(l => ({ slug: `unown-${l}`, label: l.toUpperCase() })),
  { slug: 'unown-exclamation', label: '!' },
  { slug: 'unown-question',    label: '?' },
];

// Jeu HOME : le seul complet par forme (Zarbi, formes cosmétiques de Gen 4).
const HOME_SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
const HOME_SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/';

/* ════════════════════════════════════════════════
   FORMDEX — FORMES ALTERNATIVES (HORS MÉGA)
════════════════════════════════════════════════ */
// Copie locale du registre de l'overlay. Ajouter une espèce = une entrée ici.
// artId = l'id de variante PokeAPI qui porte l'official-artwork de la forme.
const POKEMON_FORMS = {
  351: [
    { slug: 'castform',       nom: 'Morphéo',              artId: 351 },
    { slug: 'castform-sunny', nom: 'Morphéo Solaire',      artId: 10013 },
    { slug: 'castform-rainy', nom: 'Morphéo Eau de Pluie', artId: 10014 },
    { slug: 'castform-snowy', nom: 'Morphéo Blizzard',     artId: 10015 },
  ],
  386: [
    { slug: 'deoxys-normal',  nom: 'Deoxys Normal',  artId: 386 },
    { slug: 'deoxys-attack',  nom: 'Deoxys Attaque', artId: 10001 },
    { slug: 'deoxys-defense', nom: 'Deoxys Défense', artId: 10002 },
    { slug: 'deoxys-speed',   nom: 'Deoxys Vitesse', artId: 10003 },
  ],

  /* ── Gen 4 ──
     Noms repris des form_names de PokeAPI : le champ names contient des fautes
     de frappe (« Diagla Originel »). */

  // Cosmétiques : les trois capes partagent l'id 412, seul HOME les distingue.
  412: [
    { slug: 'burmy-plant', nom: 'Cheniti Cape Plante', home: '412-plant' },
    { slug: 'burmy-sandy', nom: 'Cheniti Cape Sable',  home: '412-sandy' },
    { slug: 'burmy-trash', nom: 'Cheniti Cape Déchet', home: '412-trash' },
  ],
  // Cheniselle, elle, a bien trois variantes distinctes (types différents).
  413: [
    { slug: 'wormadam-plant', nom: 'Cheniselle Cape Plante', artId: 413 },
    { slug: 'wormadam-sandy', nom: 'Cheniselle Cape Sable',  artId: 10004 },
    { slug: 'wormadam-trash', nom: 'Cheniselle Cape Déchet', artId: 10005 },
  ],
  421: [
    { slug: 'cherrim-overcast', nom: 'Ceriflor Temps Couvert',    home: '421-overcast' },
    { slug: 'cherrim-sunshine', nom: 'Ceriflor Temps Ensoleillé', home: '421-sunshine' },
  ],
  422: [
    { slug: 'shellos-west', nom: 'Sancoki Mer Occident', home: '422-west' },
    { slug: 'shellos-east', nom: 'Sancoki Mer Orient',   home: '422-east' },
  ],
  423: [
    { slug: 'gastrodon-west', nom: 'Tritosor Mer Occident', home: '423-west' },
    { slug: 'gastrodon-east', nom: 'Tritosor Mer Orient',   home: '423-east' },
  ],
  479: [
    { slug: 'rotom',       nom: 'Motisma',         artId: 479 },
    { slug: 'rotom-heat',  nom: 'Motisma Chaleur', artId: 10008 },
    { slug: 'rotom-wash',  nom: 'Motisma Lavage',  artId: 10009 },
    { slug: 'rotom-frost', nom: 'Motisma Froid',   artId: 10010 },
    { slug: 'rotom-fan',   nom: 'Motisma Hélice',  artId: 10011 },
    { slug: 'rotom-mow',   nom: 'Motisma Tonte',   artId: 10012 },
  ],
  483: [
    { slug: 'dialga',        nom: 'Dialga',                  artId: 483 },
    { slug: 'dialga-origin', nom: 'Dialga Forme Originelle', artId: 10245 },
  ],
  484: [
    { slug: 'palkia',        nom: 'Palkia',                  artId: 484 },
    { slug: 'palkia-origin', nom: 'Palkia Forme Originelle', artId: 10246 },
  ],
  // Giratina n'a pas de « base » : ses deux formes sont nommées.
  487: [
    { slug: 'giratina-altered', nom: 'Giratina Forme Alternative', artId: 487 },
    { slug: 'giratina-origin',  nom: 'Giratina Forme Originelle',  artId: 10007 },
  ],
  492: [
    { slug: 'shaymin-land', nom: 'Shaymin Forme Terrestre', artId: 492 },
    { slug: 'shaymin-sky',  nom: 'Shaymin Forme Céleste',   artId: 10006 },
  ],
};

// Zarbi a son Zarbidex : 28 lettres écraseraient les autres espèces du Formdex.
const FORMDEX_EXCLUDED_IDS = new Set([UNOWN_ID]);

/* ════════════════════════════════════════════════
   ÉTAT
════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════
   GÉNÉRATION 4 — PRÉVISUALISATION
════════════════════════════════════════════════ */
// GENERATIONS et POKEDEX_TOTAL sont recalculés à la connexion plutôt que testés
// partout : tout le fichier les lit tels quels. Rien ne doit donc les capturer
// dans une constante au chargement du script.
const GEN4_PREVIEW_LOGIN = 'nikkugawa';

const ALL_GENERATIONS = [
  { id: 1, label: 'Génération 1', shortLabel: 'Gen 1', start: 1,   end: 151 },
  { id: 2, label: 'Génération 2', shortLabel: 'Gen 2', start: 152, end: 251 },
  { id: 3, label: 'Génération 3', shortLabel: 'Gen 3', start: 252, end: 386 },
  { id: 4, label: 'Génération 4', shortLabel: 'Gen 4', start: 387, end: 493 },
];

const GEN4_ID = 4;

// Défauts d'avant la Gen 4 : un visiteur pas encore authentifié voit le site inchangé.
let GENERATIONS   = ALL_GENERATIONS.filter(g => g.id !== GEN4_ID);
let POKEDEX_TOTAL = 386;

function isGen4Visible() {
  return !!state.user && String(state.user.login).toLowerCase() === GEN4_PREVIEW_LOGIN;
}

// Seul point où le drapeau est lu. Appelé avant tout rendu et avant applyUrlState().
function applyGen4Visibility() {
  const shown = isGen4Visible();

  GENERATIONS   = shown ? ALL_GENERATIONS : ALL_GENERATIONS.filter(g => g.id !== GEN4_ID);
  POKEDEX_TOTAL = GENERATIONS[GENERATIONS.length - 1].end;

  /* `data-gen4` marque tout ce qui n'existe que dans la prévisualisation. */
  document.querySelectorAll('[data-gen4]').forEach(el => { el.hidden = !shown; });

  // Un filtre resté sur la Gen 4 viderait la grille sans qu'un bouton visible l'explique.
  if (shown) return;
  for (const key of ['activeGenFilter', 'communityGenFilter', 'activeStatsGen',
                     'dashRarityGen', 'throwGen', 'spawnGen', 'diffGen']) {
    if (String(state[key]) === String(GEN4_ID)) state[key] = 'all';
  }
}

function getGenerationTotal(gen) {
  return gen.end - gen.start + 1;
}

// Bornes d'une génération telle qu'affichée, ou du Pokédex entier pour 'all'.
function getGenBounds(genId) {
  const gen = GENERATIONS.find(g => String(g.id) === String(genId));
  return gen
    ? { min: gen.start, max: gen.end, total: getGenerationTotal(gen), label: gen.shortLabel }
    : { min: 1, max: POKEDEX_TOTAL, total: POKEDEX_TOTAL, label: 'Total' };
}

// La base contient des captures hors du Pokédex affiché : sans ce filtre, « 388 / 386 ».
function isInPokedex(id) {
  const numId = Number(id);
  return Number.isInteger(numId) && numId >= 1 && numId <= POKEDEX_TOTAL;
}

function getVisibleGenerations() {
  if (state.activeGenFilter === 'all') return GENERATIONS;
  return GENERATIONS.filter(gen => String(gen.id) === String(state.activeGenFilter));
}

let state = {
  user:         null,
  twitchToken:  null,
  captures:     [],
  ownCaptures:  [],
  names:        {},
  activeFilter: 'all',
  activeGenFilter: 'all',
  activeStatsGen: 'all',
  searchQuery:  '',
  adminUsers: [],
  adminViewingUser: null,
  // Une ligne par variante (espèce x shiny x méga x forme), celle de son premier
  // captureur. Même forme que state.captures, donc les mêmes helpers s'y appliquent.
  communityCaptures: [],
  communityBySpecies: {},        // { id: [variantes] } — grilles et modale
  communityFilter: 'all',
  communityGenFilter: 'all',
  communitySearch: '',
  communityMode: 'normal', // 'normal' | 'mega' | 'form' | 'unown'
  pokédexMode: 'normal', // 'normal' | 'mega' | 'form' | 'unown'
  dashRarityGen: 'all',
  // Un état par panneau, tous repliés au départ. Deux panneaux qui partagent une
  // barre de filtres partagent la clé : leurs écrous la commandent ensemble.
  statsFiltersShown: { rarity: false, throws: false, spawn: false, difficulty: false },
  // Filtres de la ligne « apparitions », partagés par ses deux panneaux
  spawnGen: 'all',
  spawnTier: 'all',
  // Filtres du panneau personnel « mes lancers de balls »
  throwGen: 'all',
  throwTier: 'all',
  throwBall: 'all',   // 'all' | 'pokeball' | 'superball' | 'hyperball'
  // Filtres de la ligne « difficulté », partagés par ses deux panneaux
  diffGen: 'all',
  diffTier: 'all',
  diffBall: 'all',
  // login → URL d'avatar, rempli une fois (cf. loadThrowerAvatars)
  throwAvatars: {},
};

let _modalLastFocus = null;

/* ════════════════════════════════════════════════
   DEEP-LINKING (URL HASH)
════════════════════════════════════════════════ */
const VALID_VIEWS   = ['pokedex', 'communauté', 'stats', 'classements', 'dresseurs'];
// arceus n'y figure pas : un palier d'un seul Pokémon n'a pas de bouton de filtre,
// et un deep-link ?filter=arceus viderait la grille sans contrôle visible pour l'expliquer.
const VALID_FILTERS = ['all', 'captured', 'uncaptured', 'shiny', 'commun', 'peuCommun', 'rare', 'epique', 'fabuleux', 'legendaire'];
/* Les filtres qui trient par rareté, par opposition à all/captured/shiny. */
const TIER_FILTER_KEYS = ['commun', 'peuCommun', 'rare', 'epique', 'fabuleux', 'legendaire'];
const VALID_MODES   = ['normal', 'mega', 'form', 'unown'];

function pickAllowed(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

// La Gen 4 n'existe que pour le compte de prévisualisation : ?gen=4 doit retomber
// sur « Toutes » chez les autres, pas vider la grille.
function pickGen(value) {
  if (value === 'all') return 'all';
  return GENERATIONS.some(g => String(g.id) === String(value)) ? String(value) : 'all';
}

function getUrlState() {
  const hash = window.location.hash.replace('#', '');
  // Le fragment de retour OAuth n'est pas un état de navigation
  if (!hash || hash.includes('access_token')) return {};

  const [rawView, rawQuery] = hash.split('?');

  let view;
  try {
    // location.hash est percent-encodé : "communauté" arrive en "communaut%C3%A9"
    view = decodeURIComponent(rawView || '');
  } catch {
    return {};
  }
  if (!VALID_VIEWS.includes(view)) return {};

  const params = new URLSearchParams(rawQuery || '');
  return {
    view,
    filter:          pickAllowed(params.get('filter'), VALID_FILTERS, 'all'),
    gen:             pickGen(params.get('gen')),
    mode:            pickAllowed(params.get('mode'), VALID_MODES, 'normal'),
    search:          params.get('search') || '',
    communityFilter: pickAllowed(params.get('cf'), VALID_FILTERS, 'all'),
    communityGen:    pickGen(params.get('cg')),
    communityMode:   pickAllowed(params.get('cm'), VALID_MODES, 'normal'),
    communitySearch: params.get('cs') || '',
  };
}

function updateUrlState() {
  const activeView = document.querySelector('.nav-btn.active')?.dataset.page || 'pokedex';
  const params = new URLSearchParams();

  if (state.activeFilter !== 'all')       params.set('filter', state.activeFilter);
  if (state.activeGenFilter !== 'all')    params.set('gen', state.activeGenFilter);
  if (state.pokédexMode !== 'normal')     params.set('mode', state.pokédexMode);
  if (state.searchQuery)                  params.set('search', state.searchQuery);
  if (state.communityFilter !== 'all')    params.set('cf', state.communityFilter);
  if (state.communityGenFilter !== 'all') params.set('cg', state.communityGenFilter);
  if (state.communityMode !== 'normal')   params.set('cm', state.communityMode);
  if (state.communitySearch)              params.set('cs', state.communitySearch);

  const query = params.toString();
  const hash = encodeURIComponent(activeView) + (query ? '?' + query : '');
  history.replaceState(null, '', '#' + hash);
}

function applyUrlState(urlState = getUrlState()) {
  if (!urlState.view) return;

  state.activeFilter       = urlState.filter;
  state.activeGenFilter    = urlState.gen;
  state.pokédexMode        = urlState.mode;
  state.searchQuery        = urlState.search.trim().toLowerCase();
  state.communityFilter    = urlState.communityFilter;
  state.communityGenFilter = urlState.communityGen;
  state.communityMode      = urlState.communityMode;
  state.communitySearch    = urlState.communitySearch.trim().toLowerCase();

  document.querySelectorAll('#view-pokedex .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === state.activeFilter);
  });
  document.querySelectorAll('#view-pokedex .gen-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.genFilter === state.activeGenFilter);
  });
  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.toggle === state.pokédexMode);
  });

  document.querySelectorAll('#view-community .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.communityFilter === state.communityFilter);
  });
  document.querySelectorAll('#view-community .gen-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.communityGen === state.communityGenFilter);
  });
  document.querySelectorAll('#view-community [data-community-toggle]').forEach(b => {
    b.classList.toggle('active', b.dataset.communityToggle === state.communityMode);
  });

  const searchEl = document.getElementById('filter-search');
  if (searchEl) searchEl.value = state.searchQuery;
  const communitySearchEl = document.getElementById('community-filter-search');
  if (communitySearchEl) communitySearchEl.value = state.communitySearch;

  switchToPage(urlState.view);
}

function switchToPage(page) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });

  document.getElementById('view-pokedex').style.display   = page === 'pokedex'     ? 'block' : 'none';
  document.getElementById('view-community').style.display = page === 'communauté'  ? 'block' : 'none';
  document.getElementById('view-stats').style.display     = page === 'stats'       ? 'block' : 'none';
  document.getElementById('view-rank').style.display      = page === 'classements' ? 'block' : 'none';
  document.getElementById('view-admin').style.display     = page === 'dresseurs'   ? 'block' : 'none';

  if (page === 'classements') loadStats(true);
  if (page === 'dresseurs')   loadAdminUsers(true);
  if (page === 'stats')       loadStatsDashboard(true);
  if (page === 'communauté')  loadCommunityPokedex();
}

/* ════════════════════════════════════════════════
   PREFERS-REDUCED-MOTION
════════════════════════════════════════════════ */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduced-motion');
}

/* ════════════════════════════════════════════════
   TWITCH OAUTH
════════════════════════════════════════════════ */
const TOKEN_STORAGE_KEY = 'twitch_access_token';
const OAUTH_STATE_KEY   = 'twitch_oauth_state';

// Sans le paramètre state, rien ne prouve que la réponse répond à une demande
// partie d'ici : un attaquant pourrait connecter la victime sur SON compte.
function createOAuthState() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const nonce = [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
  sessionStorage.setItem(OAUTH_STATE_KEY, nonce);
  return nonce;
}

function getTwitchLoginUrl() {
  const params = new URLSearchParams({
    client_id:     CONFIG.twitch.clientId,
    redirect_uri:  CONFIG.twitch.redirectUri,
    response_type: 'token',
    scope:         CONFIG.twitch.scopes,
    force_verify:  'false',
    state:         createOAuthState(),
  });
  return `https://id.twitch.tv/oauth2/authorize?${params}`;
}

function clearStoredToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  sessionStorage.removeItem(OAUTH_STATE_KEY);
}

// Un token arrivant par l'URL n'est accepté que si son state correspond au nonce
// émis par ce navigateur ; sinon il est ignoré, jamais stocké.
function getTokenFromHash() {
  const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
  const params = new URLSearchParams(window.location.hash.substring(1));
  const urlToken = params.get('access_token');

  if (!urlToken) return storedToken;

  const expectedState = sessionStorage.getItem(OAUTH_STATE_KEY);
  sessionStorage.removeItem(OAUTH_STATE_KEY);

  if (!expectedState || params.get('state') !== expectedState) {
    console.error('Réponse OAuth rejetée : paramètre state absent ou invalide');
    return storedToken;
  }

  localStorage.setItem(TOKEN_STORAGE_KEY, urlToken);
  return urlToken;
}

// Sans révocation côté Twitch, la déconnexion laisse le token valide des semaines.
// Best-effort : ne bloque jamais la déconnexion locale.
function revokeTwitchToken(token) {
  if (!token) return;
  const body = new URLSearchParams({
    client_id: CONFIG.twitch.clientId,
    token,
  });
  fetch('https://id.twitch.tv/oauth2/revoke', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
    keepalive: true,
  }).catch(() => {});
}

/* Vaut aussi validation du token : Twitch renvoie 401 si le Client-ID de l'en-tête
   n'est pas celui qui l'a émis. Ne pas repasser par /oauth2/validate : préflight CORS
   sans réponse depuis une origine statique, tout le monde restait déconnecté. */
async function fetchTwitchUser(token) {
  const res = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Client-ID':     CONFIG.twitch.clientId,
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!res.ok) throw new Error(`Twitch helix/users ${res.status}`);

  const data = await res.json();
  return data.data?.[0] || null;
}

async function fetchTwitchUsersByLogin(logins) {
  if (!state.twitchToken || !logins.length) return {};

  const uniqueLogins = [...new Set(logins.map(normalizeLogin).filter(Boolean))];
  const result = {};

  for (let i = 0; i < uniqueLogins.length; i += 100) {
    const params = new URLSearchParams();
    uniqueLogins.slice(i, i + 100).forEach(login => params.append('login', login));

    try {
      const res = await fetch(`https://api.twitch.tv/helix/users?${params}`, {
        headers: {
          'Client-ID':     CONFIG.twitch.clientId,
          'Authorization': `Bearer ${state.twitchToken}`,
        }
      });

      if (!res.ok) continue;
      const data = await res.json();

      for (const user of data.data || []) {
        result[user.login.toLowerCase()] = user.profile_image_url;
      }
    } catch {}
  }

  return result;
}

/* ════════════════════════════════════════════════
   SUPABASE
════════════════════════════════════════════════ */
// Les logins Twitch sont limités à [a-z0-9_]. Un login contenant & , ou .
// modifierait les filtres PostgREST de l'URL.
const TWITCH_LOGIN_RE = /^[a-z0-9_]{1,25}$/;

function normalizeLogin(userLogin) {
  const login = String(userLogin || '').trim().toLowerCase();
  return TWITCH_LOGIN_RE.test(login) ? login : null;
}

async function fetchCaptures(userLogin) {
  const login = normalizeLogin(userLogin);
  if (!login) throw new Error(`Login invalide : ${userLogin}`);

  return fetchAllSupabaseRows(
    `${CONFIG.supabase.url}/rest/v1/captures?user_login=eq.${encodeURIComponent(login)}&select=*`,
    {
      'apikey':        CONFIG.supabase.key,
      'Authorization': `Bearer ${CONFIG.supabase.key}`,
    }
  );
}

async function fetchGlobalStats() {
  try {
    const rows = await fetchAllSupabaseRows(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name`,
      {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    );
    const filteredRows = rows.filter(r =>
      !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
    );

    const trainers = new Set(filteredRows.map(r => r.user_login)).size;

    document.getElementById('stat-trainers').textContent = trainers;
    document.getElementById('stat-captures').textContent = filteredRows.length;
  } catch (e) {
    // Les compteurs restent sur "—" plutôt que d'afficher un chiffre faux
    console.error('Statistiques globales indisponibles', e);
  }
}

/* ════════════════════════════════════════════════
   SUPABASE — Pagination complète
════════════════════════════════════════════════ */
// ORDER BY stable obligatoire : sans lui, limit/offset duplique ou perd des lignes
// dès que la table dépasse 1000 entrées.
const STABLE_ROW_ORDER = 'id.asc';
const SUPABASE_PAGE_SIZE = 1000;

async function fetchAllSupabaseRows(baseUrl, baseHeaders) {
  const orderedUrl = baseUrl.includes('order=')
    ? baseUrl
    : `${baseUrl}&order=${STABLE_ROW_ORDER}`;

  const all = [];
  let offset = 0;

  while (true) {
    const res = await fetch(`${orderedUrl}&limit=${SUPABASE_PAGE_SIZE}&offset=${offset}`, {
      headers: { ...baseHeaders, 'Prefer': 'count=none' },
    });

    // Ne jamais avaler l'erreur : des données partielles passeraient pour complètes.
    if (!res.ok) {
      throw new Error(`Supabase ${res.status} sur ${baseUrl.split('?')[0]}`);
    }

    const rows = await res.json();
    if (!rows || !rows.length) break;

    all.push(...rows);
    if (rows.length < SUPABASE_PAGE_SIZE) break;
    offset += SUPABASE_PAGE_SIZE;
  }

  return all;
}

function showLoadError(el, message) {
  if (!el) return;
  el.innerHTML = `<div class="stats-empty">${escapeHtml(message)}</div>`;
}

/* ════════════════════════════════════════════════
   NOMS POKÉMON
════════════════════════════════════════════════ */
async function fetchAllNames() {
  try {
    const res = await fetch('pokemon_names_fr.json');
    if (!res.ok) throw new Error('Failed to load');
    state.names = await res.json();
  } catch {
    console.warn('Failed to load pokemon_names_fr.json, using fallback names');
    for (let i = 1; i <= POKEDEX_TOTAL; i++) {
      state.names[i] = `#${i}`;
    }
  }
}

/* ════════════════════════════════════════════════
   UTILITAIRES
════════════════════════════════════════════════ */
function buildCaptureMap() {
  const map = {};
  for (const cap of state.captures) {
    if (!map[cap.pokemon_id]) map[cap.pokemon_id] = [];
    map[cap.pokemon_id].push(cap);
  }
  return map;
}

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

/* ════════════════════════════════════════════════
   RENDU GRILLE
════════════════════════════════════════════════ */
function getMegaFormsForGeneration(gen) {
  let count = 0;
  for (const [rawId, megaData] of Object.entries(MEGA_EVOLUTIONS)) {
    const id = Number(rawId);
    if (id < gen.start || id > gen.end) continue;
    count += Array.isArray(megaData) ? megaData.length : 1;
  }
  return count;
}

function getMegaTotal() {
  return GENERATIONS.reduce((sum, gen) => sum + getMegaFormsForGeneration(gen), 0);
}

// Shiny d'une carte : « quelqu'un l'a en shiny » au Pokédex perso, « la première
// capture l'était » en Communauté, où la carte affiche à côté la date et le captureur
// de cette première ligne.
function isShinyCard(captures, community) {
  return community ? !!captures[0]?.is_shiny : captures.some(c => c.is_shiny);
}

// Clés « id:slug », pour coller à ce que la grille affiche en mode Megadex.
function getCapturedMegaForms(captures) {
  const forms = new Set();

  for (const cap of captures) {
    if (!cap.is_mega) continue;
    // La grille s'arrête à POKEDEX_TOTAL : sans ce filtre, « 56 / 54 ».
    if (!isInPokedex(cap.pokemon_id)) continue;

    const megaData = MEGA_EVOLUTIONS[cap.pokemon_id];
    if (!megaData) continue;

    const megaForms = Array.isArray(megaData) ? megaData : [megaData];
    // Sans colonne mega_form (captures d'avant la migration), on retombe sur la première forme.
    const slug = cap.mega_form || megaForms[0].slug;
    if (megaForms.some(f => f.slug === slug)) forms.add(`${cap.pokemon_id}:${slug}`);
  }

  return forms;
}

/* ─── Zarbidex ─────────────────────────────────── */
function getUnownSpriteUrl(slug, isShiny = false) {
  // slug « unown-b » → fichier « 201-b.png » côté PokeAPI
  const suffix = slug.slice('unown-'.length);
  return `${isShiny ? HOME_SPRITE_SHINY : HOME_SPRITE_BASE}${UNOWN_ID}-${suffix}.png`;
}

function getUnownTotal() {
  return UNOWN_FORMS.length;
}

// Écrit un mot en alphabet Zarbi. Le texte lisible reste dans l'aria-label du parent.
function renderUnownWords() {
  document.querySelectorAll('[data-unown-word]').forEach(el => {
    const word = String(el.dataset.unownWord || '').toLowerCase();
    el.innerHTML = '';

    for (const char of word) {
      const form = UNOWN_FORMS.find(f => f.label.toLowerCase() === char);
      if (!form) continue;   // espace, ponctuation non couverte : simplement ignoré
      const img = document.createElement('img');
      img.src = getUnownSpriteUrl(form.slug, false);
      img.alt = '';
      // Pas de loading=lazy : le bouton naît caché, il apparaîtrait vide puis s'élargirait.
      el.appendChild(img);
    }
  });
}

function isUnownCapture(cap) {
  return Number(cap.pokemon_id) === UNOWN_ID;
}

// On teste la présence d'un Zarbi quelconque : ceux d'avant la colonne form ont
// form = null et doivent quand même ouvrir l'onglet.
function hasAnyUnown(captures) {
  return captures.some(isUnownCapture);
}

// Un Zarbi sans form ne peut être rattaché à aucune lettre : il ne coche rien.
function getCapturedUnownForms(captures) {
  const forms = new Set();
  for (const cap of captures) {
    if (!isUnownCapture(cap) || !cap.form) continue;
    if (UNOWN_FORMS.some(f => f.slug === cap.form)) forms.add(cap.form);
  }
  return forms;
}

function getUnownCapturesForForm(captures, slug) {
  return captures.filter(c => isUnownCapture(c) && c.form === slug);
}

/* ─── Formdex ──────────────────────────────────── */
// Seul point de passage du mode : l'exclusion de Zarbi et le garde-fou du Pokédex
// ne sont écrits qu'ici.
function getFormdexSpecies() {
  return Object.entries(POKEMON_FORMS)
    .map(([id, forms]) => ({ id: Number(id), forms }))
    .filter(species => !FORMDEX_EXCLUDED_IDS.has(species.id) && isInPokedex(species.id))
    .sort((a, b) => a.id - b.id);
}

/* Deux sources selon ce que PokeAPI distingue : artId quand la forme est une
   variante à part entière (son propre official-artwork), home quand elle est
   cosmétique et rangée sous l'id de l'espèce. Jamais les deux. */
function getFormSpriteUrl(form, isShiny = false) {
  if (form.home) return `${isShiny ? HOME_SPRITE_SHINY : HOME_SPRITE_BASE}${form.home}.png`;
  return `${isShiny ? SPRITE_SHINY : SPRITE_BASE}${form.artId}.png`;
}

function getFormTotal() {
  return getFormdexSpecies().reduce((sum, species) => sum + species.forms.length, 0);
}

// Clés « id:slug ». Une capture à form = null ne coche rien : on ne peut pas lui
// attribuer une forme au hasard.
function getCapturedForms(captures) {
  const knownSlugs = new Map(
    getFormdexSpecies().map(species => [species.id, new Set(species.forms.map(f => f.slug))])
  );

  const captured = new Set();
  for (const cap of captures) {
    const id = Number(cap.pokemon_id);
    const slugs = knownSlugs.get(id);
    if (!slugs || !cap.form || !slugs.has(cap.form)) continue;
    captured.add(`${id}:${cap.form}`);
  }
  return captured;
}

function getFormCaptures(captures, id, slug) {
  return captures.filter(c => Number(c.pokemon_id) === id && c.form === slug);
}

// On teste la possession de l'espèce, pas d'une forme identifiée : un Morphéo
// d'avant la colonne form doit quand même ouvrir l'onglet.
function hasAnyFormSpecies(captures) {
  const speciesIds = new Set(getFormdexSpecies().map(s => s.id));
  return captures.some(c => speciesIds.has(Number(c.pokemon_id)));
}

// Le bandeau porte déjà le nom de l'espèce, la carte ne garde que le suffixe.
// La forme de base ne laisse rien après retrait : elle s'annonce « Base ».
function getFormShortLabel(form, speciesName) {
  const short = form.nom.startsWith(speciesName)
    ? form.nom.slice(speciesName.length).trim()
    : form.nom;
  return short || 'Base';
}

// Barre globale et panneau de détail, communs au Pokédex perso et à la Communauté.
function _renderProgressBars({ captures, mode, fillId, countId, panelId }) {
  const isMega  = mode === 'mega';
  const isUnown = mode === 'unown';
  const isForm  = mode === 'form';
  const capturedMegaForms  = isMega  ? getCapturedMegaForms(captures)  : null;
  const capturedUnownForms = isUnown ? getCapturedUnownForms(captures) : null;
  const capturedAltForms   = isForm  ? getCapturedForms(captures)      : null;

  const capturedIds = new Set(captures.map(c => Number(c.pokemon_id)).filter(isInPokedex));

  const capturedCount = isMega  ? capturedMegaForms.size
                      : isUnown ? capturedUnownForms.size
                      : isForm  ? capturedAltForms.size
                      : capturedIds.size;
  const globalTotal   = isMega  ? getMegaTotal()
                      : isUnown ? getUnownTotal()
                      : isForm  ? getFormTotal()
                      : POKEDEX_TOTAL;
  const globalPercent = globalTotal ? Math.round((capturedCount / globalTotal) * 100) : 0;

  document.getElementById(fillId).style.width  = `${globalPercent}%`;
  document.getElementById(countId).textContent = `${capturedCount} / ${globalTotal}`;

  const panel = document.getElementById(panelId);
  if (!panel) return;

  // Zarbidex : les 28 formes sont en Gen 2, le détail par génération répéterait le
  // compteur global. Le bouton est masqué en parallèle par syncPokedexMode().
  if (isUnown) {
    panel.innerHTML = '';
    return;
  }

  // Formdex : le détail se lit par espèce, comme le découpage de la grille.
  if (isForm) {
    panel.innerHTML = getFormdexSpecies().map(species => {
      const total = species.forms.length;
      const count = species.forms.filter(f => capturedAltForms.has(`${species.id}:${f.slug}`)).length;
      const percent = Math.round((count / total) * 100);
      const name = state.names[species.id] || `#${species.id}`;

      return `
        <div class="generation-progress-row">
          <div class="generation-progress-head">
            <span>${escapeHtml(name)}</span>
            <strong>${count} / ${total}</strong>
          </div>
          <div class="generation-progress-track">
            <div class="generation-progress-fill" style="width:${percent}%"></div>
          </div>
        </div>
      `;
    }).join('');
    return;
  }

  panel.innerHTML = GENERATIONS.map(gen => {
    const total = isMega ? getMegaFormsForGeneration(gen) : getGenerationTotal(gen);
    if (!total) return '';

    const count = isMega
      ? [...capturedMegaForms].filter(key => {
          const id = Number(key.split(':')[0]);
          return id >= gen.start && id <= gen.end;
        }).length
      : [...capturedIds].filter(id => id >= gen.start && id <= gen.end).length;
    const percent = Math.round((count / total) * 100);

    return `
      <div class="generation-progress-row">
        <div class="generation-progress-head">
          <span>${gen.label}</span>
          <strong>${count} / ${total}</strong>
        </div>
        <div class="generation-progress-track">
          <div class="generation-progress-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderProgressBars() {
  _renderProgressBars({
    captures: state.captures,
    mode:     state.pokédexMode,
    fillId:   'progress-fill',
    countId:  'progress-count',
    panelId:  'generation-progress-panel',
  });
}

function _renderPokeGrid({
  grid,
  searchQuery,
  activeFilter,
  visibleGenerations,
  getCaptureInfo,
  onProgressBars,
  onCardClick,
  pokédexMode = 'normal',
  community = false,
}) {
  onProgressBars();
  grid.innerHTML = '';

  // En mode « Non capturés » on révèle les sprites ; les noms restent en « ??? ».
  grid.classList.toggle('reveal-sprites', activeFilter === 'uncaptured');

  let displayedCount = 0;
  const megaSpritePromises = [];

  for (const gen of visibleGenerations) {
    const section = document.createElement('section');
    section.className = 'generation-section';
    section.innerHTML = `
      <div class="generation-title">
        <div class="generation-title-main"><span>${gen.label}</span></div>
      </div>
      <div class="generation-grid"></div>
    `;
    const genGrid = section.querySelector('.generation-grid');

    for (let id = gen.start; id <= gen.end; id++) {
      const tier = POKEMON_TIERS[id];
      const name = state.names[id] || `#${id}`;
      const capInfo = getCaptureInfo(id);
      
      let megaCaptures = [];
      if (pokédexMode === 'mega') {
        if (Array.isArray(capInfo)) {
          megaCaptures = capInfo.filter(c => c.is_mega);
        } else if (capInfo?.is_mega) {
          megaCaptures = [capInfo];
        }
      }

      if (pokédexMode === 'mega') {
        if (!MEGA_EVOLUTIONS[id]) continue;

        const megaData = MEGA_EVOLUTIONS[id];
        const megaForms = Array.isArray(megaData) ? megaData : [megaData];

        for (const megaForm of megaForms) {
          let formCaptured = false;
          let formCaptures = [];
          
          if (megaCaptures.length > 0) {
            const capturesWithForm = megaCaptures.filter(c => c.mega_form);
            
            if (capturesWithForm.length > 0) {
              formCaptures = megaCaptures.filter(c => c.mega_form === megaForm.slug);
              formCaptured = formCaptures.length > 0;
            } else {
              // Captures d'avant la colonne mega_form : on suppose la première forme déclarée.
              formCaptured = megaForm === megaForms[0];
              formCaptures = megaCaptures;
            }
          }
          
          const captured = formCaptured;
          const hasShiny = isShinyCard(formCaptures, community);
          const date = formCaptures[0]?.captured_at;

          if (activeFilter === 'captured' && !captured) continue;
          if (activeFilter === 'uncaptured' && captured) continue;
          if (activeFilter === 'shiny' && !hasShiny) continue;
          if (TIER_FILTER_KEYS.includes(activeFilter) && tier !== activeFilter) continue;
          // La recherche doit aussi matcher le nom de la forme ("méga-dracaufeu")
          const megaSearchTarget = `${name} ${megaForm.nom}`.toLowerCase();
          if (searchQuery && !megaSearchTarget.includes(searchQuery) && !String(id).includes(searchQuery)) continue;

          const spriteUrl = hasShiny ? `${SPRITE_SHINY}${id}.png` : `${SPRITE_BASE}${id}.png`;

          const card = document.createElement('div');
          const cardClasses = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
          card.className = cardClasses;
          card.dataset.id = id;
          card.dataset.megaForm = megaForm.slug;
          
          const spriteImg = document.createElement('img');
          spriteImg.className = 'poke-sprite';
          spriteImg.src = spriteUrl;
          spriteImg.alt = name;
          spriteImg.loading = 'lazy';
          
          const formSuffix = megaForm.slug.split('-').pop().toUpperCase();
          const isPrimal   = megaForm.slug.includes('-primal');
          const hiddenName = `${isPrimal ? 'Primo' : 'Méga'}-???`
            + (['X', 'Y', 'Z'].includes(formSuffix) ? ` ${formSuffix}` : '');
          const nameMega   = captured ? megaForm.nom : hiddenName;

          card.innerHTML = `
            <div class="poke-sprite-wrap"></div>
            <div class="poke-number">#${String(id).padStart(3, '0')}</div>
            <div class="poke-name">${nameMega}</div>
            ${captured ? `<div class="poke-date">${formatDate(date)}</div>` : ''}
          `;
          card.querySelector('.poke-sprite-wrap').appendChild(spriteImg);

          card.tabIndex = 0;
          card.setAttribute('role', 'button');
          card.setAttribute('aria-label', `Carte ${captured ? megaForm.nom : 'Méga-Évolution inconnue'} ${TIER_LABELS[tier]}`);
          card.addEventListener('click', () => onCardClick(id, megaCaptures, megaForm.slug));
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCardClick(id, megaCaptures, megaForm.slug);
            }
          });
          genGrid.appendChild(card);
          displayedCount++;

          if (captured) {
            megaSpritePromises.push(
              getMegaSpriteUrl(id, megaForm.slug, hasShiny).then(megaSpriteUrl => {
                if (megaSpriteUrl) {
                  spriteImg.src = megaSpriteUrl;
                }
              })
            );
          }
        }
      } else {
        // Tout le monde passe un tableau ; la normalisation ne couvre que l'id absent.
        const capList  = Array.isArray(capInfo) ? capInfo : (capInfo ? [capInfo] : []);
        const captured = capList.length > 0;
        const hasShiny = isShinyCard(capList, community);
        const date = capList[0]?.captured_at;

        if (activeFilter === 'captured' && !captured) continue;
        if (activeFilter === 'uncaptured' && captured) continue;
        if (activeFilter === 'shiny' && !hasShiny) continue;
        if (TIER_FILTER_KEYS.includes(activeFilter) && tier !== activeFilter) continue;
        if (searchQuery && !name.toLowerCase().includes(searchQuery) && !String(id).includes(searchQuery)) continue;

        const spriteUrl = hasShiny ? `${SPRITE_SHINY}${id}.png` : `${SPRITE_BASE}${id}.png`;

        const card = document.createElement('div');
        const cardClasses = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
        card.className = cardClasses;
        card.dataset.id = id;
        
        card.innerHTML = `
          <div class="poke-sprite-wrap">
            <img class="poke-sprite" src="${spriteUrl}" alt="${name}" loading="lazy">
          </div>
          <div class="poke-number">#${String(id).padStart(3, '0')}</div>
          <div class="poke-name">${captured ? name : '???'}</div>
          ${captured ? `<div class="poke-date">${formatDate(date)}</div>` : ''}
        `;

        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Carte ${captured ? name : 'Pokémon inconnu'} ${TIER_LABELS[tier]}`);
        card.addEventListener('click', () => onCardClick(id, capInfo));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick(id, capInfo);
          }
        });
        genGrid.appendChild(card);
        displayedCount++;
      }
    }

    if (genGrid.children.length) grid.appendChild(section);
  }

  if (displayedCount === 0) {
    const emptyMsg = pokédexMode === 'mega' 
      ? 'Aucune Méga Évolution trouvée'
      : 'Aucun Pokémon trouvé';
    grid.innerHTML = `<div class="grid-empty-state">${emptyMsg}</div>`;
  }

  Promise.all(megaSpritePromises).catch(() => {});
}

// Grille du Zarbidex : 28 cartes sur un seul id, là où _renderPokeGrid itère
// générations x ids.
function _renderUnownGrid({
  grid,
  getCapturesForForm,
  onProgressBars,
  onCardClick,
  community = false,
}) {
  onProgressBars();
  grid.innerHTML = '';

  const tier     = POKEMON_TIERS[UNOWN_ID];
  const baseName = state.names[UNOWN_ID] || 'Zarbi';

  // Pas de .generation-title : le bandeau sépare des générations, il n'y en a qu'une.
  const section = document.createElement('section');
  section.className = 'generation-section';
  section.innerHTML = '<div class="generation-grid"></div>';
  const genGrid = section.querySelector('.generation-grid');

  for (const form of UNOWN_FORMS) {
    const formCaptures = getCapturesForForm(form.slug);
    const captured = formCaptures.length > 0;
    const hasShiny = isShinyCard(formCaptures, community);
    const date     = formCaptures[0]?.captured_at;
    const fullName = `${baseName} ${form.label}`;

    // Aucun filtrage : la barre de filtres est masquée dans ce mode.
    const card = document.createElement('div');
    card.className = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
    card.dataset.id = UNOWN_ID;
    card.dataset.unownForm = form.slug;

    // Ni numéro ni nom : les 28 cartes partagent le #201 et le même « Zarbi ».
    // L'alt et l'aria-label portent l'information pour les lecteurs d'écran.
    card.innerHTML = `
      <div class="poke-sprite-wrap">
        <img class="poke-sprite" src="${getUnownSpriteUrl(form.slug, hasShiny)}" alt="${escapeHtml(fullName)}" loading="lazy">
      </div>
      ${captured ? `<div class="poke-date">${formatDate(date)}</div>` : ''}
    `;

    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Carte ${captured ? fullName : 'forme de Zarbi inconnue'} ${TIER_LABELS[tier]}`);
    card.addEventListener('click', () => onCardClick(form.slug, formCaptures));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onCardClick(form.slug, formCaptures);
      }
    });

    genGrid.appendChild(card);
  }

  grid.appendChild(section);
}

// Grille du Formdex : une section par espèce, là où _renderPokeGrid itère
// générations x ids. Raretés et recherche restent actives, les espèces listées
// n'ont ni la même rareté ni le même nombre de formes.
function _renderFormGrid({
  grid,
  searchQuery,
  activeFilter,
  getCapturesForForm,
  onProgressBars,
  onCardClick,
  community = false,
}) {
  onProgressBars();
  grid.innerHTML = '';
  grid.classList.toggle('reveal-sprites', activeFilter === 'uncaptured');

  let displayedCount = 0;

  for (const species of getFormdexSpecies()) {
    const tier        = POKEMON_TIERS[species.id];
    const speciesName = state.names[species.id] || `#${species.id}`;

    const section = document.createElement('section');
    section.className = 'generation-section';
    section.innerHTML = `
      <div class="generation-title">
        <div class="generation-title-main"><span>${escapeHtml(speciesName)}</span></div>
      </div>
      <div class="generation-grid"></div>
    `;
    const genGrid = section.querySelector('.generation-grid');

    for (const form of species.forms) {
      const formCaptures = getCapturesForForm(species.id, form.slug);
      const captured = formCaptures.length > 0;
      const hasShiny = isShinyCard(formCaptures, community);
      const date     = formCaptures[0]?.captured_at;

      if (activeFilter === 'captured' && !captured) continue;
      if (activeFilter === 'uncaptured' && captured) continue;
      if (activeFilter === 'shiny' && !hasShiny) continue;
      if (TIER_FILTER_KEYS.includes(activeFilter) && tier !== activeFilter) continue;
      // « morphéo » comme « blizzard » doivent tomber sur la bonne carte
      const searchTarget = `${speciesName} ${form.nom}`.toLowerCase();
      if (searchQuery && !searchTarget.includes(searchQuery) && !String(species.id).includes(searchQuery)) continue;

      const label = getFormShortLabel(form, speciesName);

      const card = document.createElement('div');
      card.className = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
      card.dataset.id = species.id;
      card.dataset.form = form.slug;

      card.innerHTML = `
        <div class="poke-sprite-wrap">
          <img class="poke-sprite" src="${getFormSpriteUrl(form, hasShiny)}" alt="${escapeHtml(form.nom)}" loading="lazy">
        </div>
        <div class="poke-number">#${String(species.id).padStart(3, '0')}</div>
        <div class="poke-name">${captured ? escapeHtml(label) : '???'}</div>
        ${captured ? `<div class="poke-date">${formatDate(date)}</div>` : ''}
      `;

      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Carte ${captured ? form.nom : 'forme inconnue'} ${TIER_LABELS[tier]}`);
      card.addEventListener('click', () => onCardClick(species.id, form.slug, formCaptures));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCardClick(species.id, form.slug, formCaptures);
        }
      });

      genGrid.appendChild(card);
      displayedCount++;
    }

    if (genGrid.children.length) grid.appendChild(section);
  }

  if (displayedCount === 0) {
    grid.innerHTML = '<div class="grid-empty-state">Aucune forme trouvée</div>';
  }
}

function getMegaEvolution(pokemonId) {
  const mega = MEGA_EVOLUTIONS[pokemonId] || null;
  if (!mega) return null;
  if (Array.isArray(mega)) {
    return mega[Math.floor(Math.random() * mega.length)];
  }
  return mega;
}

// On filtre par mega_form dès qu'une capture en porte un ; sinon (captures d'avant
// la colonne) seule la première forme déclarée compte.
function getCapturesForMegaForm(captures, pokemonId, slug) {
  if (!captures.length) return [];

  const withForm = captures.filter(c => c.mega_form);
  if (withForm.length) return captures.filter(c => c.mega_form === slug);

  const megaData = MEGA_EVOLUTIONS[pokemonId];
  const first = Array.isArray(megaData) ? megaData[0]?.slug : megaData?.slug;
  return slug === first ? captures : [];
}

// La carte affiche megaForm.nom ; sans ça la modale annonçait « Mysdibule » sous
// une carte « Méga-Mysdibule ».
function getMegaFormName(pokemonId, slug) {
  const megaData = MEGA_EVOLUTIONS[pokemonId];
  if (!megaData) return null;

  const forms = Array.isArray(megaData) ? megaData : [megaData];
  return forms.find(f => f.slug === slug)?.nom || null;
}

async function getMegaSpriteUrl(pokemonId, megaForm = null, isShiny = false) {
  const mega = MEGA_EVOLUTIONS[pokemonId];
  if (!mega) return null;

  const slug = megaForm || (Array.isArray(mega) ? mega[0].slug : mega.slug);
  const cacheKey = `${slug}${isShiny ? '-shiny' : ''}`;
  
  if (megaSpriteCache[cacheKey]) return megaSpriteCache[cacheKey];

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`);
    if (!res.ok) throw new Error(`PokeAPI ${res.status}`);
    const data = await res.json();
    
    let url;
    if (isShiny) {
      url = data?.sprites?.other?.['official-artwork']?.front_shiny;
      if (!url) url = data?.sprites?.front_shiny;
    }
    if (!url) url = data?.sprites?.other?.['official-artwork']?.front_default;
    if (!url) url = data?.sprites?.front_default;
    
    if (url) megaSpriteCache[cacheKey] = url;
    return url;
  } catch (e) {
    console.warn(`Sprite mega unavailable for ${slug}`);
    return null;
  }
}

// Fait retomber en « normal » un mode que le dresseur affiché n'a pas le droit de
// voir. Doit rester en tête de renderGrid() : c'est le seul passage commun au clic,
// au deep-link et au changement de dresseur.
function syncPokedexMode() {
  const unownBtn = document.getElementById('pokédex-toggle-unown');
  const showUnown = hasAnyUnown(state.captures);

  if (unownBtn) unownBtn.style.display = showUnown ? '' : 'none';
  if (!showUnown && state.pokédexMode === 'unown') state.pokédexMode = 'normal';

  const formBtn = document.getElementById('pokédex-toggle-form');
  const showForm = hasAnyFormSpecies(state.captures);

  if (formBtn) formBtn.style.display = showForm ? '' : 'none';
  if (!showForm && state.pokédexMode === 'form') state.pokédexMode = 'normal';

  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.toggle === state.pokédexMode);
  });

  // Toutes les formes de Zarbi sont en Gen 2 : le filtre de génération n'aurait que
  // des réponses vides.
  const isUnown = state.pokédexMode === 'unown';
  const isForm  = state.pokédexMode === 'form';

  // Le Formdex se découpe par espèce ; le reste des filtres, lui, reste utile.
  const genFilters = document.querySelector('#view-pokedex .generation-filters');
  if (genFilters) genFilters.style.display = (isUnown || isForm) ? 'none' : '';

  const detailsToggle = document.getElementById('progress-toggle');
  const detailsPanel  = document.getElementById('generation-progress-panel');
  if (detailsToggle) {
    detailsToggle.style.display = isUnown ? 'none' : '';
    // Replié, sinon on quitterait le mode avec un bouton fermé et un panneau ouvert
    if (isUnown) {
      detailsToggle.classList.remove('open');
      detailsToggle.setAttribute('aria-expanded', 'false');
    }
  }
  if (detailsPanel && isUnown) detailsPanel.style.display = 'none';

  // 28 cartes tiennent à l'écran et partagent toutes la rareté de Zarbi.
  const filters = document.querySelector('#view-pokedex .filters');
  if (filters) filters.style.display = isUnown ? 'none' : '';

  // Sinon un deep-link #pokedex?filter=rare&mode=unown laisse un filtre actif mais
  // invisible, et une grille vide sans explication.
  if (isUnown && (state.activeFilter !== 'all' || state.searchQuery)) {
    resetPokedexFilters();
  }
}

function renderGrid() {
  syncPokedexMode();

  if (state.pokédexMode === 'unown') {
    _renderUnownGrid({
      grid: document.getElementById('pokedex-grid'),
      getCapturesForForm: (slug) => getUnownCapturesForForm(state.captures, slug),
      onProgressBars: renderProgressBars,
      onCardClick: (slug, formCaptures) => openUnownModal(slug, formCaptures),
    });
    return;
  }

  if (state.pokédexMode === 'form') {
    _renderFormGrid({
      grid: document.getElementById('pokedex-grid'),
      searchQuery: state.searchQuery,
      activeFilter: state.activeFilter,
      getCapturesForForm: (id, slug) => getFormCaptures(state.captures, id, slug),
      onProgressBars: renderProgressBars,
      onCardClick: (id, slug, formCaptures) => openFormModal(id, slug, formCaptures),
    });
    return;
  }

  const capMap = buildCaptureMap();
  _renderPokeGrid({
    grid: document.getElementById('pokedex-grid'),
    searchQuery: state.searchQuery,
    activeFilter: state.activeFilter,
    visibleGenerations: getVisibleGenerations(),
    getCaptureInfo: (id) => capMap[id],
    onProgressBars: renderProgressBars,
    onCardClick: (id, info, megaForm) => openModal(id, info, megaForm),
    pokédexMode: state.pokédexMode,
  });
}

/* ════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════ */
// mode et community viennent de l'appelant : la même modale sert les deux vues.
async function openModal(id, captures, megaForm = null, { community = false, mode = state.pokédexMode } = {}) {
  const name     = state.names[id] || `#${id}`;
  const tier     = POKEMON_TIERS[id];
  
  const capturedList = captures && captures.length > 0 ? captures : [];

  // La carte du Megadex transmet toutes les mégas de l'espèce : on redescend ici à la forme.
  const isMegaForm = mode === 'mega' && !!megaForm;
  const displayedCaptures = isMegaForm
    ? getCapturesForMegaForm(capturedList, id, megaForm)
    : capturedList;

  // Déduit de la forme affichée, jamais de l'espèce : sinon posséder une seule méga
  // ouvrirait toutes les autres formes en « capturé ».
  const captured = displayedCaptures.length > 0;

  // Nom de la forme, pas de l'espèce. Repli sur l'espèce pour une forme hors registre.
  const displayName = (isMegaForm && getMegaFormName(id, megaForm)) || name;

  // Le badge méga reste agrégé : il dit que l'espèce a été méga-évoluée.
  const hasShiny = isShinyCard(displayedCaptures, community);
  const hasMega = displayedCaptures.some(c => c.is_mega);

  let spriteUrl = hasShiny
    ? `${SPRITE_SHINY}${id}.png`
    : `${SPRITE_BASE}${id}.png`;
  
  if (mode === 'mega' && megaForm && captured) {
    const megaSpriteUrl = await getMegaSpriteUrl(id, megaForm, hasShiny);
    if (megaSpriteUrl) spriteUrl = megaSpriteUrl;
  }

  document.getElementById('modal-sprite').src       = spriteUrl;
  document.getElementById('modal-sprite').className = `modal-sprite${captured ? '' : ' silhouette'}`;
  document.getElementById('modal-name').textContent   = captured ? displayName : '???';
  document.getElementById('modal-number').textContent = `#${String(id).padStart(3, '0')}`;

  const badges = document.getElementById('modal-badges');
  badges.innerHTML = '';

  const tb = document.createElement('span');
  tb.className = `modal-badge modal-badge-${tier}`;
  tb.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasMega) {
    const mb = document.createElement('span');
    mb.className = 'modal-badge modal-badge-mega';
    mb.innerHTML = '<img src="https://archives.bulbagarden.net/media/upload/c/cd/Mega_Evolution_key_stone_icon.png" alt="Keystone" style="width:14px; height:14px; margin-right:4px; vertical-align:middle;"> Méga Évolution';
    badges.appendChild(mb);
  }

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className = 'modal-badge modal-badge-shiny';
    sb.innerHTML = '✨ Shiny';
    badges.appendChild(sb);
  }

  const info = document.getElementById('modal-info');
  info.innerHTML = renderCaptureInfo(captured ? displayedCaptures : [], { community });
  wireCaptureDetails();

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();

  trapFocus(overlay);
}

// Modale d'une forme de Zarbi. Même DOM qu'openModal, sans les branches méga.
function openUnownModal(slug, formCaptures = [], { community = false } = {}) {
  const form     = UNOWN_FORMS.find(f => f.slug === slug);
  if (!form) return;

  const baseName = state.names[UNOWN_ID] || 'Zarbi';
  const tier     = POKEMON_TIERS[UNOWN_ID];
  const captured = formCaptures.length > 0;
  const hasShiny = isShinyCard(formCaptures, community);

  const sprite = document.getElementById('modal-sprite');
  sprite.src       = getUnownSpriteUrl(slug, hasShiny);
  sprite.className = `modal-sprite${captured ? '' : ' silhouette'}`;

  document.getElementById('modal-name').textContent   = captured ? `${baseName} ${form.label}` : '???';
  document.getElementById('modal-number').textContent = `#${String(UNOWN_ID).padStart(3, '0')}`;

  const badges = document.getElementById('modal-badges');
  badges.innerHTML = '';

  const tb = document.createElement('span');
  tb.className   = `modal-badge modal-badge-${tier}`;
  tb.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className = 'modal-badge modal-badge-shiny';
    sb.innerHTML = '✨ Shiny';
    badges.appendChild(sb);
  }

  const info = document.getElementById('modal-info');
  info.innerHTML = renderCaptureInfo(captured ? formCaptures : [], { community });
  wireCaptureDetails();

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();
  trapFocus(overlay);
}

// Modale d'une forme alternative : le sprite vient de l'artId de la variante.
function openFormModal(id, slug, formCaptures = [], { community = false } = {}) {
  const species = getFormdexSpecies().find(s => s.id === id);
  const form    = species?.forms.find(f => f.slug === slug);
  if (!form) return;

  const tier     = POKEMON_TIERS[id];
  const captured = formCaptures.length > 0;
  const hasShiny = isShinyCard(formCaptures, community);

  const sprite = document.getElementById('modal-sprite');
  sprite.src       = getFormSpriteUrl(form, hasShiny);
  sprite.className = `modal-sprite${captured ? '' : ' silhouette'}`;

  document.getElementById('modal-name').textContent   = captured ? form.nom : '???';
  document.getElementById('modal-number').textContent = `#${String(id).padStart(3, '0')}`;

  const badges = document.getElementById('modal-badges');
  badges.innerHTML = '';

  const tb = document.createElement('span');
  tb.className   = `modal-badge modal-badge-${tier}`;
  tb.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className = 'modal-badge modal-badge-shiny';
    sb.innerHTML = '✨ Shiny';
    badges.appendChild(sb);
  }

  const info = document.getElementById('modal-info');
  info.innerHTML = renderCaptureInfo(captured ? formCaptures : [], { community });
  wireCaptureDetails();

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();
  trapFocus(overlay);
}

// Appelé à la FERMETURE, donc quel que soit l'ouvreur suivant.
function resetModalDetails() {
  const variants = document.getElementById('modal-variants');
  const summary  = document.getElementById('modal-summary');

  if (variants) {
    variants.hidden = true;
    variants.innerHTML = '';
    variants.closest('.modal')?.classList.remove('details-open');
  }
  if (summary) summary.hidden = false;
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  const lastFocus = _modalLastFocus;
  overlay.classList.remove('open');
  resetModalDetails();
  overlay.removeEventListener('keydown', overlay._trapHandler);
  if (lastFocus && typeof lastFocus.focus === 'function') {
    lastFocus.focus({ preventScroll: true });
  }
  _modalLastFocus = null;
}

function trapFocus(element) {
  const focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  element._trapHandler = (e) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  element.addEventListener('keydown', element._trapHandler);
}

// ─── Navigation entre les vues ────────────────
// `[data-page]` exclut #back-to-me-btn, qui est un .nav-btn avec son propre handler
document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', () => {
    switchToPage(btn.dataset.page);
    updateUrlState();
  });
});

// ─── Chargement des classements ───────────────
async function loadStats(forceRefresh = false) {
  const container = document.getElementById('rank-completion');
  container.innerHTML = '<div class="stats-loading">Chargement du classement...</div>';

  try {
    if (!state.statsDashCache || forceRefresh) {
      state.statsDashCache = await fetchAllSupabaseRows(
        `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at`,
        {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      );
    }
  } catch (e) {
    console.error(e);
    showLoadError(container, 'Impossible de charger le classement. Réessaie plus tard.');
    showLoadError(document.getElementById('sdash-first-capturers'), 'Impossible de charger le classement.');
    return;
  }

  // statsRowsCache pointe sur le même cache — pas de second fetch
  state.statsRowsCache = state.statsDashCache;

  const allRows = state.statsDashCache.filter(r =>
    !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
  );

  state.dashSortedByDate = [...allRows]
    .filter(r => r.captured_at)
    .sort((a, b) => new Date(a.captured_at) - new Date(b.captured_at));

  renderStatsRanking();

  const activeFirstGenBtn = document.querySelector('#view-rank [data-first-gen].active');
  renderBestTrainerCommuPanel(activeFirstGenBtn ? activeFirstGenBtn.dataset.firstGen : 'all');
}

function getStatsGenerationConfig() {
  return getGenBounds(state.activeStatsGen);
}

function renderStatsRanking() {
  const gen = getStatsGenerationConfig();
  const rows = state.statsRowsCache || [];
  const filteredRows = rows.filter(r =>
    !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase()) &&
    Number(r.pokemon_id) >= gen.min &&
    Number(r.pokemon_id) <= gen.max
  );

  const users = {};

  for (const r of filteredRows) {
    const login = String(r.user_login || '').toLowerCase();
    if (!login) continue;

    if (!users[login]) {
      users[login] = {
        login,
        name: r.user_name || login,
        pokemons: new Set(),
      };
    }

    users[login].pokemons.add(Number(r.pokemon_id));
  }

  const list = Object.values(users)
    .sort((a, b) => b.pokemons.size - a.pokemons.size)
    .slice(0, 10);

  renderRankingWithAvatars('rank-completion', list, gen.total);
}

// Jeton de séquence : sans lui, un changement rapide d'onglet fait gagner la
// réponse la plus lente et affiche un classement qui ne correspond plus au filtre.
const _avatarRenderTokens = {};

function renderRankingWithAvatars(containerId, list, total) {
  const token = (_avatarRenderTokens[containerId] || 0) + 1;
  _avatarRenderTokens[containerId] = token;

  const isStale = () => _avatarRenderTokens[containerId] !== token;

  fetchTwitchUsersByLogin(list.map(u => u.login))
    .then(avatars => {
      if (isStale()) return;
      for (const u of list) u.avatar = avatars[u.login] || '';
      renderPodiumRanking(containerId, list, total);
    })
    .catch(() => {
      // Sans avatar on affiche quand même le classement (initiales en repli)
      if (!isStale()) renderPodiumRanking(containerId, list, total);
    });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getInitial(name) {
  return escapeHtml(String(name || '?').trim().charAt(0).toUpperCase() || '?');
}

// https absolu seulement : bloque javascript:, data: et le reste dans src.
function safeImageUrl(url) {
  try {
    const parsed = new URL(String(url), window.location.origin);
    return parsed.protocol === 'https:' ? parsed.href : null;
  } catch {
    return null;
  }
}

function avatarMarkup(user, className) {
  const safeName = escapeHtml(user.name);
  const avatar = safeImageUrl(user.avatar);

  if (avatar) {
    return `<img class="${className}" src="${escapeHtml(avatar)}" alt="${safeName}">`;
  }
  return `<div class="${className} avatar-fallback" aria-label="${safeName}">${getInitial(user.name)}</div>`;
}

function renderPodiumRanking(containerId, list, total = POKEDEX_TOTAL) {
  const container = document.getElementById(containerId);

  if (!list.length) {
    container.innerHTML = `
      <div class="stats-empty">
        Aucun dresseur classé pour le moment.
      </div>`;
    return;
  }

  const top3 = list.slice(0, 3);
  const rest = list.slice(3);
  const podiumOrder = [1, 0, 2];

  container.innerHTML = `
    <div class="podium">
      ${podiumOrder.map(index => {
        const u = top3[index];
        if (!u) return '';

        const place = index + 1;
        const safeName = escapeHtml(u.name);
        const completed = u.pokemons.size;
        const percent = Math.round((completed / total) * 100);
        const placeLabel = place === 1 ? '1er' : place === 2 ? '2e' : '3e';

        return `
          <div class="podium-card podium-${place} clickable" data-login="${escapeHtml(u.login)}">
            <div class="podium-rank">${placeLabel}</div>
            ${avatarMarkup(u, 'podium-avatar')}
            <div class="podium-name stats-user-link" title="${safeName}">${safeName}</div>
            <div class="podium-score">${completed} / ${total}</div>
            <div class="podium-percent">${percent}% complété</div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="ranking-rest">
      ${rest.map((u, i) => {
        const safeName = escapeHtml(u.name);
        return `
          <div class="ranking-row clickable" data-login="${escapeHtml(u.login)}">
            <span class="rank-pos">#${i + 4}</span>
            ${avatarMarkup(u, 'rank-avatar')}
            <span class="rank-name stats-user-link" title="${safeName}">${safeName}</span>
            <span class="rank-value">${u.pokemons.size} / ${total}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
  // Sélecteur restreint aux conteneurs cliquables : un [data-login] imbriqué
  // déclencherait viewUserPokedex deux fois par bubbling.
  container.querySelectorAll('.podium-card[data-login], .ranking-row[data-login]').forEach(el => {
    el.addEventListener('click', () => {
      const login = el.dataset.login;

      const user = list.find(
        u => u.login.toLowerCase() === login.toLowerCase()
      );

      if (user) {
        viewUserPokedex(user);
      }
    });
  });
}

/* ════════════════════════════════════════════════
   POKÉDEX COMMUNAUTÉ
════════════════════════════════════════════════ */
async function loadCommunityPokedex(forceRefresh = false) {
  if (state.communityCaptures.length && !forceRefresh) {
    renderCommunityGrid();
    return;
  }

  const grid = document.getElementById('community-grid');
  grid.innerHTML = '<div class="grid-skeleton">Chargement...</div>';

  let rows;
  try {
    // captured_at n'est pas unique : id départage et rend la pagination déterministe.
    rows = await fetchAllSupabaseRows(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,is_mega,mega_form,form,captured_at&order=captured_at.asc,id.asc`,
      {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    );
  } catch (e) {
    console.error(e);
    showLoadError(grid, 'Impossible de charger le Pokédex communautaire. Réessaie plus tard.');
    return;
  }

  // Une ligne par variante, pas par espèce : captured_at.asc fait que la première
  // rencontrée est celle de son premier captureur.
  const firsts      = [];
  const seenVariant = new Set();
  const bySpecies   = {};

  for (const r of rows) {
    if (EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())) continue;

    const key = communityVariantKey(r);
    if (seenVariant.has(key)) continue;
    seenVariant.add(key);

    firsts.push(r);
    (bySpecies[r.pokemon_id] ||= []).push(r);
  }

  state.communityCaptures  = firsts;
  state.communityBySpecies = bySpecies;
  renderCommunityGrid();
}

// La clé d'unique_capture moins le login. NULL vers '' comme dans throwKey(),
// sinon la clé varie selon que la colonne est absente ou vide.
function communityVariantKey(r) {
  return [
    Number(r.pokemon_id),
    r.is_shiny ? 1 : 0,
    r.is_mega  ? 1 : 0,
    r.mega_form || '',
    r.form      || '',
  ].join('|');
}

function renderCommunityProgressBars() {
  _renderProgressBars({
    captures: state.communityCaptures,
    mode:     state.communityMode,
    fillId:   'community-progress-fill',
    countId:  'community-progress-count',
    panelId:  'community-generation-progress-panel',
  });
}

// Jumeau de syncPokedexMode(), sans ses gardes : les quatre onglets communautaires
// sont toujours visibles, un Zarbidex vide y dit « personne ne l'a ».
function syncCommunityMode() {
  document.querySelectorAll('#view-community [data-community-toggle]').forEach(b => {
    b.classList.toggle('active', b.dataset.communityToggle === state.communityMode);
  });

  const isUnown = state.communityMode === 'unown';
  const isForm  = state.communityMode === 'form';

  // Le Formdex se découpe par espèce et les 28 Zarbi tiennent en Gen 2.
  const genFilters = document.querySelector('#view-community .generation-filters');
  if (genFilters) genFilters.style.display = (isUnown || isForm) ? 'none' : '';

  const detailsToggle = document.getElementById('community-progress-toggle');
  const detailsPanel  = document.getElementById('community-generation-progress-panel');
  if (detailsToggle) {
    detailsToggle.style.display = isUnown ? 'none' : '';
    // Replié, sinon on quitterait le mode avec un bouton fermé et un panneau ouvert
    if (isUnown) {
      detailsToggle.classList.remove('open');
      detailsToggle.setAttribute('aria-expanded', 'false');
    }
  }
  if (detailsPanel && isUnown) detailsPanel.style.display = 'none';

  const filters = document.querySelector('#view-community .filters');
  if (filters) filters.style.display = isUnown ? 'none' : '';

  // Sinon un deep-link laisse un filtre actif mais invisible.
  if (isUnown && (state.communityFilter !== 'all' || state.communitySearch)) {
    resetCommunityFilters();
  }
}

function renderCommunityGrid() {
  syncCommunityMode();

  if (state.communityMode === 'unown') {
    _renderUnownGrid({
      grid: document.getElementById('community-grid'),
      getCapturesForForm: (slug) => getUnownCapturesForForm(state.communityCaptures, slug),
      onProgressBars: renderCommunityProgressBars,
      onCardClick: (slug, formCaptures) => openUnownModal(slug, formCaptures, { community: true }),
      community: true,
    });
    return;
  }

  if (state.communityMode === 'form') {
    _renderFormGrid({
      grid: document.getElementById('community-grid'),
      searchQuery: state.communitySearch,
      activeFilter: state.communityFilter,
      getCapturesForForm: (id, slug) => getFormCaptures(state.communityCaptures, id, slug),
      onProgressBars: renderCommunityProgressBars,
      onCardClick: (id, slug, formCaptures) => openFormModal(id, slug, formCaptures, { community: true }),
      community: true,
    });
    return;
  }

  const visibleGens = state.communityGenFilter === 'all'
    ? GENERATIONS
    : GENERATIONS.filter(g => String(g.id) === String(state.communityGenFilter));

  _renderPokeGrid({
    grid: document.getElementById('community-grid'),
    searchQuery: state.communitySearch,
    activeFilter: state.communityFilter,
    visibleGenerations: visibleGens,
    // En Megadex, info est déjà la liste des mégas filtrée par _renderPokeGrid : la
    // repasser telle quelle est indispensable, le repli « sans colonne mega_form » de
    // getCapturesForMegaForm() ferait sinon passer les captures non méga sous la 1re forme.
    getCaptureInfo: (id) => state.communityBySpecies[id],
    onProgressBars: renderCommunityProgressBars,
    onCardClick: (id, info, megaForm) => openModal(
      id, info || [], megaForm, { community: true, mode: state.communityMode },
    ),
    pokédexMode: state.communityMode,
    community: true,
  });
}

function renderBestTrainerCommuPanel(gen) {
  const el = document.getElementById('sdash-first-capturers');
  if (!el || !state.dashSortedByDate) return;

  const { min: minId, max: maxId, total } = getGenBounds(gen);

  const firstCapturers = {};
  const seenPokemon = new Set();

  for (const r of state.dashSortedByDate) {
    const id = Number(r.pokemon_id);
    if (id < minId || id > maxId) continue;
    if (!seenPokemon.has(id)) {
      seenPokemon.add(id);
      const login = r.user_login;
      if (!firstCapturers[login]) firstCapturers[login] = { login, name: r.user_name || login, avatar: '', pokemons: new Set() };
      firstCapturers[login].pokemons.add(id);
    }
  }

  const top = Object.values(firstCapturers).sort((a, b) => b.pokemons.size - a.pokemons.size).slice(0, 10);

  if (!top.length) {
    el.innerHTML = '<div class="stats-empty">Aucune donnée</div>';
    return;
  }

  renderRankingWithAvatars('sdash-first-capturers', top, total);
}

function renderRarityPanel(gen) {
  const rarityEl = document.getElementById('sdash-rarity-list');
  if (!rarityEl) return;

  const capturedIds = state.dashCapturedIds;
  if (!capturedIds) return;

  const { min: minId, max: maxId } = getGenBounds(gen);

  const TIERS_ORDER = [ARCEUS_TIER,'legendaire','fabuleux','epique','rare','peuCommun','commun'];

  rarityEl.innerHTML = TIERS_ORDER.map(tier => {
    const ids      = (TIERS_DEF[tier] || []).filter(id => id >= minId && id <= maxId);
    const total    = ids.length;
    if (!total) return '';
    const captured = ids.filter(id => capturedIds.has(id)).length;
    const pct      = Math.round((captured / total) * 100);
    const color    = TIER_COLORS[tier];
    return `
      <div class="sdash-rarity-row">
        <div class="sdash-rarity-head">
          <span class="sdash-rarity-name tier-${tier}">${TIER_STARS[tier]} ${TIER_LABELS[tier]}</span>
          <span class="sdash-rarity-count">${captured} / ${total}</span>
        </div>
        <div class="sdash-bar-track">
          <div class="sdash-bar-fill tier-bg-${tier}" style="width:${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

// Partagé par « les plus capturés » et « le plus apparu ». La barre est
// proportionnelle au n°1 de la liste, pas à un maximum absolu.
function renderTopPokemonRows(entries, emptyLabel = 'Aucune donnée') {
  if (!entries.length) return `<div class="stats-empty">${escapeHtml(emptyLabel)}</div>`;

  const maxCount = entries[0][1] || 1;

  return entries.map(([id, count], i) => {
    const name   = state.names[id] || `#${id}`;
    const tier   = POKEMON_TIERS[id];
    const barPct = Math.round((count / maxCount) * 100);
    return `
      <div class="sdash-top-row">
        <span class="sdash-top-rank">#${i + 1}</span>
        <img class="sdash-top-sprite" src="${SPRITE_BASE}${id}.png" alt="${escapeHtml(name)}" loading="lazy">
        <span class="sdash-top-name tier-${tier}">${escapeHtml(name)}</span>
        <div class="sdash-bar-track sdash-bar-inline">
          <div class="sdash-bar-fill tier-bg-${tier}" style="width:${barPct}%;opacity:.27"></div>
        </div>
        <span class="sdash-top-val">${count}</span>
      </div>
    `;
  }).join('');
}

/* ─── Mes lancers de balls ─────────────────────── */
// Le seul panneau personnel du tableau de bord. Une ligne = une variante réellement
// visée, la clé de captures. Rien n'a été enregistré avant la migration : un Pokédex
// complet peut n'afficher aucun lancer.

// Master Ball absente : elle capture à coup sûr. D'où la somme explicite plutôt
// que la colonne throws de la vue, qui l'inclut.
const THROW_BALL_KEYS = ['pokeball', 'superball', 'hyperball'];

// Le panneau personnel suit le compte connecté, jamais le Pokédex consulté.
function getOwnLogin() {
  return state.user ? String(state.user.login).toLowerCase() : '';
}

// La vue des lancers ne porte que le login ; le nom d'affichage vient de captures.
function getTrainerDisplayName(login) {
  return (state.trainerNames && state.trainerNames[login]) || login;
}

function getThrowCount(row) {
  if (state.throwBall !== 'all') return Number(row[`throws_${state.throwBall}`]) || 0;
  return THROW_BALL_KEYS.reduce((sum, key) => sum + (Number(row[`throws_${key}`]) || 0), 0);
}

// Génération et rareté, indépendantes et combinables. Bornes tirées de GENERATIONS.
function matchesThrowFilters(id) {
  if (state.throwTier !== 'all' && POKEMON_TIERS[id] !== state.throwTier) return false;
  if (state.throwGen === 'all') return true;

  const gen = GENERATIONS.find(g => String(g.id) === state.throwGen);
  return !!gen && id >= gen.start && id <= gen.end;
}

function hasActiveThrowFilters() {
  return state.throwGen !== 'all' || state.throwTier !== 'all' || state.throwBall !== 'all';
}

// Une méga ou une forme hors registre garde le nom de son espèce, plutôt qu'un slug brut.
function getThrowLabel(row) {
  const id    = Number(row.pokemon_id);
  const name  = state.names[id] || `#${id}`;
  let   label = name;

  if (row.mega_form) {
    const mega  = MEGA_EVOLUTIONS[id];
    const forms = mega ? (Array.isArray(mega) ? mega : [mega]) : [];
    const match = forms.find(f => f.slug === row.mega_form);
    if (match) label = match.nom;
  } else if (row.form) {
    if (id === UNOWN_ID) {
      const unown = UNOWN_FORMS.find(f => f.slug === row.form);
      if (unown) label = `${name} ${unown.label}`;
    } else {
      const form = (POKEMON_FORMS[id] || []).find(f => f.slug === row.form);
      if (form) label = form.nom;
    }
  }

  return row.is_shiny ? `✨ ${label}` : label;
}

// Les mégas n'ont pas d'URL déductible : la ligne part sur le sprite de l'espèce
// et se corrige quand PokeAPI répond (applyMegaThrowSprites).
function getThrowSpriteUrl(row) {
  const id    = Number(row.pokemon_id);
  const shiny = !!row.is_shiny;

  if (!row.mega_form && row.form) {
    if (id === UNOWN_ID) {
      if (UNOWN_FORMS.some(f => f.slug === row.form)) return getUnownSpriteUrl(row.form, shiny);
    } else {
      const form = (POKEMON_FORMS[id] || []).find(f => f.slug === row.form);
      if (form) return getFormSpriteUrl(form, shiny);
    }
  }

  return `${shiny ? SPRITE_SHINY : SPRITE_BASE}${id}.png`;
}

// Calqué sur renderTopPokemonRows() mais pas partagé : la clé est ici une variante.
function renderThrowRows(entries) {
  const maxCount = entries[0][1] || 1;

  return entries.map(([row, count], i) => {
    const id     = Number(row.pokemon_id);
    const tier   = POKEMON_TIERS[id];
    const label  = getThrowLabel(row);
    const barPct = Math.round((count / maxCount) * 100);
    const megaAttr = row.mega_form
      ? ` data-mega-slug="${escapeHtml(row.mega_form)}" data-mega-id="${id}" data-mega-shiny="${row.is_shiny ? '1' : '0'}"`
      : '';

    return `
      <div class="sdash-top-row">
        <span class="sdash-top-rank">#${i + 1}</span>
        <img class="sdash-top-sprite${row.is_shiny ? ' is-shiny' : ''}" src="${getThrowSpriteUrl(row)}" alt="${escapeHtml(label)}" loading="lazy"${megaAttr}>
        <span class="sdash-top-name tier-${tier}">${escapeHtml(label)}</span>
        <div class="sdash-bar-track sdash-bar-inline">
          <div class="sdash-bar-fill tier-bg-${tier}" style="width:${barPct}%;opacity:.27"></div>
        </div>
        <span class="sdash-top-val">${count}</span>
      </div>
    `;
  }).join('');
}

// Un échec laisse la ligne sur l'espèce : c'est le cas des mégas inventées
// (raichu-mega-x, absol-mega-z), absentes de PokeAPI.
function applyMegaThrowSprites(container) {
  container.querySelectorAll('[data-mega-slug]').forEach(img => {
    getMegaSpriteUrl(Number(img.dataset.megaId), img.dataset.megaSlug, img.dataset.megaShiny === '1')
      .then(url => { if (url) img.src = url; });
  });
}

function renderThrowPanel() {
  document.querySelectorAll('[data-throw-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.throwGen === state.throwGen)
  );
  document.querySelectorAll('[data-throw-tier]').forEach(b =>
    b.classList.toggle('active', b.dataset.throwTier === state.throwTier)
  );
  document.querySelectorAll('[data-throw-ball]').forEach(b =>
    b.classList.toggle('active', b.dataset.throwBall === state.throwBall)
  );

  const el = document.getElementById('sdash-my-throws');
  if (!el || !state.throwRowsCache) return;

  const login = getOwnLogin();
  if (!login) {
    showLoadError(el, 'Connecte-toi pour voir tes lancers.');
    return;
  }

  const entries = state.throwRowsCache
    // Le fetch ramène toute la table pour les panneaux de difficulté ; le tri par
    // dresseur se fait donc ici.
    .filter(row => row.user_login === login)
    // La vue accepte 1..1025, la grille s'arrête à POKEDEX_TOTAL.
    .filter(row => isInPokedex(row.pokemon_id) && matchesThrowFilters(Number(row.pokemon_id)))
    .map(row => [row, getThrowCount(row)])
    // Sans ce filtre, « Hyper Ball » remplirait le panneau de zéros.
    .filter(([, count]) => count > 0)
    // Classement complet parcouru au défilement : tronquer masquerait le bas, or
    // c'est ce qu'un filtre sert à explorer.
    .sort((a, b) => b[1] - a[1]);

  // Vide à cause des filtres et vide faute de données : deux messages distincts.
  if (!entries.length) {
    const empty = hasActiveThrowFilters() ? 'Aucun lancer pour ces filtres' : 'Aucun lancer enregistré';
    el.innerHTML = `<div class="stats-empty">${escapeHtml(empty)}</div>`;
    return;
  }

  el.innerHTML = renderThrowRows(entries);
  applyMegaThrowSprites(el);
}

/* ─── Difficulté de capture ────────────────────── */
// Deux lectures des mêmes lignes. Seules celles menées au bout ont une difficulté
// mesurable. Master Ball exclue : elle capture à coup sûr et tirerait les moyennes vers le bas.
function matchesDiffFilters(id) {
  if (state.diffTier !== 'all' && POKEMON_TIERS[id] !== state.diffTier) return false;
  if (state.diffGen === 'all') return true;

  const gen = GENERATIONS.find(g => String(g.id) === state.diffGen);
  return !!gen && id >= gen.start && id <= gen.end;
}

function hasActiveDiffFilters() {
  return state.diffGen !== 'all' || state.diffTier !== 'all' || state.diffBall !== 'all';
}

// Un seul point de passage : les deux panneaux doivent compter le même sous-ensemble.
// Le filtre Ball n'intervient pas ici — il change le numérateur, jamais le dénominateur.
// Filtrer sur captured_with conditionnerait la sélection au résultat, et « Hyper Ball »
// sortirait plus haute que « Poké Ball », soit l'inverse de ce qu'on lit sur un classement.
function getDiffRows() {
  if (!state.throwRowsCache) return [];

  return state.throwRowsCache.filter(row => {
    if (!row.captured_with || row.captured_with === 'masterball') return false;
    // captured_with et throws_to_capture se posent ensemble en base.
    if (!(Number(row.throws_to_capture) >= 1)) return false;
    // Bots exclus. Ici le login est disponible tel quel, c'est bien ce que contient la liste.
    if (EXCLUDED_USER_NAMES.includes(row.user_login)) return false;

    const id = Number(row.pokemon_id);
    return isInPokedex(id) && matchesDiffFilters(id);
  });
}

// Décomposition additive : les trois moyennes par ball s'additionnent pour redonner
// celle de « Toutes ». Master Ball hors de la somme, comme partout.
function getDiffThrowCount(row) {
  if (state.diffBall !== 'all') return Number(row[`throws_${state.diffBall}`]) || 0;
  return THROW_BALL_KEYS.reduce((sum, key) => sum + (Number(row[`throws_${key}`]) || 0), 0);
}

/* Virgule décimale : « 7,3 » à la française, comme le reste du site. */
function formatThrowAverage(value) {
  return value.toFixed(1).replace('.', ',');
}

function diffEmptyLabel(emptyLabel) {
  return hasActiveDiffFilters() ? 'Aucune capture pour ces filtres' : emptyLabel;
}

// Sous « Hyper Ball », « lancers en moyenne » laisserait croire à un total.
const DIFF_BALL_LABELS = {
  pokeball:  'Poké Balls',
  superball: 'Super Balls',
  hyperball: 'Hyper Balls',
};

function diffThrowNoun() {
  return DIFF_BALL_LABELS[state.diffBall] || 'Lancers';
}

// n reste le nombre de captures : le dénominateur ne bouge pas avec le filtre Ball,
// c'est ce qui rend les trois moyennes additives. Les moyennes nulles sont écartées.
function groupDiffAverages(keyOf) {
  const acc = new Map();

  for (const row of getDiffRows()) {
    const key = keyOf(row);
    if (key === null || key === undefined || key === '') continue;
    const cur = acc.get(key) || { sum: 0, n: 0 };
    cur.sum += getDiffThrowCount(row);
    cur.n   += 1;
    acc.set(key, cur);
  }

  return [...acc.entries()]
    .map(([key, cur]) => ({ key, avg: cur.sum / cur.n, n: cur.n }))
    .filter(e => e.avg > 0)
    // À moyenne égale, le mieux échantillonné passe devant.
    .sort((a, b) => b.avg - a.avg || b.n - a.n);
}

// Par espèce : la variante ne change pas le taux de capture, seul le palier le fait.
function renderHardestPanel() {
  const el = document.getElementById('sdash-hardest');
  if (!el || !state.throwRowsCache) return;

  const entries = groupDiffAverages(row => Number(row.pokemon_id));

  if (!entries.length) {
    el.innerHTML = `<div class="stats-empty">${escapeHtml(diffEmptyLabel('Aucune capture enregistrée'))}</div>`;
    return;
  }

  const max = entries[0].avg || 1;

  el.innerHTML = entries.map((e, i) => {
    const id     = e.key;
    const name   = state.names[id] || `#${id}`;
    const tier   = POKEMON_TIERS[id];
    const barPct = Math.round((e.avg / max) * 100);
    return `
      <div class="sdash-top-row" title="${escapeHtml(`${name} — ${diffThrowNoun().toLowerCase()} en moyenne sur ${e.n} capture${e.n > 1 ? 's' : ''}`)}">
        <span class="sdash-top-rank">#${i + 1}</span>
        <img class="sdash-top-sprite" src="${SPRITE_BASE}${id}.png" alt="${escapeHtml(name)}" loading="lazy">
        <span class="sdash-top-name tier-${tier}">${escapeHtml(name)}</span>
        <div class="sdash-bar-track sdash-bar-inline">
          <div class="sdash-bar-fill tier-bg-${tier}" style="width:${barPct}%;opacity:.27"></div>
        </div>
        <span class="sdash-top-val">${formatThrowAverage(e.avg)}</span>
        <span class="sdash-top-n">×${e.n}</span>
      </div>
    `;
  }).join('');
}

// En lignes et non en podium : le classement se rejoue en permanence sous les filtres.
function renderTopThrowersPanel() {
  const el = document.getElementById('sdash-top-throwers');
  if (!el || !state.throwRowsCache) return;

  const entries = groupDiffAverages(row => String(row.user_login || '').toLowerCase());

  if (!entries.length) {
    el.innerHTML = `<div class="stats-empty">${escapeHtml(diffEmptyLabel('Aucune capture enregistrée'))}</div>`;
    return;
  }

  const max = entries[0].avg || 1;

  el.innerHTML = entries.map((e, i) => {
    const login  = e.key;
    const name   = getTrainerDisplayName(login);
    const barPct = Math.round((e.avg / max) * 100);
    const user   = { name, avatar: state.throwAvatars[login] || '' };
    return `
      <div class="sdash-top-row" title="${escapeHtml(`${name} — ${diffThrowNoun().toLowerCase()} en moyenne sur ${e.n} capture${e.n > 1 ? 's' : ''}`)}">
        <span class="sdash-top-rank">#${i + 1}</span>
        ${avatarMarkup(user, 'rank-avatar')}
        <span class="sdash-top-name">${escapeHtml(name)}</span>
        <div class="sdash-bar-track sdash-bar-inline">
          <div class="sdash-bar-fill sdash-bar-gold" style="width:${barPct}%;opacity:.35"></div>
        </div>
        <span class="sdash-top-val">${formatThrowAverage(e.avg)}</span>
        <span class="sdash-top-n">×${e.n}</span>
      </div>
    `;
  }).join('');
}

function renderDifficultyPanels() {
  document.querySelectorAll('[data-diff-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.diffGen === state.diffGen)
  );
  document.querySelectorAll('[data-diff-tier]').forEach(b =>
    b.classList.toggle('active', b.dataset.diffTier === state.diffTier)
  );
  document.querySelectorAll('[data-diff-ball]').forEach(b =>
    b.classList.toggle('active', b.dataset.diffBall === state.diffBall)
  );

  const noun = diffThrowNoun();
  const hardestNote  = document.getElementById('sdash-hardest-note');
  const throwersNote = document.getElementById('sdash-throwers-note');
  if (hardestNote)  hardestNote.textContent  = `${noun} en moyenne pour l'attraper`;
  if (throwersNote) throwersNote.textContent = `${noun} en moyenne par capture`;

  renderHardestPanel();
  renderTopThrowersPanel();
}

// Demandés une fois pour toute la table, jamais à chaque clic de filtre. Les logins
// sans réponse sont mémorisés à '' pour ne pas relancer la requête à chaque rendu.
async function loadThrowerAvatars() {
  const logins = [...new Set(
    (state.throwRowsCache || [])
      .filter(row => row.captured_with && !EXCLUDED_USER_NAMES.includes(row.user_login))
      .map(row => String(row.user_login || '').toLowerCase())
  )].filter(login => login && !(login in state.throwAvatars));

  if (!logins.length) return;

  const avatars = await fetchTwitchUsersByLogin(logins);
  for (const login of logins) state.throwAvatars[login] = avatars[login] || '';

  renderTopThrowersPanel();
}

/* ─── Chargement des lancers ───────────────────── */
// Un seul fetch pour les trois panneaux. try/catch à part : une vue absente ne doit
// afficher son erreur que sur ces panneaux.
// Chargée une fois pour la session, pour le tableau de bord et le Pokédex.
// Lève en cas d'échec : chaque appelant décide quoi afficher.
async function ensureThrowRows(forceRefresh = false) {
  if (state.throwRowsCache && !forceRefresh) return state.throwRowsCache;

  const rows = await fetchAllSupabaseRows(
    // order= explicite : sans lui fetchAllSupabaseRows ajoute son id.asc, que la vue
    // n'a pas → 400. Ordre total, login compris, sinon des lignes se perdent entre deux pages.
    `${CONFIG.supabase.url}/rest/v1/user_pokemon_throw_counts`
      + `?select=user_login,pokemon_id,is_shiny,mega_form,form`
      + `,throws_pokeball,throws_superball,throws_hyperball`
      + `,throws_to_capture,captured_with`
      + `&order=user_login.asc,pokemon_id.asc,is_shiny.asc`
      + `,mega_form.asc.nullsfirst,form.asc.nullsfirst`,
    {
      'apikey': CONFIG.supabase.key,
      'Authorization': `Bearer ${CONFIG.supabase.key}`,
    }
  );

  state.throwRowsCache = rows;
  // Index par variante exacte, la clé d'unique_capture. NULL vers '' des deux côtés,
  // sinon la clé ne se recompose pas.
  state.throwIndex = new Map(rows.map(r => [throwKey(r.user_login, r.pokemon_id, r.is_shiny, r.mega_form, r.form), r]));
  return rows;
}

function throwKey(login, id, isShiny, megaForm, form) {
  return [String(login || '').toLowerCase(), Number(id), isShiny ? 1 : 0, megaForm || '', form || ''].join('|');
}

/* Balls, telles que l'overlay les nomme (CAPTURE.rewardNames / ballEmoji). */
const BALL_LABELS = {
  pokeball: 'Poké Ball', superball: 'Super Ball',
  hyperball: 'Hyper Ball', masterball: 'Master Ball',
};
const BALL_EMOJI = {
  pokeball: '🔴', superball: '🔵', hyperball: '🟡', masterball: '🟣',
};

// Icône seule : le libellé complet reste dans le title et l'aria-label.
function renderBallTag(ball) {
  const label = BALL_LABELS[ball];
  if (!label) return '';

  return `<span class="poke-ball-tag" title="Capturé à la ${escapeHtml(label)}"`
    + ` aria-label="Capturé à la ${escapeHtml(label)}">${BALL_EMOJI[ball] || ''}</span>`;
}

// Le nom de la méga ou de la forme quand il y en a une, celui de l'espèce sinon.
// Le shiny est un préfixe, pas un nom.
function getCaptureVariantLabel(capture) {
  const id = Number(capture.pokemon_id);
  let label = state.names[id] || `#${id}`;

  if (capture.is_mega) {
    label = getMegaFormName(id, capture.mega_form) || 'Méga-Évolution';
  } else if (capture.form) {
    if (id === UNOWN_ID) {
      const unown = UNOWN_FORMS.find(f => f.slug === capture.form);
      if (unown) label = `${state.names[id] || 'Zarbi'} ${unown.label}`;
    } else {
      const form = (POKEMON_FORMS[id] || []).find(f => f.slug === capture.form);
      if (form) label = form.nom;
    }
  }

  return capture.is_shiny ? `✨ ${label}` : label;
}

// Une carte par variante possédée, à la place de la fiche. Chacune porte son sprite,
// d'où getThrowSpriteUrl(), qui attend les mêmes champs qu'une ligne de captures.
function renderVariantCards(captures, { community = false, login = getDisplayedLogin() } = {}) {
  return captures.map(c => {
    const id      = Number(c.pokemon_id);
    // En Communauté chaque carte a son dresseur : ce sont ses lancers qu'on lit.
    const info    = getCaptureThrowInfo(c, community ? c.user_login : login);
    const variant = getCaptureVariantLabel(c);
    const megaAttr = c.mega_form
      ? ` data-mega-slug="${escapeHtml(c.mega_form)}" data-mega-id="${id}" data-mega-shiny="${c.is_shiny ? '1' : '0'}"`
      : '';

    const meta = info
      ? [renderBallTag(info.ball),
         info.throws ? `${info.throws} lancer${info.throws > 1 ? 's' : ''}` : '']
          .filter(Boolean).join(' · ')
      : `<span class="modal-variant-unknown">lancers non enregistrés</span>`;

    // Le premier captureur de cette variante précise : la raison d'être du détail communautaire.
    const trainer = community
      ? `<div class="variant-card-trainer community-modal-trainer">${escapeHtml(c.user_name || c.user_login || '')}</div>`
      : '';

    // Mêmes classes que la fiche : chaque variante est une carte de la même taille.
    return `
      <div class="variant-card${c.is_shiny ? ' shiny-card' : ''}">
        <img class="modal-sprite" src="${getThrowSpriteUrl(c)}" alt="${escapeHtml(variant)}" loading="lazy"${megaAttr}>
        <div class="modal-name">${escapeHtml(variant)}</div>
        <div class="modal-number">#${String(id).padStart(3, '0')}</div>
        ${trainer}
        <div class="poke-date">${formatDate(c.captured_at)}</div>
        <div class="poke-date">${meta}</div>
      </div>
    `;
  }).join('');
}

// Bloc « captures » de la fiche, commun aux trois modales. En tête la première
// capture et la ball qui l'a conclue ; « Détails » la remplace par une carte par variante.
function renderCaptureInfo(captures, { community = false, login = getDisplayedLogin() } = {}) {
  // Toute ouverture repart de la vue fiche, jamais de l'état laissé la fois d'avant.
  resetModalDetails();

  const variants = document.getElementById('modal-variants');
  if (!captures.length) return `<div class="modal-not-captured">Pas encore capturé</div>`;

  // Ordre chronologique : la première capture d'abord, comme on les a obtenues.
  const ordered = [...captures].sort(
    (a, b) => String(a.captured_at || '').localeCompare(String(b.captured_at || ''))
  );

  // La première capture : celle qui a fait entrer l'espèce au Pokédex, déjà celle
  // qu'affiche la vignette. En Communauté, la première de tous les dresseurs.
  const first     = ordered[0];
  const firstInfo = getCaptureThrowInfo(first, community ? first.user_login : login);
  const line      = [`Capturé le ${formatDate(first.captured_at)}`];
  if (firstInfo?.ball) line.push(renderBallTag(firstInfo.ball));

  if (variants) variants.innerHTML = renderVariantCards(ordered, { community, login });

  const count = ordered.length;
  const summary = community
    ? `
      <div class="community-modal-first">
        <div class="community-modal-label">Premier captureur</div>
        <div class="community-modal-trainer">${escapeHtml(first.user_name || first.user_login || '')}</div>
        <div class="poke-date" style="margin-top:4px">${first.is_shiny ? '✨ ' : ''}${line.join(' · ')}</div>
      </div>
    `
    : `<div class="poke-date">${line.join(' · ')}</div>`;

  return `
    ${summary}
    <button class="modal-details-toggle" type="button" aria-expanded="false" aria-controls="modal-variants">
      Détails${count > 1 ? ` (${count})` : ''}<i></i>
    </button>
  `;
}

// Rebranché après chaque innerHTML : le bouton est recréé à chaque ouverture.
function wireCaptureDetails() {
  const btn      = document.querySelector('.modal-details-toggle');
  const variants = document.getElementById('modal-variants');
  const summary  = document.getElementById('modal-summary');
  if (!btn || !variants) return;

  // Le libellé porte le compte (« Détails (3) ») : on le mémorise, le retour le perdrait.
  const labelNode  = btn.firstChild;
  const labelFerme = labelNode.textContent;

  btn.addEventListener('click', () => {
    const show = variants.hidden;
    variants.hidden = !show;
    if (summary) summary.hidden = show;
    btn.setAttribute('aria-expanded', show ? 'true' : 'false');
    labelNode.textContent = show ? 'Retour' : labelFerme;

    // La fiche s'élargit : 380 px ne tiennent pas dix colonnes.
    variants.closest('.modal')?.classList.toggle('details-open', show);

    // Les artworks de méga n'arrivent qu'ici, une fois les cartes à l'écran.
    if (show) applyMegaThrowSprites(variants);
  });
}

// Le dresseur affiché : soi-même, ou celui consulté depuis la vue Dresseurs.
function getDisplayedLogin() {
  const login = state.adminViewingUser?.login || state.user?.login || '';
  return String(login).toLowerCase();
}

// null tant que rien n'a été enregistré pour cette variante — le cas de l'immense
// majorité des captures existantes. Les appelants n'affichent alors rien.
function getCaptureThrowInfo(capture, login = getDisplayedLogin()) {
  if (!state.throwIndex || !capture) return null;

  const row = state.throwIndex.get(
    throwKey(login, capture.pokemon_id, capture.is_shiny, capture.mega_form, capture.form)
  );
  if (!row) return null;

  const ball   = row.captured_with || null;
  const throws = Number(row.throws_to_capture) > 0 ? Number(row.throws_to_capture) : null;
  return (ball || throws) ? { ball, throws } : null;
}

async function loadThrowStats(forceRefresh = false) {
  try {
    await ensureThrowRows(forceRefresh);
  } catch (e) {
    console.error(e);
    // Remis à null : un cache périmé ne doit pas rester affichable après un échec.
    state.throwRowsCache = null;
    state.throwIndex = null;
    showLoadError(document.getElementById('sdash-my-throws'),     'Lancers indisponibles.');
    showLoadError(document.getElementById('sdash-hardest'),       'Lancers indisponibles.');
    showLoadError(document.getElementById('sdash-top-throwers'),  'Lancers indisponibles.');
    return;
  }

  renderThrowPanel();
  renderDifficultyPanels();

  // Fire-and-forget : les avatars n'ont pas à retarder l'affichage du classement.
  loadThrowerAvatars().catch(() => {});
}

/* ─── Apparitions ──────────────────────────────── */
// field vaut 'total' ou 'month'. Les lignes à 0 sont écartées : en 'month' ce sont
// les compteurs périmés que la vue neutralise, pas des apparitions.
// Génération et rareté appliquées ensemble : Gen 2 + Épique ne garde que les épiques
// de Gen 2. Bornes tirées de GENERATIONS.
function matchesSpawnFilters(id) {
  if (state.spawnTier !== 'all' && POKEMON_TIERS[id] !== state.spawnTier) return false;
  if (state.spawnGen === 'all') return true;

  const gen = GENERATIONS.find(g => String(g.id) === state.spawnGen);
  return !!gen && id >= gen.start && id <= gen.end;
}

function hasActiveSpawnFilters() {
  return state.spawnGen !== 'all' || state.spawnTier !== 'all';
}

function renderTopSpawnsPanel(containerId, field, emptyLabel) {
  const el = document.getElementById(containerId);
  if (!el || !state.spawnStatsCache) return;

  const entries = state.spawnStatsCache
    // La table accepte 1..1025, la grille s'arrête à POKEDEX_TOTAL.
    .filter(r => isInPokedex(r.pokemon_id) && Number(r[field]) > 0)
    .map(r => [Number(r.pokemon_id), Number(r[field])])
    .filter(([id]) => matchesSpawnFilters(id))
    // Classement complet parcouru au défilement : tronquer masquerait le bas, or
    // c'est ce qu'un filtre de rareté sert à explorer.
    .sort((a, b) => b[1] - a[1]);

  // Vide à cause des filtres et vide faute de données : deux messages distincts.
  const empty = hasActiveSpawnFilters() ? 'Aucune apparition pour ces filtres' : emptyLabel;

  el.innerHTML = renderTopPokemonRows(entries, empty);
}

function renderSpawnPanels() {
  document.querySelectorAll('[data-spawn-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.spawnGen === state.spawnGen)
  );
  document.querySelectorAll('[data-spawn-tier]').forEach(b =>
    b.classList.toggle('active', b.dataset.spawnTier === state.spawnTier)
  );

  renderTopSpawnsPanel('sdash-top-spawns', 'total', 'Aucune apparition enregistrée');
  renderTopSpawnsPanel('sdash-top-spawns-month', 'month', 'Aucune apparition ce mois');
}

// Lecture par la vue pokemon_spawn_counts : la table et son RPC exigent x-secret,
// que ce site public ne peut pas porter. try/catch à part, une vue absente ne doit
// pas emporter les autres panneaux.
async function loadSpawnStats(forceRefresh = false) {
  try {
    if (!state.spawnStatsCache || forceRefresh) {
      state.spawnStatsCache = await fetchAllSupabaseRows(
        // order= explicite : sans lui fetchAllSupabaseRows ajoute son id.asc, que la vue n'a pas → 400.
        `${CONFIG.supabase.url}/rest/v1/pokemon_spawn_counts?select=pokemon_id,month,total&order=pokemon_id.asc`,
        {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      );
    }
  } catch (e) {
    console.error(e);
    showLoadError(document.getElementById('sdash-top-spawns'), 'Apparitions indisponibles.');
    showLoadError(document.getElementById('sdash-top-spawns-month'), 'Apparitions indisponibles.');
    return;
  }

  renderSpawnPanels();
}

/* ─── Interrupteur des filtres, un par panneau ─── */
// Chaque panneau replie ses filtres derrière son écrou, repliés au départ. Deux
// panneaux qui partagent une barre partagent un groupe : leurs écrous restent d'accord.
const STATS_FILTER_GROUPS = ['rarity', 'throws', 'spawn', 'difficulty'];

// Replier remet les filtres du groupe sur « toutes » : un filtre actif sans contrôle
// visible ferait passer un panneau vide pour un panneau sans données.
// Renvoie true si quelque chose a bougé, pour ne re-rendre que dans ce cas.
function resetStatsFilterGroup(group) {
  if (group === 'rarity') {
    if (state.dashRarityGen === 'all') return false;
    state.dashRarityGen = 'all';
    // Le panneau rareté ne raccorde pas ses propres pastilles, contrairement aux deux autres.
    document.querySelectorAll('[data-rarity-gen]').forEach(b =>
      b.classList.toggle('active', b.dataset.rarityGen === state.dashRarityGen)
    );
    renderRarityPanel(state.dashRarityGen);
    return true;
  }

  if (group === 'throws') {
    if (!hasActiveThrowFilters()) return false;
    state.throwGen  = 'all';
    state.throwTier = 'all';
    state.throwBall = 'all';
    renderThrowPanel();
    return true;
  }

  if (group === 'spawn') {
    if (!hasActiveSpawnFilters()) return false;
    state.spawnGen  = 'all';
    state.spawnTier = 'all';
    renderSpawnPanels();
    return true;
  }

  if (group === 'difficulty') {
    if (!hasActiveDiffFilters()) return false;
    state.diffGen  = 'all';
    state.diffTier = 'all';
    state.diffBall = 'all';
    renderDifficultyPanels();
    return true;
  }

  return false;
}

// L'état JS fait autorité ; l'attribut hidden du HTML évite seulement que les filtres
// apparaissent une fraction de seconde avant le script.
function syncStatsFilters(group) {
  const groups = group ? [group] : STATS_FILTER_GROUPS;

  for (const key of groups) {
    const shown = !!state.statsFiltersShown[key];

    document.querySelectorAll(`[data-filter-toggle="${key}"]`).forEach(btn =>
      btn.setAttribute('aria-expanded', shown ? 'true' : 'false')
    );
    document.querySelectorAll(`[data-stats-filters="${key}"]`).forEach(el => {
      el.hidden = !shown;
    });

    if (!shown) resetStatsFilterGroup(key);
  }
}

/* ════════════════════════════════════════════════
   STATS DASHBOARD
════════════════════════════════════════════════ */
async function loadStatsDashboard(forceRefresh = false) {
  try {
    if (!state.statsDashCache || forceRefresh) {
      state.statsDashCache = await fetchAllSupabaseRows(
        `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at`,
        {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      );
    }
  } catch (e) {
    console.error(e);
    showLoadError(document.getElementById('sdash-rarity-list'), 'Statistiques indisponibles.');
    showLoadError(document.getElementById('sdash-gen-bars'), 'Statistiques indisponibles.');
    return;
  }

  const allRows = state.statsDashCache.filter(r =>
    !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
  );

  // login → nom d'affichage. Reconstruite à chaque chargement, sinon un forceRefresh
  // laisserait des noms périmés.
  state.trainerNames = {};
  for (const r of allRows) {
    const key = String(r.user_login || '').toLowerCase();
    if (key && !state.trainerNames[key]) state.trainerNames[key] = r.user_name || key;
  }

  // ── KPIs ──────────────────────────────────────
  const allCapturedIds = new Set(allRows.map(r => r.pokemon_id).filter(isInPokedex));
  state.dashCapturedIds = allCapturedIds;
  const shinies = allRows.filter(r => r.is_shiny);
  const trainers = new Set(allRows.map(r => r.user_login)).size;
  const pct = Math.round((allCapturedIds.size / POKEDEX_TOTAL) * 100);

  document.getElementById('kpi-captured-num').textContent = allRows.length;
  document.getElementById('kpi-pct-num').textContent      = pct + '%';
  document.getElementById('kpi-shiny-num').textContent    = shinies.length;
  document.getElementById('kpi-trainers-num').textContent = trainers;

  // ── Répartition par rareté ────────────────────
  // Listeners posés une seule fois (section EVENTS) : les attacher ici les empilait
  // à chaque visite.
  document.querySelectorAll('[data-rarity-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.rarityGen === state.dashRarityGen)
  );
  renderRarityPanel(state.dashRarityGen);

  // ── Progression par génération (communauté) ───
  const genBarsEl = document.getElementById('sdash-gen-bars');
  genBarsEl.innerHTML = GENERATIONS.map(gen => {
    const total = getGenerationTotal(gen);
    const captured = gen.end <= POKEDEX_TOTAL
      ? new Set(allRows.map(r=>r.pokemon_id).filter(id => id >= gen.start && id <= gen.end)).size
      : 0;
    const pct = Math.round((captured / total) * 100);
    return `
      <div class="sdash-gen-row">
        <div class="sdash-gen-label">
          <span>${gen.label}</span>
          <strong>${captured} / ${total} <span class="sdash-gen-pct">(${pct}%)</span></strong>
        </div>
        <div class="sdash-bar-track">
          <div class="sdash-bar-fill sdash-bar-gold" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // En dernier et sur leurs propres fetchs : les panneaux ci-dessus sont déjà à l'écran.
  // Chacune gère son erreur en interne.
  await Promise.all([
    loadThrowStats(forceRefresh),
    loadSpawnStats(forceRefresh),
  ]);
}

/* ════════════════════════════════════════════════
   ADMIN (Devenu dresseurs)
════════════════════════════════════════════════ */
async function loadAdminUsers(forceRefresh = false) {
  const listEl = document.getElementById('admin-list');
  const currentEl = document.getElementById('admin-current');

  listEl.innerHTML = `
    <div class="stats-loading">
      Chargement des dresseurs...
    </div>
  `;

  let rows;
  try {
    rows = await fetchAllSupabaseRows(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id`,
      {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    );
  } catch (e) {
    console.error(e);
    showLoadError(listEl, 'Impossible de charger la liste des dresseurs. Réessaie plus tard.');
    return;
  }

  const filteredRows = rows.filter(r =>
    !EXCLUDED_USER_NAMES.includes(
      String(r.user_name || '').toLowerCase()
    )
  );

  const users = {};

  for (const r of filteredRows) {
    const login = String(r.user_login || '').toLowerCase();

    if (!login) continue;

    if (!users[login]) {
      users[login] = {
        login,
        name: r.user_name || login,
        pokemons: new Set(),
      };
    }

    if (isInPokedex(r.pokemon_id)) users[login].pokemons.add(Number(r.pokemon_id));
  }

  state.adminUsers = Object.values(users)
    .sort((a, b) => a.name.localeCompare(b.name));

  currentEl.innerHTML = state.adminViewingUser
    ? `Pokédex affiché : <strong>${escapeHtml(state.adminViewingUser.name)}</strong>`
    : `Pokédex affiché : <strong>toi</strong>`;

  renderAdminUsers();
}

function renderAdminUsers() {
  const listEl = document.getElementById('admin-list');

  const query = document
    .getElementById('admin-search')
    .value
    .toLowerCase()
    .trim();

  const filtered = state.adminUsers.filter(u =>
    u.name.toLowerCase().includes(query) ||
    u.login.toLowerCase().includes(query)
  );

  if (!filtered.length) {
    listEl.innerHTML = `
      <div class="stats-empty">
        Aucun dresseur trouvé
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(u => `
    <button class="admin-user-row" data-login="${escapeHtml(u.login)}">
      <span class="admin-user-name">
        ${escapeHtml(u.name)}
      </span>

      <span class="admin-user-login">
        @${escapeHtml(u.login)}
      </span>

      <span class="admin-user-score">
        ${u.pokemons.size} / ${POKEDEX_TOTAL}
      </span>
    </button>
  `).join('');

  document.querySelectorAll('.admin-user-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const login = btn.dataset.login;

      const user = state.adminUsers.find(u => u.login === login);

      if (user) {
        viewUserPokedex(user);
      }
    });
  });
}

async function viewUserPokedex(user) {
  const isOwnPokedex = !!state.user && user.login === state.user.login.toLowerCase();

  // On navigue d'abord pour que l'état de chargement (ou l'erreur) soit visible
  showPokedexView({ showBackButton: !isOwnPokedex });

  const grid = document.getElementById('pokedex-grid');
  grid.innerHTML = '<div class="grid-skeleton">Chargement du Pokédex...</div>';

  let captures;
  try {
    captures = await fetchCaptures(user.login);
  } catch (e) {
    console.error(e);
    showLoadError(grid, `Impossible de charger le Pokédex de ${user.name}.`);
    return;
  }

  state.adminViewingUser = user;
  state.captures = captures;

  renderGrid();
}

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
// Ne retire que le retour OAuth : effacer tout le hash détruirait l'état de deep-link.
function clearOAuthFragment() {
  if (!window.location.hash.includes('access_token')) return;
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function showLoggedOut(loading) {
  clearStoredToken();
  state.user = null;
  state.twitchToken = null;
  applyGen4Visibility();
  document.getElementById('page-pokedex').style.display = 'none';
  document.getElementById('page-landing').style.display = 'flex';
  loading.classList.remove('show');
}

async function init() {
  const loading = document.getElementById('loading');

  fetchGlobalStats();

  // L'état de navigation doit être lu AVANT le nettoyage du fragment OAuth
  const pendingUrlState = getUrlState();
  const token = getTokenFromHash();

  if (!token) {
    loading.classList.remove('show');
    document.getElementById('page-landing').style.display = 'flex';
    return;
  }

  clearOAuthFragment();

  // Le token peut être expiré ou émis pour une autre application. C'est fetchTwitchUser()
  // qui le vérifie, d'où l'affectation de state.twitchToken seulement après.
  let user;
  try {
    user = await fetchTwitchUser(token);
    if (!user) throw new Error('User not found');
  } catch (e) {
    // Échec d'authentification : le token est invalide, expiré ou révoqué
    console.error(e);
    showLoggedOut(loading);
    return;
  }

  state.twitchToken = token;

  state.user = user;
  // Avant tout rendu et avant applyUrlState() : GENERATIONS et POKEDEX_TOTAL prennent
  // ici leur valeur définitive pour la session.
  applyGen4Visibility();

  document.getElementById('user-avatar').src       = user.profile_image_url;
  document.getElementById('user-name').textContent = user.display_name;

  document.getElementById('back-to-me-btn').style.display = 'none';
  document.getElementById('page-landing').style.display = 'none';
  document.getElementById('page-pokedex').style.display = 'block';

  let capturesFailed = false;
  try {
    const [captures] = await Promise.all([
      fetchCaptures(user.login),
      fetchAllNames(),
    ]);
    state.captures    = captures;
    state.ownCaptures = captures;
  } catch (e) {
    // Une panne Supabase ne doit pas déconnecter l'utilisateur
    console.error(e);
    capturesFailed = true;
  }

  loading.classList.remove('show');

  // Chargés après coup et sans bloquer : une table indisponible doit coûter la ball,
  // pas le Pokédex. Un second rendu les fait apparaître quand ils arrivent.
  ensureThrowRows()
    .then(() => { if (!capturesFailed) renderGrid(); })
    .catch(e => console.warn('Lancers indisponibles — les cartes resteront sans ball', e));

  applyUrlState(pendingUrlState);

  if (capturesFailed) {
    showLoadError(
      document.getElementById('pokedex-grid'),
      'Impossible de charger tes captures. Recharge la page.'
    );
  } else {
    renderGrid();
  }
}

/* ════════════════════════════════════════════════
   EVENTS
════════════════════════════════════════════════ */
document.getElementById('btn-logout').addEventListener('click', () => {
  // Invalide le token côté Twitch, pas seulement dans ce navigateur
  revokeTwitchToken(state.twitchToken);

  clearStoredToken();
  state.user        = null;
  state.twitchToken = null;
  state.captures    = [];
  state.ownCaptures = [];
  state.adminViewingUser = null;
  // Referme la Gen 4 : le prochain visiteur de cet onglet n'y a pas droit.
  applyGen4Visibility();

  document.getElementById('page-pokedex').style.display = 'none';
  document.getElementById('page-landing').style.display = 'flex';
});

// Le nonce est créé au clic, surtout pas au chargement : sinon le retour de Twitch
// recharge la page, régénère un nonce, et plus personne ne peut se connecter.
document.getElementById('btn-login').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = getTwitchLoginUrl();
});

document.querySelectorAll('#view-pokedex .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-pokedex .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeFilter = btn.dataset.filter;
    updateUrlState();
    renderGrid();
  });
});

document.querySelectorAll('#view-pokedex .gen-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-pokedex .gen-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeGenFilter = btn.dataset.genFilter;
    updateUrlState();
    renderGrid();
  });
});

const progressToggle = document.getElementById('progress-toggle');
if (progressToggle) {
  progressToggle.addEventListener('click', () => {
    const panel = document.getElementById('generation-progress-panel');
    const isOpen = panel.style.display !== 'none';

    panel.style.display = isOpen ? 'none' : 'grid';
    progressToggle.classList.toggle('open', !isOpen);
    progressToggle.setAttribute('aria-expanded', String(!isOpen));
    const label = progressToggle.querySelector('span');
    if (label) label.textContent = isOpen ? 'Détails' : 'Masquer';
  });
}

document.getElementById('filter-search').addEventListener('input', e => {
  // La comparaison se fait sur un nom déjà en minuscules.
  state.searchQuery = e.target.value.trim().toLowerCase();
  updateUrlState();
  renderGrid();
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('admin-search').addEventListener('input', () => {
  renderAdminUsers();
});

document.getElementById('back-to-me-btn').addEventListener('click', () => {
  state.adminViewingUser = null;
  state.captures = state.ownCaptures;

  showPokedexView({ showBackButton: false });
  renderGrid();
});

// ─── Onglets stats par génération ──────────────
document.querySelectorAll('[data-stats-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-stats-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeStatsGen = btn.dataset.statsGen;
    updateUrlState();
    renderStatsRanking();
  });
});

// ─── Onglets meilleurs dresseurs (classements) ─
document.querySelectorAll('#view-rank [data-first-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-rank [data-first-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateUrlState();
    renderBestTrainerCommuPanel(btn.dataset.firstGen);
  });
});

// ─── Filtres communauté ───────────────────────
document.querySelectorAll('#view-community .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-community .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.communityFilter = btn.dataset.communityFilter;
    updateUrlState();
    renderCommunityGrid();
  });
});

document.querySelectorAll('#view-community .gen-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-community .gen-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.communityGenFilter = btn.dataset.communityGen;
    updateUrlState();
    renderCommunityGrid();
  });
});

document.getElementById('community-filter-search').addEventListener('input', e => {
  state.communitySearch = e.target.value.trim().toLowerCase();
  updateUrlState();
  renderCommunityGrid();
});

// Jumeau de resetPokedexFilters() pour la Communauté : changer d'onglet repart de
// filtres propres, les modes n'ont ni les mêmes raretés ni les mêmes noms.
function resetCommunityFilters() {
  state.communityFilter = 'all';
  state.communityGenFilter = 'all';
  state.communitySearch = '';

  document.querySelectorAll('#view-community .filter-btn').forEach(b =>
    b.classList.remove('active')
  );
  document
    .querySelector('#view-community .filter-btn[data-community-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('#view-community .gen-filter-btn').forEach(b =>
    b.classList.remove('active')
  );
  document
    .querySelector('#view-community .gen-filter-btn[data-community-gen="all"]')
    .classList.add('active');

  document.getElementById('community-filter-search').value = '';
}

// Une seule boucle là où le Pokédex perso a quatre blocs : les classes active sont
// recollées par syncCommunityMode().
document.querySelectorAll('#view-community [data-community-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.communityMode = btn.dataset.communityToggle;
    resetCommunityFilters();
    updateUrlState();
    renderCommunityGrid();
  });
});

// ─── Onglets du tableau de bord Statistiques ──
document.querySelectorAll('[data-filter-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.filterToggle;
    state.statsFiltersShown[group] = !state.statsFiltersShown[group];
    // Le groupe entier est resynchronisé : les deux écrous des apparitions bougent ensemble.
    syncStatsFilters(group);
  });
});

// Aligne le DOM sur l'état au chargement : c'est lui qui fait autorité.
syncStatsFilters();

document.querySelectorAll('[data-rarity-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-rarity-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.dashRarityGen = btn.dataset.rarityGen;
    renderRarityPanel(state.dashRarityGen);
  });
});

// Trois groupes indépendants ; renderThrowPanel() raccorde les classes active,
// un clic ne touche que son groupe.
document.querySelectorAll('[data-throw-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.throwGen = btn.dataset.throwGen;
    renderThrowPanel();
  });
});

document.querySelectorAll('[data-throw-tier]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.throwTier = btn.dataset.throwTier;
    renderThrowPanel();
  });
});

document.querySelectorAll('[data-throw-ball]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.throwBall = btn.dataset.throwBall;
    renderThrowPanel();
  });
});

// Filtres partagés par les deux panneaux de difficulté : ils agrègent le même
// sous-ensemble sous deux angles.
document.querySelectorAll('[data-diff-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.diffGen = btn.dataset.diffGen;
    renderDifficultyPanels();
  });
});

document.querySelectorAll('[data-diff-tier]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.diffTier = btn.dataset.diffTier;
    renderDifficultyPanels();
  });
});

document.querySelectorAll('[data-diff-ball]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.diffBall = btn.dataset.diffBall;
    renderDifficultyPanels();
  });
});

// Deux groupes indépendants ; renderSpawnPanels() raccorde les classes active.
document.querySelectorAll('[data-spawn-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.spawnGen = btn.dataset.spawnGen;
    renderSpawnPanels();
  });
});

document.querySelectorAll('[data-spawn-tier]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.spawnTier = btn.dataset.spawnTier;
    renderSpawnPanels();
  });
});

// ─── Onglets du Pokédex perso ─────────────────
function resetPokedexFilters() {
  state.activeFilter = 'all';
  state.activeGenFilter = 'all';
  state.searchQuery = '';

  document.querySelectorAll('#view-pokedex .filter-btn').forEach(b =>
    b.classList.remove('active')
  );
  document
    .querySelector('#view-pokedex .filter-btn[data-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('#view-pokedex .gen-filter-btn').forEach(b =>
    b.classList.remove('active')
  );
  document
    .querySelector('#view-pokedex .gen-filter-btn[data-gen-filter="all"]')
    .classList.add('active');

  document.getElementById('filter-search').value = '';
}

// Bascule sur la vue Pokédex avec des filtres propres.
function showPokedexView({ showBackButton }) {
  resetPokedexFilters();
  switchToPage('pokedex');
  document.getElementById('back-to-me-btn').style.display = showBackButton ? '' : 'none';
  updateUrlState();
}

document.getElementById('pokédex-toggle-normal')?.addEventListener('click', () => {
  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-normal').classList.add('active');
  state.pokédexMode = 'normal';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

document.getElementById('pokédex-toggle-mega')?.addEventListener('click', () => {
  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-mega').classList.add('active');
  state.pokédexMode = 'mega';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

document.getElementById('pokédex-toggle-form')?.addEventListener('click', () => {
  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-form').classList.add('active');
  state.pokédexMode = 'form';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

renderUnownWords();

document.getElementById('pokédex-toggle-unown')?.addEventListener('click', () => {
  document.querySelectorAll('#view-pokedex .pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-unown').classList.add('active');
  state.pokédexMode = 'unown';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

const communityProgressToggle = document.getElementById('community-progress-toggle');
if (communityProgressToggle) {
  communityProgressToggle.addEventListener('click', () => {
    const panel  = document.getElementById('community-generation-progress-panel');
    const isOpen = panel.style.display !== 'none';
    panel.style.display = isOpen ? 'none' : 'grid';
    communityProgressToggle.classList.toggle('open', !isOpen);
    communityProgressToggle.setAttribute('aria-expanded', String(!isOpen));
    const label = communityProgressToggle.querySelector('span');
    if (label) label.textContent = isOpen ? 'Détails' : 'Masquer';
  });
}

/* ── Header scroll shadow ── */
window.addEventListener('scroll', () => {
  document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 0);
});

init();
