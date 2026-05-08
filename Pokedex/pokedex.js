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

const EXCLUDED_USER_NAMES = ['nikkugawa'];
/* ════════════════════════════════════════════════
   TIERS
════════════════════════════════════════════════ */
const POKEMON_TIERS = {};
const TIERS_DEF = {
  commun: [
      10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,29,32,39,40,41,42,43,44,46,48,50,54,56,60,66,69,70,72,77,79,81,84,86,88,90,92,93,96,98,100,102,104,109,116,118,120,129,
    ],

  peuCommun:[
      24,25,26,28,30,31,33,34,35,36,37,45,47,49,51,52,53,55,57,58,61,64,67,71,73,74,75,78,80,82,85,87,89,91,94,95,97,99,101,103,105,106,107,108,110,111,117,119,121,122,124,125,126,127,128,131,137,147,
    ],

  rare: [
      1,4,7,38,59,62,63,65,68,76,83,112,114,115,123,130,133,134,135,136,138,140,142,143,148,
    ],

  epique: [
      2,3,5,6,8,9,113,132,139,141,149,
    ],

  legendaire: [
      144,145,146,150,151,
    ]
};
for (const [tier, ids] of Object.entries(TIERS_DEF)) {
  for (const id of ids) POKEMON_TIERS[id] = tier;
}

const TIER_LABELS = { commun:'Commun', peuCommun:'Peu commun', rare:'Rare', epique:'Épique', legendaire:'Légendaire' };
const TIER_STARS  = { commun:'★', peuCommun:'★★', rare:'★★★', epique:'★★★★', legendaire:'★★★★★' };
const TIER_COLORS = { commun:'#4caf50', peuCommun:'#2196f3', rare:'#9c27b0', epique:'#e040fb', legendaire:'#f0d050' };

const SPRITE_BASE  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const SPRITE_SHINY = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/';

/* ════════════════════════════════════════════════
   ÉTAT
════════════════════════════════════════════════ */
let state = {
  user:         null,
  twitchToken:  null,
  captures:     [],
  ownCaptures:  [],
  names:        {},
  activeFilter: 'all',
  searchQuery:  '',
  isAdmin: false,
  adminUsers: [],
  adminViewingUser: null,
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

  for (let i = 1; i <= 151; i++) {
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
function renderGrid() {
  const grid   = document.getElementById('pokedex-grid');
  const capMap = buildCaptureMap();
  const query  = state.searchQuery.toLowerCase();
  const filter = state.activeFilter;

  // Progression
  const capturedIds   = new Set(state.captures.map(c => c.pokemon_id));
  const capturedCount = capturedIds.size;
  document.getElementById('progress-fill').style.width  = `${(capturedCount / 151) * 100}%`;
  document.getElementById('progress-count').textContent = `${capturedCount} / 151`;

  grid.innerHTML = '';

  for (let id = 1; id <= 151; id++) {
    const tier     = POKEMON_TIERS[id];
    const name     = state.names[id] || `#${id}`;
    const captures = capMap[id] || [];
    const captured = captures.length > 0;
    const hasShiny = captures.some(c => c.is_shiny);

    // Filtres
    if (filter === 'captured' && !captured) continue;
    if (filter === 'shiny'    && !hasShiny) continue;
    if (['commun','peuCommun','rare','epique','legendaire'].includes(filter) && tier !== filter) continue;
    if (query && !name.toLowerCase().includes(query) && !String(id).includes(query)) continue;

    // Sprite shiny si possédé
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
    grid.appendChild(card);
  }

  if (grid.children.length === 0) {
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

    if (page === 'admin' && !state.isAdmin) return;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('view-pokedex').style.display = page === 'pokedex' ? 'block' : 'none';
    document.getElementById('view-stats').style.display   = page === 'stats'   ? 'block' : 'none';
    document.getElementById('view-admin').style.display   = page === 'admin'   ? 'block' : 'none';

    if (page === 'stats') loadStats();
    if (page === 'admin') loadAdminUsers();
  });
});

// ─── Chargement des classements ───────────────
async function loadStats() {
  const container = document.getElementById('rank-completion');
  container.innerHTML = '<div class="stats-loading">Chargement du classement...</div>';

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
  const filteredRows = rows.filter(r =>!EXCLUDED_USER_NAMES.includes(String(r.user_name || '').toLowerCase()));
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

  const list = Object.values(users)
    .sort((a, b) => b.pokemons.size - a.pokemons.size)
    .slice(0, 10);

  const avatars = await fetchTwitchUsersByLogin(list.map(u => u.login));

  for (const u of list) {
    u.avatar = avatars[u.login] || '';
  }

  renderPodiumRanking('rank-completion', list);
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

function renderPodiumRanking(containerId, list) {
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
        const percent = Math.round((completed / 151) * 100);
        const crown = place === 1 ? '👑' : place === 2 ? '🥈' : '🥉';

        return `
          <div class="podium-card podium-${place}">
            <div class="podium-rank">${crown}</div>
            ${avatarMarkup(u, 'podium-avatar')}
            <div class="podium-name" title="${safeName}">${safeName}</div>
            <div class="podium-score">${completed} / 151</div>
            <div class="podium-percent">${percent}% complété</div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="ranking-rest">
      ${rest.map((u, i) => {
        const safeName = escapeHtml(u.name);
        return `
          <div class="ranking-row">
            <span class="rank-pos">#${i + 4}</span>
            ${avatarMarkup(u, 'rank-avatar')}
            <span class="rank-name" title="${safeName}">${safeName}</span>
            <span class="rank-value">${u.pokemons.size} / 151</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ════════════════════════════════════════════════
   ADMIN
════════════════════════════════════════════════ */
async function loadAdminUsers() {
  if (!state.isAdmin) return;

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
        ${u.pokemons.size} / 151
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
  if (!state.isAdmin) return;

  const captures = await fetchCaptures(user.login);

  state.adminViewingUser = user;
  state.captures = captures;

  state.activeFilter = 'all';
  state.searchQuery = '';

  document.getElementById('filter-search').value = '';

  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.filter-btn[data-filter="all"]')
    .classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b =>
    b.classList.remove('active')
  );

  document
    .querySelector('.nav-btn[data-page="pokedex"]')
    .classList.add('active');

  document.getElementById('view-admin').style.display = 'none';
  document.getElementById('view-stats').style.display = 'none';
  document.getElementById('view-pokedex').style.display = 'block';

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

    state.isAdmin = user.login.toLowerCase() === 'nikkugawa';

    document.querySelectorAll('.admin-only').forEach(el => {
      el.style.display = state.isAdmin ? '' : 'none';
    });

    document.getElementById('user-avatar').src       = user.profile_image_url;
    document.getElementById('user-name').textContent = user.display_name;

    const [captures] = await Promise.all([
      fetchCaptures(user.login),
      fetchAllNames(),
    ]);

    state.captures = captures;
    state.ownCaptures = captures;

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

init();
