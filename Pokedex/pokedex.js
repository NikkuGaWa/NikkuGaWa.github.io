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

for (const [tier, ids] of Object.entries(TIERS_DEF)) {
  for (const id of ids) POKEMON_TIERS[id] = tier;
}

const TIER_LABELS = { commun:'Commun', peuCommun:'Peu commun', rare:'Rare', epique:'Épique', fabuleux:'Fabuleux', legendaire:'Légendaire' };
const TIER_STARS  = { commun:'★', peuCommun:'★★', rare:'★★★', epique:'★★★★', fabuleux:'★★★★★', legendaire:'★★★★★★' };
const TIER_COLORS = { commun:'#ffffff', peuCommun:'#4caf50', rare:'#2196f3', epique:'#e040fb', fabuleux:'#fa73ff', legendaire:'#f0d050' };

const SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/';

/* ════════════════════════════════════════════════
   ZARBI — 28 FORMES
   ────────────────────────────────────────────────
   Zarbi n'a qu'un id (201) mais 28 formes, stockées dans `captures.form`
   (slugs « unown-a »… « unown-z », « unown-exclamation », « unown-question »).
   L'official-artwork n'existe que pour la forme de base — il n'y a pas de
   201-b.png. Le seul jeu complet par forme est HOME.
════════════════════════════════════════════════ */
const UNOWN_ID = 201;

const UNOWN_FORMS = [
  ...'abcdefghijklmnopqrstuvwxyz'.split('').map(l => ({ slug: `unown-${l}`, label: l.toUpperCase() })),
  { slug: 'unown-exclamation', label: '!' },
  { slug: 'unown-question',    label: '?' },
];

const UNOWN_SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
const UNOWN_SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/';

/* ════════════════════════════════════════════════
   ÉTAT
════════════════════════════════════════════════ */

const POKEDEX_TOTAL = 386;
const GENERATIONS = [
  { id: 1, label: 'Génération 1', shortLabel: 'Gen 1', start: 1, end: 151 },
  { id: 2, label: 'Génération 2', shortLabel: 'Gen 2', start: 152, end: 251 },
  { id: 3, label: 'Génération 3', shortLabel: 'Gen 3', start: 252, end: 386 },
];

function getGenerationTotal(gen) {
  return gen.end - gen.start + 1;
}

/* La base contient des captures hors du Pokédex affiché (essais sur des
   générations ultérieures). La grille s'arrête à POKEDEX_TOTAL, les compteurs
   doivent donc les ignorer aussi — sans ça on affiche « 388 / 386 ». */
function isInPokedex(id) {
  const numId = Number(id);
  return Number.isInteger(numId) && numId >= 1 && numId <= POKEDEX_TOTAL;
}

function getVisibleGenerations() {
  if (state.activeGenFilter === 'all') return GENERATIONS;
  return GENERATIONS.filter(gen => String(gen.id) === String(state.activeGenFilter));
}

function getCapturedCountForGeneration(gen) {
  const capturedIds = new Set(
    state.captures
      .map(c => c.pokemon_id)
      .filter(id => id >= gen.start && id <= gen.end)
  );
  return capturedIds.size;
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
  communityCaptures: [],
  communityFilter: 'all',
  communityGenFilter: 'all',
  communitySearch: '',
  pokédexMode: 'normal', // 'normal' | 'mega' | 'unown'
  dashRarityGen: 'all',
  dashTopGen: 'all',
};

let _modalLastFocus = null;

/* ════════════════════════════════════════════════
   DEEP-LINKING (URL HASH)
════════════════════════════════════════════════ */
const VALID_VIEWS   = ['pokedex', 'communauté', 'stats', 'classements', 'dresseurs'];
const VALID_FILTERS = ['all', 'captured', 'uncaptured', 'shiny', 'commun', 'peuCommun', 'rare', 'epique', 'fabuleux', 'legendaire'];
/* Les filtres qui trient par rareté, par opposition à all/captured/shiny. */
const TIER_FILTER_KEYS = ['commun', 'peuCommun', 'rare', 'epique', 'fabuleux', 'legendaire'];
const VALID_GENS    = ['all', '1', '2', '3'];
const VALID_MODES   = ['normal', 'mega', 'unown'];

function pickAllowed(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
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
    gen:             pickAllowed(params.get('gen'), VALID_GENS, 'all'),
    mode:            pickAllowed(params.get('mode'), VALID_MODES, 'normal'),
    search:          params.get('search') || '',
    communityFilter: pickAllowed(params.get('cf'), VALID_FILTERS, 'all'),
    communityGen:    pickAllowed(params.get('cg'), VALID_GENS, 'all'),
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
  state.communitySearch    = urlState.communitySearch.trim().toLowerCase();

  document.querySelectorAll('#view-pokedex .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === state.activeFilter);
  });
  document.querySelectorAll('#view-pokedex .gen-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.genFilter === state.activeGenFilter);
  });
  document.querySelectorAll('.pokedex-view-toggle .toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.toggle === state.pokédexMode);
  });

  document.querySelectorAll('#view-community .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.communityFilter === state.communityFilter);
  });
  document.querySelectorAll('#view-community .gen-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.communityGen === state.communityGenFilter);
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

/* Le flow implicite renvoie le token dans le fragment d'URL : sans paramètre
   `state`, rien ne prouve que la réponse correspond à une demande partie d'ici.
   Un attaquant peut sinon forcer la victime à se connecter sur SON compte. */
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

/* Retourne le token utilisable, ou null. Un token arrivant par l'URL n'est
   accepté que si son `state` correspond au nonce émis par ce navigateur ;
   sinon il est purement ignoré (jamais stocké) et on retombe sur le token
   déjà en place, le cas échéant. */
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

/* Un token du flow implicite peut avoir été émis pour une AUTRE application et
   injecté ici. /oauth2/validate est le seul moyen de vérifier à qui il
   appartient réellement — et au passage qu'il n'est pas expiré. */
async function validateTwitchToken(token) {
  let res;
  try {
    res = await fetch('https://id.twitch.tv/oauth2/validate', {
      headers: { 'Authorization': `OAuth ${token}` },
    });
  } catch (e) {
    console.error('Validation du token impossible', e);
    return null;
  }

  if (!res.ok) return null;

  const data = await res.json();

  if (data.client_id !== CONFIG.twitch.clientId) {
    console.error('Token émis pour une autre application — rejeté');
    return null;
  }
  if (typeof data.expires_in === 'number' && data.expires_in <= 0) return null;

  return data;
}

/* Révoque le token côté Twitch : sans ça, la « déconnexion » le laisse valide
   plusieurs semaines. Best-effort, ne bloque jamais la déconnexion locale. */
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
/* Les logins Twitch sont limités à [a-z0-9_]. Tout le reste est refusé avant
   de construire l'URL : un login venu de la base contenant `&`, `,` ou `.`
   modifierait sinon les filtres PostgREST de la requête. */
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
/* Un ORDER BY stable est indispensable : sans lui PostgreSQL ne garantit aucun
   ordre entre deux pages limit/offset, ce qui duplique ou perd des lignes dès
   que la table dépasse 1000 entrées. `id` est la clé primaire de `captures`,
   donc un ordre total et indexé. */
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

    // Ne jamais avaler l'erreur : des données partielles affichées comme
    // complètes faussent silencieusement tous les compteurs.
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

/* Retourne les formes méga capturées sous forme de clés "id:slug", pour
   coller exactement à ce que la grille affiche en mode Megadex. */
function getCapturedMegaForms(captures) {
  const forms = new Set();

  for (const cap of captures) {
    if (!cap.is_mega) continue;

    const megaData = MEGA_EVOLUTIONS[cap.pokemon_id];
    if (!megaData) continue;

    const megaForms = Array.isArray(megaData) ? megaData : [megaData];
    // Même règle de repli que la grille : sans colonne mega_form, on retombe
    // sur la première forme déclarée.
    const slug = cap.mega_form || megaForms[0].slug;
    if (megaForms.some(f => f.slug === slug)) forms.add(`${cap.pokemon_id}:${slug}`);
  }

  return forms;
}

/* ─── Zarbidex ─────────────────────────────────── */
function getUnownSpriteUrl(slug, isShiny = false) {
  // slug « unown-b » → fichier « 201-b.png » côté PokeAPI
  const suffix = slug.slice('unown-'.length);
  return `${isShiny ? UNOWN_SPRITE_SHINY : UNOWN_SPRITE_BASE}${UNOWN_ID}-${suffix}.png`;
}

function getUnownTotal() {
  return UNOWN_FORMS.length;
}

/* Écrit un mot en alphabet Zarbi dans chaque `[data-unown-word]`.
   Sprites normaux, sans retouche de couleur. Le texte lisible reste porté par
   l'aria-label du parent, les images sont purement décoratives. */
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
      // Pas de loading="lazy" : le bouton naît caché, et un chargement différé
      // le ferait apparaître vide puis s'élargir d'un coup au premier affichage.
      el.appendChild(img);
    }
  });
}

function isUnownCapture(cap) {
  return Number(cap.pokemon_id) === UNOWN_ID;
}

/* Le Zarbidex n'apparaît qu'aux dresseurs concernés. On teste la présence d'un
   Zarbi quelconque, pas d'une forme : les captures d'avant la colonne `form`
   ont `form = null` et doivent quand même ouvrir l'onglet. */
function hasAnyUnown(captures) {
  return captures.some(isUnownCapture);
}

/* Formes réellement identifiées. Un Zarbi sans `form` (capturé avant la
   migration) ne peut être rattaché à aucune lettre : il ne compte nulle part
   dans la grille, sinon il cocherait une case au hasard. */
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

function renderProgressBars() {
  const isMega  = state.pokédexMode === 'mega';
  const isUnown = state.pokédexMode === 'unown';
  const capturedMegaForms  = isMega  ? getCapturedMegaForms(state.captures)  : null;
  const capturedUnownForms = isUnown ? getCapturedUnownForms(state.captures) : null;

  const capturedCount = isMega  ? capturedMegaForms.size
                      : isUnown ? capturedUnownForms.size
                      : new Set(state.captures.map(c => c.pokemon_id).filter(isInPokedex)).size;
  const globalTotal   = isMega  ? getMegaTotal()
                      : isUnown ? getUnownTotal()
                      : POKEDEX_TOTAL;
  const globalPercent = globalTotal ? Math.round((capturedCount / globalTotal) * 100) : 0;

  document.getElementById('progress-fill').style.width  = `${globalPercent}%`;
  document.getElementById('progress-count').textContent = `${capturedCount} / ${globalTotal}`;

  const panel = document.getElementById('generation-progress-panel');
  if (!panel) return;

  /* Zarbidex : les 28 formes sont toutes en Gen 2, le détail par génération ne
     ferait que répéter le compteur global. Le bouton « Détails » est masqué en
     parallèle par syncPokedexMode(). */
  if (isUnown) {
    panel.innerHTML = '';
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
      : getCapturedCountForGeneration(gen);
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

function _renderPokeGrid({
  grid,
  searchQuery,
  activeFilter,
  visibleGenerations,
  getCaptureInfo,
  onProgressBars,
  onCardClick,
  pokédexMode = 'normal',
}) {
  onProgressBars();
  grid.innerHTML = '';

  // En mode « Non capturés », on révèle les sprites (cf. .reveal-sprites en CSS).
  // Les noms restent en « ??? » : c'est le rendu des cartes qui s'en charge.
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

      // En mode mega, itérer sur toutes les formes disponibles
      if (pokédexMode === 'mega') {
        if (!MEGA_EVOLUTIONS[id]) continue;

        const megaData = MEGA_EVOLUTIONS[id];
        const megaForms = Array.isArray(megaData) ? megaData : [megaData];

        for (const megaForm of megaForms) {
          // Vérifier si CETTE forme spécifique est capturée
          let formCaptured = false;
          let formCaptures = [];
          
          if (megaCaptures.length > 0) {
            // Chercher les captures avec mega_form
            const capturesWithForm = megaCaptures.filter(c => c.mega_form);
            
            if (capturesWithForm.length > 0) {
              // On a des données mega_form, filtrer par forme exacte
              formCaptures = megaCaptures.filter(c => c.mega_form === megaForm.slug);
              formCaptured = formCaptures.length > 0;
            } else {
              // Pas de mega_form en données (ancien format, avant migration)
              // Fallback: supposer c'est la première forme qui est capturée
              formCaptured = megaForm === megaForms[0];
              formCaptures = megaCaptures;
            }
          }
          
          const captured = formCaptured;
          const hasShiny = formCaptures.some(c => c.is_shiny);
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
          
          // Nom francisé de la forme, déclaré dans MEGA_EVOLUTIONS
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

          // Charger le sprite de la mega en parallèle
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
        // Mode normal - affichage standard
        const captured = !!capInfo;
        const hasShiny = Array.isArray(capInfo) ? capInfo.some(c => c.is_shiny) : capInfo?.is_shiny;
        const date = Array.isArray(capInfo) ? capInfo[0]?.captured_at : capInfo?.captured_at;

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

/* Grille du Zarbidex : 28 cartes, une par forme.
   Fonction séparée plutôt qu'une troisième branche dans _renderPokeGrid : celle-ci
   itère sur les générations puis sur les ids, alors que tout le Zarbidex tient sur
   un seul id. Le filtre de génération est masqué dans ce mode (cf. syncPokedexMode). */
function _renderUnownGrid({
  grid,
  getCapturesForForm,
  onProgressBars,
  onCardClick,
}) {
  onProgressBars();
  grid.innerHTML = '';

  const tier     = POKEMON_TIERS[UNOWN_ID];
  const baseName = state.names[UNOWN_ID] || 'Zarbi';

  /* Pas de `.generation-title` : le bandeau « Zarbidex » et son filet horizontal
     séparent des générations, or il n'y en a qu'une seule ici et l'onglet actif
     dit déjà où on est. */
  const section = document.createElement('section');
  section.className = 'generation-section';
  section.innerHTML = '<div class="generation-grid"></div>';
  const genGrid = section.querySelector('.generation-grid');

  for (const form of UNOWN_FORMS) {
    const formCaptures = getCapturesForForm(form.slug);
    const captured = formCaptures.length > 0;
    const hasShiny = formCaptures.some(c => c.is_shiny);
    const date     = formCaptures[0]?.captured_at;
    const fullName = `${baseName} ${form.label}`;

    // Aucun filtrage : la barre de filtres et la recherche sont masquées dans ce
    // mode, les 28 formes s'affichent toujours toutes.
    const card = document.createElement('div');
    card.className = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
    card.dataset.id = UNOWN_ID;
    card.dataset.unownForm = form.slug;

    /* Ni numéro ni nom : les 28 cartes partagent le #201 et le même « Zarbi »,
       les répéter n'apprend rien. La lettre se lit dans la silhouette, et la
       modale donne le nom complet. L'alt de l'image et l'aria-label de la carte
       portent l'information pour les lecteurs d'écran. */
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

function getMegaEvolution(pokemonId) {
  const mega = MEGA_EVOLUTIONS[pokemonId] || null;
  if (!mega) return null;
  if (Array.isArray(mega)) {
    return mega[Math.floor(Math.random() * mega.length)];
  }
  return mega;
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

/* Accorde l'UI au mode courant, et fait retomber en « normal » un mode Zarbidex
   que le dresseur affiché n'a pas le droit de voir — cas d'un deep-link
   `#mode=unown` ou d'un retour sur le Pokédex d'un autre dresseur sans Zarbi. */
function syncPokedexMode() {
  const unownBtn = document.getElementById('pokédex-toggle-unown');
  const showUnown = hasAnyUnown(state.captures);

  if (unownBtn) unownBtn.style.display = showUnown ? '' : 'none';
  if (!showUnown && state.pokédexMode === 'unown') state.pokédexMode = 'normal';

  document.querySelectorAll('.pokedex-view-toggle .toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.toggle === state.pokédexMode);
  });

  /* Toutes les formes de Zarbi sont en Gen 2 : le filtre de génération n'aurait que
     des réponses vides à offrir, et le détail par génération répéterait à
     l'identique le compteur global. Les deux disparaissent dans ce mode. */
  const isUnown = state.pokédexMode === 'unown';

  const genFilters = document.querySelector('#view-pokedex .generation-filters');
  if (genFilters) genFilters.style.display = isUnown ? 'none' : '';

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

  /* Filtres et recherche disparaissent aussi : 28 cartes tiennent à l'écran d'un
     coup, et elles partagent toutes la rareté de Zarbi. */
  const filters = document.querySelector('#view-pokedex .filters');
  if (filters) filters.style.display = isUnown ? 'none' : '';

  /* Un deep-link `#pokedex?filter=rare&mode=unown` laisserait sinon un filtre
     actif mais invisible, et une grille vide sans explication. */
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
async function openModal(id, captures, megaForm = null) {
  const name     = state.names[id] || `#${id}`;
  const tier     = POKEMON_TIERS[id];
  
  const capturedList = captures && captures.length > 0 ? captures : [];
  const captured = capturedList.length > 0;
  
  // Filtrer les captures par forme si on est en mode mega
  // NOTE: Cette logique suppose que la table Supabase a une colonne "mega_form" (VARCHAR)
  // qui contient le slug de la forme (ex: 'charizard-mega-x', 'charizard-mega-y', etc.)
  // Si tu n'as pas encore cette colonne, ajoute-la et peuple-la avec les données existantes
  let displayedCaptures = capturedList;
  if (state.pokédexMode === 'mega' && megaForm && capturedList.length > 0) {
    const capturesWithForm = capturedList.filter(c => c.mega_form);
    if (capturesWithForm.length > 0) {
      displayedCaptures = capturedList.filter(c => c.mega_form === megaForm);
    }
  }
  
  const hasShiny = displayedCaptures.some(c => c.is_shiny);
  const hasMega = displayedCaptures.some(c => c.is_mega);

  let spriteUrl = hasShiny
    ? `${SPRITE_SHINY}${id}.png`
    : `${SPRITE_BASE}${id}.png`;
  
  // Si mode mega et qu'on a une forme, charger le sprite mega
  if (state.pokédexMode === 'mega' && megaForm && captured) {
    const megaSpriteUrl = await getMegaSpriteUrl(id, megaForm, hasShiny);
    if (megaSpriteUrl) spriteUrl = megaSpriteUrl;
  }

  document.getElementById('modal-sprite').src       = spriteUrl;
  document.getElementById('modal-sprite').className = `modal-sprite${captured ? '' : ' silhouette'}`;
  document.getElementById('modal-name').textContent   = captured ? name : '???';
  document.getElementById('modal-number').textContent = `#${String(id).padStart(3, '0')}`;

  // Badges rareté + shiny + mega
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

  // Infos captures
  const info = document.getElementById('modal-info');
  if (captured) {
    info.innerHTML = displayedCaptures
      .map(c => `<div class="poke-date" style="margin-top:6px">${c.is_shiny ? '✨ ' : ''}${c.is_mega ? '<img src="https://archives.bulbagarden.net/media/upload/c/cd/Mega_Evolution_key_stone_icon.png" alt="Keystone" style="width:12px; height:12px; margin-right:4px; vertical-align:middle;"> ' : ''}Capturé le ${formatDate(c.captured_at)}</div>`)
      .join('');
  } else {
    info.innerHTML = `<div class="modal-not-captured">Pas encore capturé</div>`;
  }

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();

  // Trap focus inside the modal
  trapFocus(overlay);
}

/* Modale d'une forme de Zarbi. Réutilise le même DOM qu'openModal, mais sans
   passer par les branches méga ni par le sprite official-artwork, qui n'existe
   pas par forme. */
function openUnownModal(slug, formCaptures = []) {
  const form     = UNOWN_FORMS.find(f => f.slug === slug);
  if (!form) return;

  const baseName = state.names[UNOWN_ID] || 'Zarbi';
  const tier     = POKEMON_TIERS[UNOWN_ID];
  const captured = formCaptures.length > 0;
  const hasShiny = formCaptures.some(c => c.is_shiny);

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
  info.innerHTML = captured
    ? formCaptures
        .map(c => `<div class="poke-date" style="margin-top:6px">${c.is_shiny ? '✨ ' : ''}Capturé le ${formatDate(c.captured_at)}</div>`)
        .join('')
    : '<div class="modal-not-captured">Pas encore capturé</div>';

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();
  trapFocus(overlay);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  const lastFocus = _modalLastFocus;
  overlay.classList.remove('open');
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

  // Récupère le filtre actif pour les meilleurs dresseurs
  const activeFirstGenBtn = document.querySelector('#view-rank [data-first-gen].active');
  renderBestTrainerCommuPanel(activeFirstGenBtn ? activeFirstGenBtn.dataset.firstGen : 'all');
}

function getStatsGenerationConfig() {
  if (state.activeStatsGen === '1') {
    return { label: 'Gen 1', min: 1, max: 151, total: 151 };
  }

  if (state.activeStatsGen === '2') {
    return { label: 'Gen 2', min: 152, max: 251, total: 100 };
  }

  if (state.activeStatsGen === '3') {
    return { label: 'Gen 3', min: 252, max: 386, total: 135 };
  }

  return { label: 'Total', min: 1, max: POKEDEX_TOTAL, total: POKEDEX_TOTAL };
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

/* Les avatars arrivent de façon asynchrone : sans jeton de séquence, un
   changement rapide d'onglet fait gagner la réponse la plus lente et affiche
   un classement qui ne correspond plus au filtre actif. */
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

/* N'accepte qu'une URL https absolue : bloque javascript:, data: et toute
   valeur inattendue qui serait injectée dans l'attribut src. */
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
  // Sélecteur restreint aux conteneurs cliquables : un [data-login] posé aussi
  // sur le nom imbriqué déclencherait deux fois viewUserPokedex par bubbling.
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
  if (Object.keys(state.communityCaptures).length && !forceRefresh) {
    renderCommunityGrid();
    return;
  }

  const grid = document.getElementById('community-grid');
  grid.innerHTML = '<div class="grid-skeleton">Chargement...</div>';

  let rows;
  try {
    // captured_at seul n'est pas unique : `id` départage et rend la pagination
    // déterministe (cf. STABLE_ROW_ORDER).
    rows = await fetchAllSupabaseRows(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at&order=captured_at.asc,id.asc`,
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

  // On garde uniquement la première capture par pokemon_id (ordre asc = le plus ancien en premier)
  const seen = {};
  for (const r of rows) {
    if (EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())) continue;
    if (!seen[r.pokemon_id]) seen[r.pokemon_id] = r;
  }

  state.communityCaptures = seen; // objet { pokemon_id: firstCapture }
  renderCommunityGrid();
}

function renderCommunityProgressBars() {
  const capturedIds = new Set(Object.keys(state.communityCaptures).map(Number).filter(isInPokedex));
  const count = capturedIds.size;
  const pct   = Math.round((count / POKEDEX_TOTAL) * 100);

  document.getElementById('community-progress-fill').style.width  = `${pct}%`;
  document.getElementById('community-progress-count').textContent = `${count} / ${POKEDEX_TOTAL}`;

  const panel = document.getElementById('community-generation-progress-panel');
  if (!panel) return;

  panel.innerHTML = GENERATIONS.map(gen => {
    const genCaptured = [...capturedIds].filter(id => id >= gen.start && id <= gen.end).length;
    const total   = getGenerationTotal(gen);
    const genPct  = Math.round((genCaptured / total) * 100);
    return `
      <div class="generation-progress-row">
        <div class="generation-progress-head">
          <span>${gen.label}</span>
          <strong>${genCaptured} / ${total}</strong>
        </div>
        <div class="generation-progress-track">
          <div class="generation-progress-fill" style="width:${genPct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCommunityGrid() {
  const visibleGens = state.communityGenFilter === 'all'
    ? GENERATIONS
    : GENERATIONS.filter(g => String(g.id) === String(state.communityGenFilter));

  _renderPokeGrid({
    grid: document.getElementById('community-grid'),
    searchQuery: state.communitySearch,
    activeFilter: state.communityFilter,
    visibleGenerations: visibleGens,
    getCaptureInfo: (id) => state.communityCaptures[id],
    onProgressBars: renderCommunityProgressBars,
    onCardClick: (id, info) => openCommunityModal(id, info),
  });
}

function openCommunityModal(id, firstCap) {
  const name     = state.names[id] || `#${id}`;
  const tier     = POKEMON_TIERS[id];
  const captured = !!firstCap;
  const hasShiny = firstCap?.is_shiny;

  const spriteUrl = hasShiny ? `${SPRITE_SHINY}${id}.png` : `${SPRITE_BASE}${id}.png`;

  document.getElementById('modal-sprite').src       = spriteUrl;
  document.getElementById('modal-sprite').className = `modal-sprite${captured ? '' : ' silhouette'}`;
  document.getElementById('modal-name').textContent   = captured ? name : '???';
  document.getElementById('modal-number').textContent = `#${String(id).padStart(3, '0')}`;

  const badges = document.getElementById('modal-badges');
  badges.innerHTML = '';

  const tb = document.createElement('span');
  tb.className = `modal-badge modal-badge-${tier}`;
  tb.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className = 'modal-badge modal-badge-shiny';
    sb.innerHTML = '✨ Shiny';
    badges.appendChild(sb);
  }

  const info = document.getElementById('modal-info');
  if (captured) {
    info.innerHTML = `
      <div class="community-modal-first">
        <div class="community-modal-label">Premier captureur</div>
        <div class="community-modal-trainer">${escapeHtml(firstCap.user_name || firstCap.user_login)}</div>
        <div class="poke-date" style="margin-top:4px">${firstCap.is_shiny ? '✨ ' : ''}le ${formatDate(firstCap.captured_at)}</div>
      </div>
    `;
  } else {
    info.innerHTML = `<div class="modal-not-captured">Pas encore capturé</div>`;
  }

  const overlay = document.getElementById('modal-overlay');
  _modalLastFocus = document.activeElement;
  overlay.classList.add('open');
  document.getElementById('modal-close').focus();

  // Trap focus inside the modal
  trapFocus(overlay);
}

function renderBestTrainerCommuPanel(gen) {
  const el = document.getElementById('sdash-first-capturers');
  if (!el || !state.dashSortedByDate) return;

  const minId = gen === '1' ? 1 : gen === '2' ? 152 : gen === '3' ? 252 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : gen === '3' ? 386 : POKEDEX_TOTAL;
  const total = maxId - minId + 1;

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

  const minId = gen === '1' ? 1 : gen === '2' ? 152 : gen === '3' ? 252 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : gen === '3' ? 386 : POKEDEX_TOTAL;

  const TIERS_ORDER = ['legendaire','fabuleux','epique','rare','peuCommun','commun'];

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

function renderTopPokemonPanel(gen) {
  const topEl = document.getElementById('sdash-top-pokemon');
  if (!topEl || !state.dashAllRows) return;

  const minId = gen === '1' ? 1 : gen === '2' ? 152 : gen === '3' ? 252 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : gen === '3' ? 386 : POKEDEX_TOTAL;

  const rows = state.dashAllRows.filter(r => {
    const id = Number(r.pokemon_id);
    return id >= minId && id <= maxId;
  });

  const pokemonCounts = {};
  for (const r of rows) {
    pokemonCounts[r.pokemon_id] = (pokemonCounts[r.pokemon_id] || 0) + 1;
  }

  const topPokemon = Object.entries(pokemonCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const maxCount = topPokemon[0]?.[1] || 1;

  topEl.innerHTML = topPokemon.length ? topPokemon.map(([id, count], i) => {
    const name = state.names[id] || `#${id}`;
    const tier = POKEMON_TIERS[id];
    const color = TIER_COLORS[tier] || '#fff';
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
  }).join('') : '<div class="stats-empty">Aucune donnée</div>';
}

/* ════════════════════════════════════════════════
   STATS DASHBOARD
════════════════════════════════════════════════ */
async function loadStatsDashboard(forceRefresh = false) {
  // Charge les données si pas encore en cache
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
    showLoadError(document.getElementById('sdash-top-pokemon'), 'Statistiques indisponibles.');
    showLoadError(document.getElementById('sdash-gen-bars'), 'Statistiques indisponibles.');
    return;
  }

  const allRows = state.statsDashCache.filter(r =>
    !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
  );

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
  // Les listeners de ces onglets sont posés une seule fois (section EVENTS) :
  // les attacher ici les empilait à chaque visite de la vue Statistiques.
  document.querySelectorAll('[data-rarity-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.rarityGen === state.dashRarityGen)
  );
  renderRarityPanel(state.dashRarityGen);

  // ── Top pokémon les plus capturés ─────────────
  state.dashAllRows = allRows;
  document.querySelectorAll('[data-top-gen]').forEach(b =>
    b.classList.toggle('active', b.dataset.topGen === state.dashTopGen)
  );
  renderTopPokemonPanel(state.dashTopGen);

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
/* Ne retire du fragment que le retour OAuth. L'ancienne version effaçait tout
   le hash, ce qui détruisait l'état de deep-link avant qu'il ne soit lu. */
function clearOAuthFragment() {
  if (!window.location.hash.includes('access_token')) return;
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function showLoggedOut(loading) {
  clearStoredToken();
  state.user = null;
  state.twitchToken = null;
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

  // Le token doit être validé avant d'être utilisé : il peut être expiré, ou
  // avoir été émis pour une autre application.
  const validation = await validateTwitchToken(token);
  if (!validation) {
    showLoggedOut(loading);
    return;
  }

  state.twitchToken = token;

  let user;
  try {
    user = await fetchTwitchUser(token);
    if (!user) throw new Error('User not found');
  } catch (e) {
    // Échec d'authentification : le token est invalide ou révoqué
    console.error(e);
    showLoggedOut(loading);
    return;
  }

  state.user = user;
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

  document.getElementById('page-pokedex').style.display = 'none';
  document.getElementById('page-landing').style.display = 'flex';
});

/* Le nonce OAuth est créé ICI, au clic — surtout pas au chargement de la page.
   Sinon le retour de Twitch recharge la page, régénère un nonce, et la
   comparaison avec celui reçu dans l'URL échoue systématiquement : plus
   personne ne peut se connecter. */
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
  // La comparaison se fait sur un nom déjà en minuscules : sans normalisation
  // ici, taper "Pika" ne renvoyait aucun résultat.
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

// ─── Onglets du tableau de bord Statistiques ──
document.querySelectorAll('[data-rarity-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-rarity-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.dashRarityGen = btn.dataset.rarityGen;
    renderRarityPanel(state.dashRarityGen);
  });
});

document.querySelectorAll('[data-top-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-top-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.dashTopGen = btn.dataset.topGen;
    renderTopPokemonPanel(state.dashTopGen);
  });
});

// ─── Toggle Pokédex Normal / Mega ─────────────
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

/* Bascule sur la vue Pokédex avec des filtres propres.
   Utilisé par la consultation d'un autre dresseur et par le retour. */
function showPokedexView({ showBackButton }) {
  resetPokedexFilters();
  switchToPage('pokedex');
  document.getElementById('back-to-me-btn').style.display = showBackButton ? '' : 'none';
  updateUrlState();
}

document.getElementById('pokédex-toggle-normal')?.addEventListener('click', () => {
  document.querySelectorAll('.pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-normal').classList.add('active');
  state.pokédexMode = 'normal';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

document.getElementById('pokédex-toggle-mega')?.addEventListener('click', () => {
  document.querySelectorAll('.pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pokédex-toggle-mega').classList.add('active');
  state.pokédexMode = 'mega';
  resetPokedexFilters();
  updateUrlState();
  renderGrid();
});

renderUnownWords();

document.getElementById('pokédex-toggle-unown')?.addEventListener('click', () => {
  document.querySelectorAll('.pokedex-view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
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
