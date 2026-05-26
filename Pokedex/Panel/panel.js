const CONFIG = {
  supabase: {
    url: 'https://jgzjwhubabsnvccjzbau.supabase.co',
    key: 'sb_publishable_F2HuBjCaZC9QwL4qTuv4aA_kQtKaFvl',
  },
};

const EXCLUDED_USER_NAMES = ['nikkugawa'];

const GEN_CONFIG = {
  all:  { label: 'Total', max: 251, minId: 1,   maxId: 251 },
  gen1: { label: 'Gen 1', max: 151, minId: 1,   maxId: 151 },
  gen2: { label: 'Gen 2', max: 100, minId: 152, maxId: 251 },
};

let currentGenFilter = 'all';
let cachedRows = null;
const avatarCache = {};

const rankingEl = document.getElementById('ranking');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function fetchAvatar(login) {
  if (avatarCache[login] !== undefined) return avatarCache[login];

  try {
    const res = await fetch(`https://decapi.me/twitch/avatar/${encodeURIComponent(login)}`);
    if (!res.ok) {
      avatarCache[login] = '';
      return '';
    }

    const text = await res.text();
    const avatar = text.startsWith('http') ? text.trim() : '';

    avatarCache[login] = avatar;
    return avatar;
  } catch {
    avatarCache[login] = '';
    return '';
  }
}

async function fetchRows() {
  if (cachedRows) return cachedRows;

  const res = await fetch(
    `${CONFIG.supabase.url}/rest/v1/captures?select=user_login,user_name,pokemon_id`,
    {
      headers: {
        'apikey': CONFIG.supabase.key,
        'Authorization': `Bearer ${CONFIG.supabase.key}`,
      }
    }
  );

  if (!res.ok) throw new Error('Erreur Supabase');

  cachedRows = await res.json();
  return cachedRows;
}

function getCurrentMax() {
  return GEN_CONFIG[currentGenFilter].max;
}

function isPokemonInCurrentGen(id) {
  const gen = GEN_CONFIG[currentGenFilter];
  return id >= gen.minId && id <= gen.maxId;
}

function buildUsers(rows) {
  const users = {};

  for (const r of rows) {
    const login = String(r.user_login || '').toLowerCase();
    const name = String(r.user_name || login);
    const pokemonId = Number(r.pokemon_id);

    if (!login) continue;
    if (!pokemonId) continue;
    if (EXCLUDED_USER_NAMES.includes(name.toLowerCase())) continue;
    if (!isPokemonInCurrentGen(pokemonId)) continue;

    if (!users[login]) {
      users[login] = {
        login,
        name,
        pokemons: new Set(),
        avatar: '',
      };
    }

    users[login].pokemons.add(pokemonId);
  }

  return Object.values(users)
    .sort((a, b) => b.pokemons.size - a.pokemons.size)
    .slice(0, 100);
}

async function loadRanking(forceRefresh = false) {
  try {
    rankingEl.innerHTML = '<div class="loading">Chargement...</div>';

    if (forceRefresh) cachedRows = null;

    const rows = await fetchRows();
    const top = buildUsers(rows);

    await Promise.all(top.map(async user => {
      user.avatar = await fetchAvatar(user.login);
    }));

    renderRanking(top);
  } catch (err) {
    console.error(err);
    rankingEl.innerHTML = '<div class="error">Classement indisponible</div>';
  }
}

function avatarHtml(user, className) {
  const safeName = escapeHtml(user.name);

  if (user.avatar) {
    return `<img class="${className}" src="${user.avatar}" alt="${safeName}">`;
  }

  return `<div class="${className} avatar-fallback">${safeName.charAt(0).toUpperCase()}</div>`;
}

function percentText(count) {
  return Math.round((count / getCurrentMax()) * 100);
}

function scoreText(count) {
  return `${count}/${getCurrentMax()}`;
}

function renderRanking(list) {
  const container = rankingEl;

  if (!list.length) {
    container.innerHTML = `
      <div class="empty">
        Aucun dresseur classé pour cette génération.
      </div>`;
    return;
  }

  const top3 = list.slice(0, 3);
  const rest = list.slice(3);

  const left  = top3[1];
  const first = top3[0];
  const right = top3[2];

  container.innerHTML = `
    <div class="mini-podium">

      ${left ? `
        <div class="podium-user podium-2">
          <div class="podium-medal">🥈</div>
          ${avatarHtml(left, 'podium-avatar')}
          <div class="podium-name">${escapeHtml(left.name)}</div>
          <div class="podium-score">${scoreText(left.pokemons.size)}</div>
          <div class="podium-percent">${percentText(left.pokemons.size)}%</div>
        </div>
      ` : '<div></div>'}

      ${first ? `
        <div class="podium-user podium-1">
          <div class="podium-medal">👑</div>
          ${avatarHtml(first, 'podium-avatar')}
          <div class="podium-name">${escapeHtml(first.name)}</div>
          <div class="podium-score">${scoreText(first.pokemons.size)}</div>
          <div class="podium-percent">${percentText(first.pokemons.size)}%</div>
        </div>
      ` : '<div></div>'}

      ${right ? `
        <div class="podium-user podium-3">
          <div class="podium-medal">🥉</div>
          ${avatarHtml(right, 'podium-avatar')}
          <div class="podium-name">${escapeHtml(right.name)}</div>
          <div class="podium-score">${scoreText(right.pokemons.size)}</div>
          <div class="podium-percent">${percentText(right.pokemons.size)}%</div>
        </div>
      ` : '<div></div>'}

    </div>

    <div class="ranking-rest">
      ${rest.map((u, i) => {
        const safeName = escapeHtml(u.name);

        return `
          <div class="rank-row">
            <div class="rank-pos">#${i + 4}</div>
            ${avatarHtml(u, 'rank-avatar')}
            <div class="rank-info">
              <div class="rank-name" title="${safeName}">${safeName}</div>
              <div class="rank-percent">${percentText(u.pokemons.size)}% complété</div>
            </div>
            <div class="rank-score">${scoreText(u.pokemons.size)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

document.querySelectorAll('.gen-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gen-filter')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    currentGenFilter = btn.dataset.gen;

    loadRanking(false);
  });
});

loadRanking(true);
setInterval(() => loadRanking(true), 60000);
