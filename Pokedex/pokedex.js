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

const EXCLUDED_USER_NAMES = ['nikkugawa',"nikku_bot_"];
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

for (const [tier, ids] of Object.entries(TIERS_DEF)) {
  for (const id of ids) POKEMON_TIERS[id] = tier;
}

const TIER_LABELS = { commun:'Commun', peuCommun:'Peu commun', rare:'Rare', epique:'Épique', fabuleux:'Fabuleux', legendaire:'Légendaire' };
const TIER_STARS  = { commun:'★', peuCommun:'★★', rare:'★★★', epique:'★★★★', fabuleux:'★★★★★', legendaire:'★★★★★★' };
const TIER_COLORS = { commun:'#ffffff', peuCommun:'#4caf50', rare:'#2196f3', epique:'#e040fb', fabuleux:'#fa73ff', legendaire:'#f0d050' };

const SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/';

/* ════════════════════════════════════════════════
   ÉTAT
════════════════════════════════════════════════ */

const POKEDEX_TOTAL = 251;
const GENERATIONS = [
  { id: 1, label: 'Génération 1', shortLabel: 'Gen 1', start: 1, end: 151 },
  { id: 2, label: 'Génération 2', shortLabel: 'Gen 2', start: 152, end: 251 },
];

function getGenerationTotal(gen) {
  return gen.end - gen.start + 1;
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
};

/* ════════════════════════════════════════════════
   TWITCH OAUTH
════════════════════════════════════════════════ */
function getTwitchLoginUrl() {
  const params = new URLSearchParams({
    client_id:     CONFIG.twitch.clientId,
    redirect_uri:  CONFIG.twitch.redirectUri,
    response_type: 'token',
    scope:         CONFIG.twitch.scopes,
    force_verify:  'false',
  });
  return `https://id.twitch.tv/oauth2/authorize?${params}`;
}

function getTokenFromHash() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const token = params.get('access_token');
  if (token) {
    localStorage.setItem('twitch_access_token', token);
    return token;
  }
  return localStorage.getItem('twitch_access_token');
}

async function fetchTwitchUser(token) {
  const res  = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Client-ID':     CONFIG.twitch.clientId,
      'Authorization': `Bearer ${token}`,
    }
  });
  const data = await res.json();
  return data.data?.[0] || null;
}

async function fetchTwitchUsersByLogin(logins) {
  if (!state.twitchToken || !logins.length) return {};

  const uniqueLogins = [...new Set(logins.map(l => String(l || '').toLowerCase()).filter(Boolean))];
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
async function fetchCaptures(userLogin) {
  const res = await fetch(
    `${CONFIG.supabase.url}/rest/v1/captures?user_login=eq.${userLogin.toLowerCase()}&select=*`,
    {
      headers: {
        'apikey':        CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    }
  );
  return res.ok ? await res.json() : [];
}

async function fetchGlobalStats() {
  try {
    const res = await fetch(`${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name`, {
      headers: {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    });

    const rows = res.ok ? await res.json() : [];
    const filteredRows = rows.filter(r =>
      !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
    );

    const trainers = new Set(filteredRows.map(r => r.user_login)).size;

    document.getElementById('stat-trainers').textContent = trainers;
    document.getElementById('stat-captures').textContent = filteredRows.length;
  } catch {}
}

/* ════════════════════════════════════════════════
   NOMS POKÉMON
════════════════════════════════════════════════ */
async function fetchAllNames() {
  const batchSize = 20;
  const promises  = [];

  for (let i = 1; i <= POKEDEX_TOTAL; i++) {
    promises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then(r => r.json())
        .then(d => {
          const fr = d.names.find(n => n.language.name === 'fr');
          const en = d.names.find(n => n.language.name === 'en');
          state.names[i] = fr ? fr.name : (en ? en.name : `#${i}`);
        })
        .catch(() => { state.names[i] = `#${i}`; })
    );
  }

  for (let i = 0; i < promises.length; i += batchSize) {
    await Promise.all(promises.slice(i, i + batchSize));
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
function renderProgressBars() {
  const capturedIds   = new Set(state.captures.map(c => c.pokemon_id));
  const capturedCount = capturedIds.size;
  const globalPercent = Math.round((capturedCount / POKEDEX_TOTAL) * 100);

  document.getElementById('progress-fill').style.width  = `${globalPercent}%`;
  document.getElementById('progress-count').textContent = `${capturedCount} / ${POKEDEX_TOTAL}`;

  const panel = document.getElementById('generation-progress-panel');
  if (!panel) return;

  panel.innerHTML = GENERATIONS.map(gen => {
    const count = getCapturedCountForGeneration(gen);
    const total = getGenerationTotal(gen);
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

function renderGrid() {
  const grid   = document.getElementById('pokedex-grid');
  const capMap = buildCaptureMap();
  const query  = state.searchQuery.toLowerCase();
  const filter = state.activeFilter;

  renderProgressBars();
  grid.innerHTML = '';

  let displayedCount = 0;

  for (const gen of getVisibleGenerations()) {
    const section = document.createElement('section');
    section.className = 'generation-section';

    section.innerHTML = `
      <div class="generation-title">
        <div class="generation-title-main">
          <span>${gen.label}</span>
        </div>
      </div>
      <div class="generation-grid"></div>
    `;

    const genGrid = section.querySelector('.generation-grid');

    for (let id = gen.start; id <= gen.end; id++) {
      const tier     = POKEMON_TIERS[id];
      const name     = state.names[id] || `#${id}`;
      const captures = capMap[id] || [];
      const captured = captures.length > 0;
      const hasShiny = captures.some(c => c.is_shiny);

      if (filter === 'captured' && !captured) continue;
      if (filter === 'shiny'    && !hasShiny) continue;
      if (['commun','peuCommun','rare','epique','fabuleux','legendaire'].includes(filter) && tier !== filter) continue;
      if (query && !name.toLowerCase().includes(query) && !String(id).includes(query)) continue;

      const spriteUrl = hasShiny
        ? `${SPRITE_SHINY}${id}.png`
        : `${SPRITE_BASE}${id}.png`;

      const card = document.createElement('div');
      card.className = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
      card.dataset.id = id;
      card.innerHTML = `
        <div class="poke-sprite-wrap">
          <img class="poke-sprite" src="${spriteUrl}" alt="${name}" loading="lazy">
          ${hasShiny ? '<span class="shiny-badge">✨</span>' : ''}
        </div>
        <div class="poke-number">#${String(id).padStart(3, '0')}</div>
        <div class="poke-name">${captured ? name : '???'}</div>
        ${captured ? `<div class="poke-date">${formatDate(captures[0].captured_at)}</div>` : ''}
      `;

      card.addEventListener('click', () => openModal(id, captures));
      genGrid.appendChild(card);
      displayedCount++;
    }

    if (genGrid.children.length) grid.appendChild(section);
  }

  if (displayedCount === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;color:var(--muted);
                  font-family:'Press Start 2P',monospace;font-size:9px;
                  padding:60px 0;line-height:2.5">
        Aucun Pokémon<br>trouvé
      </div>`;
  }
}

/* ════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════ */
function openModal(id, captures) {
  const name     = state.names[id] || `#${id}`;
  const tier     = POKEMON_TIERS[id];
  const captured = captures.length > 0;
  const hasShiny = captures.some(c => c.is_shiny);

  // Sprite shiny si possédé
  const spriteUrl = hasShiny
    ? `${SPRITE_SHINY}${id}.png`
    : `${SPRITE_BASE}${id}.png`;

  document.getElementById('modal-sprite').src       = spriteUrl;
  document.getElementById('modal-sprite').className = `modal-sprite${captured ? '' : ' silhouette'}`;
  document.getElementById('modal-name').textContent   = captured ? name : '???';
  document.getElementById('modal-number').textContent = `#${String(id).padStart(3, '0')}`;

  // Badges rareté + shiny
  const badges = document.getElementById('modal-badges');
  badges.innerHTML = '';

  const tb = document.createElement('span');
  tb.className  = 'modal-badge';
  tb.style.cssText = `background:${TIER_COLORS[tier]}22;color:${TIER_COLORS[tier]};border:1px solid ${TIER_COLORS[tier]}44`;
  tb.textContent   = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className  = 'modal-badge';
    sb.style.cssText = 'background:rgba(0,229,255,0.1);color:#00e5ff;border:1px solid rgba(0,229,255,0.3)';
    sb.textContent   = '✨ Shiny';
    badges.appendChild(sb);
  }

  // Infos captures
  const info = document.getElementById('modal-info');
  if (captured) {
    info.innerHTML = captures
      .map(c => `<div class="poke-date" style="margin-top:6px">${c.is_shiny ? '✨ ' : ''}Capturé le ${formatDate(c.captured_at)}</div>`)
      .join('');
  } else {
    info.innerHTML = `<div class="modal-not-captured">Pas encore capturé</div>`;
  }

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ─── Navigation entre les vues ────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('view-pokedex').style.display   = page === 'pokedex'    ? 'block' : 'none';
    document.getElementById('view-community').style.display = page === 'community'  ? 'block' : 'none';
    document.getElementById('view-stats').style.display     = page === 'stats'      ? 'block' : 'none';
    document.getElementById('view-rank').style.display      = page === 'ranking'    ? 'block' : 'none';
    document.getElementById('view-admin').style.display     = page === 'admin'      ? 'block' : 'none';

    if (page === 'ranking')   loadStats();
    if (page === 'admin')     loadAdminUsers();
    if (page === 'stats')     loadStatsDashboard();
    if (page === 'community') loadCommunityPokedex();
  });
});

// ─── Chargement des classements ───────────────
async function loadStats(forceRefresh = false) {
  const container = document.getElementById('rank-completion');
  container.innerHTML = '<div class="stats-loading">Chargement du classement...</div>';

  if (!state.statsRowsCache || forceRefresh) {
    const res = await fetch(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id`,
      {
        headers: {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      }
    );

    state.statsRowsCache = res.ok ? await res.json() : [];
  }

  // Charge les données pour les meilleurs dresseurs (besoin de captured_at)
  if (!state.statsDashCache || forceRefresh) {
    const res2 = await fetch(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at`,
      {
        headers: {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      }
    );
    state.statsDashCache = res2.ok ? await res2.json() : [];
  }

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

  fetchTwitchUsersByLogin(list.map(u => u.login)).then(avatars => {
    for (const u of list) {
      u.avatar = avatars[u.login] || '';
    }

    renderPodiumRanking('rank-completion', list, gen.total);
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

function avatarMarkup(user, className) {
  const safeName = escapeHtml(user.name);
  if (user.avatar) {
    return `<img class="${className}" src="${user.avatar}" alt="${safeName}">`;
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
        const crown = place === 1 ? '👑' : place === 2 ? '🥈' : '🥉';

        return `
          <div class="podium-card podium-${place} clickable" data-login="${escapeHtml(u.login)}">
            <div class="podium-rank">${crown}</div>
            ${avatarMarkup(u, 'podium-avatar')}
            <div class="podium-name stats-user-link" data-login="${escapeHtml(u.login)}" title="${safeName}">${safeName}</div>
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
            <span class="rank-name stats-user-link" data-login="${escapeHtml(u.login)}" title="${safeName}">${safeName}</span>
            <span class="rank-value">${u.pokemons.size} / ${total}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
  container.querySelectorAll('[data-login]').forEach(el => {
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
async function loadCommunityPokedex() {
  if (state.communityCaptures.length) {
    renderCommunityGrid();
    return;
  }

  document.getElementById('community-grid').innerHTML = `
    <div style="grid-column:1/-1;text-align:center;color:var(--muted);
                font-family:'Press Start 2P',monospace;font-size:9px;
                padding:60px 0;line-height:2.5">
      Chargement...<br>
    </div>`;

  const res = await fetch(
    `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at&order=captured_at.asc`,
    {
      headers: {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    }
  );

  const rows = res.ok ? await res.json() : [];

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
  const capturedIds = new Set(Object.keys(state.communityCaptures).map(Number));
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
  const grid   = document.getElementById('community-grid');
  const filter = state.communityFilter;
  const genFilter = state.communityGenFilter;
  const query  = state.communitySearch.toLowerCase();
  const capMap = state.communityCaptures; // { pokemon_id: firstCapture }

  renderCommunityProgressBars();
  grid.innerHTML = '';

  const visibleGens = genFilter === 'all'
    ? GENERATIONS
    : GENERATIONS.filter(g => String(g.id) === String(genFilter));

  let displayedCount = 0;

  for (const gen of visibleGens) {
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
      const tier     = POKEMON_TIERS[id];
      const name     = state.names[id] || `#${id}`;
      const firstCap = capMap[id];
      const captured = !!firstCap;
      const hasShiny = firstCap?.is_shiny;

      if (filter === 'captured' && !captured) continue;
      if (filter === 'shiny'    && !hasShiny) continue;
      if (['commun','peuCommun','rare','epique','fabuleux','legendaire'].includes(filter) && tier !== filter) continue;
      if (query && !name.toLowerCase().includes(query) && !String(id).includes(query)) continue;

      const spriteUrl = hasShiny ? `${SPRITE_SHINY}${id}.png` : `${SPRITE_BASE}${id}.png`;

      const card = document.createElement('div');
      card.className = `poke-card r-${tier}${captured ? ' captured' : ''}${hasShiny ? ' shiny-card' : ''}`;
      card.dataset.id = id;
      card.innerHTML = `
        <div class="poke-sprite-wrap">
          <img class="poke-sprite" src="${spriteUrl}" alt="${name}" loading="lazy">
          ${hasShiny ? '<span class="shiny-badge">✨</span>' : ''}
        </div>
        <div class="poke-number">#${String(id).padStart(3, '0')}</div>
        <div class="poke-name">${captured ? name : '???'}</div>
        ${captured ? `<div class="poke-date">${formatDate(firstCap.captured_at)}</div>` : ''}
      `;

      card.addEventListener('click', () => openCommunityModal(id, firstCap));
      genGrid.appendChild(card);
      displayedCount++;
    }

    if (genGrid.children.length) grid.appendChild(section);
  }

  if (displayedCount === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;color:var(--muted);
                  font-family:'Press Start 2P',monospace;font-size:9px;
                  padding:60px 0;line-height:2.5">
        Aucun Pokémon<br>trouvé
      </div>`;
  }
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
  tb.className = 'modal-badge';
  tb.style.cssText = `background:${TIER_COLORS[tier]}22;color:${TIER_COLORS[tier]};border:1px solid ${TIER_COLORS[tier]}44`;
  tb.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
  badges.appendChild(tb);

  if (hasShiny) {
    const sb = document.createElement('span');
    sb.className = 'modal-badge';
    sb.style.cssText = 'background:rgba(0,229,255,0.1);color:#00e5ff;border:1px solid rgba(0,229,255,0.3)';
    sb.textContent = '✨ Shiny';
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

  document.getElementById('modal-overlay').classList.add('open');
}

function renderBestTrainerCommuPanel(gen) {
  const el = document.getElementById('sdash-first-capturers');
  if (!el || !state.dashSortedByDate) return;

  const minId = gen === '1' ? 1   : gen === '2' ? 152 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : 251;
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

  // Fetch avatars then render podium
  fetchTwitchUsersByLogin(top.map(u => u.login)).then(avatars => {
    for (const u of top) {
      u.avatar = avatars[u.login] || '';
    }
    renderPodiumRanking('sdash-first-capturers', top, total);
  });
}

function renderRarityPanel(gen) {
  const rarityEl = document.getElementById('sdash-rarity-list');
  if (!rarityEl) return;

  const capturedIds = state.dashCapturedIds;
  if (!capturedIds) return;

  const minId = gen === '1' ? 1   : gen === '2' ? 152 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : 251;

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
          <span class="sdash-rarity-name" style="color:${color}">${TIER_STARS[tier]} ${TIER_LABELS[tier]}</span>
          <span class="sdash-rarity-count">${captured} / ${total}</span>
        </div>
        <div class="sdash-bar-track">
          <div class="sdash-bar-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderTopPokemonPanel(gen) {
  const topEl = document.getElementById('sdash-top-pokemon');
  if (!topEl || !state.dashAllRows) return;

  const minId = gen === '1' ? 1   : gen === '2' ? 152 : 1;
  const maxId = gen === '1' ? 151 : gen === '2' ? 251 : 251;

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
        <span class="sdash-top-name" style="color:${color}">${escapeHtml(name)}</span>
        <div class="sdash-bar-track sdash-bar-inline">
          <div class="sdash-bar-fill" style="width:${barPct}%;background:${color}44"></div>
        </div>
        <span class="sdash-top-val">${count}</span>
      </div>
    `;
  }).join('') : '<div class="stats-empty">Aucune donnée</div>';
}

/* ════════════════════════════════════════════════
   STATS DASHBOARD
════════════════════════════════════════════════ */
async function loadStatsDashboard() {
  // Charge les données si pas encore en cache
  if (!state.statsDashCache) {
    const res = await fetch(
      `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id,is_shiny,captured_at`,
      {
        headers: {
          'apikey': CONFIG.supabase.key,
          'Authorization': `Bearer ${CONFIG.supabase.key}`,
        }
      }
    );
    state.statsDashCache = res.ok ? await res.json() : [];
  }

  const allRows = state.statsDashCache.filter(r =>
    !EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase())
  );
  const fullRows = [...allRows].sort((a, b) => new Date(b.captured_at) - new Date(a.captured_at));

  // ── KPIs ──────────────────────────────────────
  const allCapturedIds = new Set(allRows.map(r => r.pokemon_id));
  state.dashCapturedIds = allCapturedIds;
  const shinies = allRows.filter(r => r.is_shiny);
  const trainers = new Set(allRows.map(r => r.user_login)).size;
  const pct = Math.round((allCapturedIds.size / POKEDEX_TOTAL) * 100);

  document.getElementById('kpi-captured-num').textContent = allRows.length;
  document.getElementById('kpi-pct-num').textContent      = pct + '%';
  document.getElementById('kpi-shiny-num').textContent    = shinies.length;
  document.getElementById('kpi-trainers-num').textContent = trainers;

  // ── Répartition par rareté ────────────────────
  renderRarityPanel('all');

  document.querySelectorAll('.sdash-gen-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sdash-gen-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRarityPanel(btn.dataset.rarityGen);
    });
  });

  // ── Top pokémon les plus capturés ─────────────
  state.dashAllRows = allRows;
  renderTopPokemonPanel('all');

  document.querySelectorAll('[data-top-gen]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-top-gen]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTopPokemonPanel(btn.dataset.topGen);
    });
  });

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
async function loadAdminUsers() {
  const listEl = document.getElementById('admin-list');
  const currentEl = document.getElementById('admin-current');

  listEl.innerHTML = `
    <div class="stats-loading">
      Chargement des dresseurs...
    </div>
  `;

  const res = await fetch(
    `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id`,
    {
      headers: {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    }
  );

  const rows = res.ok ? await res.json() : [];

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

    users[login].pokemons.add(r.pokemon_id);
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
  const captures = await fetchCaptures(user.login);

  state.adminViewingUser = user;
  state.captures = captures;

  state.activeFilter = 'all';
  state.activeGenFilter = 'all';
  state.searchQuery = '';

  document.getElementById('filter-search').value = '';

  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.filter-btn[data-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('.gen-filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.gen-filter-btn[data-gen-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.nav-btn[data-page="pokedex"]')
    .classList.add('active');

  document.getElementById('view-admin').style.display     = 'none';
  document.getElementById('view-rank').style.display      = 'none';
  document.getElementById('view-stats').style.display     = 'none';
  document.getElementById('view-community').style.display = 'none';
  document.getElementById('view-pokedex').style.display   = 'block';
  document.getElementById('back-to-me-btn').style.display = user.login !== state.user.login.toLowerCase() ? '' : 'none';

  renderGrid();
}

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
async function init() {
  const loading = document.getElementById('loading');

  fetchGlobalStats();
  document.getElementById('btn-login').href = getTwitchLoginUrl();

  const token = getTokenFromHash();

  if (!token) {
    loading.classList.remove('show');
    document.getElementById('page-landing').style.display = 'flex';
    return;
  }

  state.twitchToken = token;

  history.replaceState(null, '', window.location.pathname);

  try {
    const user = await fetchTwitchUser(token);
    if (!user) throw new Error('User not found');

    state.user = user;

    document.getElementById('user-avatar').src       = user.profile_image_url;
    document.getElementById('user-name').textContent = user.display_name;

    const [captures] = await Promise.all([
      fetchCaptures(user.login),
      fetchAllNames(),
    ]);

    state.captures = captures;
    state.ownCaptures = captures;

    document.getElementById('back-to-me-btn').style.display = 'none';
    document.getElementById('page-landing').style.display = 'none';
    document.getElementById('page-pokedex').style.display = 'block';

    renderGrid();

  } catch (e) {
    console.error(e);

    localStorage.removeItem('twitch_access_token');

    state.user = null;
    state.twitchToken = null;

    document.getElementById('page-pokedex').style.display = 'none';
    document.getElementById('page-landing').style.display = 'flex';

  } finally {
    loading.classList.remove('show');
  }
}

/* ════════════════════════════════════════════════
   EVENTS
════════════════════════════════════════════════ */
document.getElementById('btn-logout').addEventListener('click', () => {
  localStorage.removeItem('twitch_access_token');
  state.user        = null;
  state.twitchToken = null;
  state.captures    = [];
  document.getElementById('page-pokedex').style.display = 'none';
  document.getElementById('page-landing').style.display = 'flex';
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

document.querySelectorAll('.gen-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gen-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeGenFilter = btn.dataset.genFilter;
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
  state.searchQuery = e.target.value;
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

  state.activeFilter = 'all';
  state.activeGenFilter = 'all';
  state.searchQuery = '';

  document.getElementById('filter-search').value = '';

  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.filter-btn[data-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('.gen-filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.gen-filter-btn[data-gen-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.nav-btn[data-page="pokedex"]')
    .classList.add('active');

  document.getElementById('view-admin').style.display     = 'none';
  document.getElementById('view-rank').style.display      = 'none';
  document.getElementById('view-stats').style.display     = 'none';
  document.getElementById('view-community').style.display = 'none';
  document.getElementById('view-pokedex').style.display   = 'block';
  document.getElementById('back-to-me-btn').style.display = 'none';

  renderGrid();
});

// ─── Onglets stats par génération ──────────────
document.querySelectorAll('[data-stats-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-stats-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeStatsGen = btn.dataset.statsGen;
    loadStats(true);
  });
});

// ─── Onglets meilleurs dresseurs (classements) ─
document.querySelectorAll('#view-rank [data-first-gen]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-rank [data-first-gen]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBestTrainerCommuPanel(btn.dataset.firstGen);
  });
});

// ─── Filtres communauté ───────────────────────
document.querySelectorAll('#view-community .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-community .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.communityFilter = btn.dataset.communityFilter;
    renderCommunityGrid();
  });
});

document.querySelectorAll('#view-community .gen-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-community .gen-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.communityGenFilter = btn.dataset.communityGen;
    renderCommunityGrid();
  });
});

document.getElementById('community-filter-search').addEventListener('input', e => {
  state.communitySearch = e.target.value;
  renderCommunityGrid();
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

init();
