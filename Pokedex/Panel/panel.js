const CONFIG = {
  supabase: {
    url: 'https://jgzjwhubabsnvccjzbau.supabase.co',
    key: 'sb_publishable_F2HuBjCaZC9QwL4qTuv4aA_kQtKaFvl',
  },
};

const EXCLUDED_USER_NAMES = ['nikkugawa'];
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
  try {
    const res = await fetch(`https://decapi.me/twitch/avatar/${encodeURIComponent(login)}`);
    if (!res.ok) return '';
    const text = await res.text();
    return text.startsWith('http') ? text.trim() : '';
  } catch {
    return '';
  }
}

async function loadRanking() {
  try {
    rankingEl.innerHTML = '<div class="loading">Chargement...</div>';

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

    const rows = await res.json();
    const users = {};

    for (const r of rows) {
      const login = String(r.user_login || '').toLowerCase();
      const name = String(r.user_name || login);

      if (!login) continue;
      if (EXCLUDED_USER_NAMES.includes(name.toLowerCase())) continue;

      if (!users[login]) {
        users[login] = {
          login,
          name,
          pokemons: new Set(),
          avatar: '',
        };
      }

      users[login].pokemons.add(r.pokemon_id);
    }

    const top = Object.values(users)
      .sort((a, b) => b.pokemons.size - a.pokemons.size)
      .slice(0, 100);

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

function renderRanking(list) {
  const container = rankingEl;

  if (!list.length) {
    container.innerHTML = `
      <div class="empty">
        Aucun dresseur classé pour le moment.
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
          <div class="podium-score">${left.pokemons.size}/151</div>
          <div class="podium-percent">${Math.round((left.pokemons.size / 151) * 100)}%</div>
        </div>
      ` : '<div></div>'}

      ${first ? `
        <div class="podium-user podium-1">
          <div class="podium-medal">👑</div>
          ${avatarHtml(first, 'podium-avatar')}
          <div class="podium-name">${escapeHtml(first.name)}</div>
          <div class="podium-score">${first.pokemons.size}/151</div>
          <div class="podium-percent">${Math.round((first.pokemons.size / 151) * 100)}%</div>
        </div>
      ` : ''}

      ${right ? `
        <div class="podium-user podium-3">
          <div class="podium-medal">🥉</div>
          ${avatarHtml(right, 'podium-avatar')}
          <div class="podium-name">${escapeHtml(right.name)}</div>
          <div class="podium-score">${right.pokemons.size}/151</div>
          <div class="podium-percent">${Math.round((right.pokemons.size / 151) * 100)}%</div>
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
              <div class="rank-percent">${Math.round((u.pokemons.size / 151) * 100)}% complété</div>
            </div>
            <div class="rank-score">${u.pokemons.size}/151</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

loadRanking();
setInterval(loadRanking, 60000);
