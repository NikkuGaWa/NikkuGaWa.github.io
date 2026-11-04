/* ════════════════════════════════════════════════
   CALCULATEUR — PROBABILITÉS DE SPAWN
   ────────────────────────────────────────────────
   Chargé APRÈS pokedex.js, dont il réutilise les registres (TIERS_DEF,
   POKEMON_TIERS, MEGA_EVOLUTIONS, POKEMON_FORMS, UNOWN_FORMS, GENERATIONS) et
   l'état (state.names).

   Le calcul reproduit spawnPokemon() de l'overlay, pour un spawn NATUREL :
     1. pickTier()            → CONFIG.rates[tier] %
     2. tirage uniforme       → parmi les ids du tier dans enabledGenerations
     3. shiny                 → shinyChance (× shinyCharm si gen complétée)
     4. méga, si l'espèce en a → megaChance (× megaCharm si Megadex complété),
                                puis une forme méga au hasard (X / Y)
     5. forme, si non méga    → une forme au hasard (pickForm)
   Shiny et méga sont indépendants. Aucune espèce n'a à la fois méga et formes.
════════════════════════════════════════════════ */

/* Copie de CONFIG dans Overlay/modules/config.js — à resynchroniser À LA MAIN.
   Le site ne peut pas charger ce fichier : il est déployé à part, et le config de
   l'overlay lève sans window.SECRETS. */
const SPAWN_RULES = {
  rates: { commun: 44, peuCommun: 33, rare: 15, epique: 5, fabuleux: 2, legendaire: 1 },
  shinyChance: 1 / 100,
  megaChance:  1 / 10,
  enabledGenerations:       [1, 2, 3, 4],
  completedGenerations:     [1, 2],
  shinyCharm:               3,
  completedGenerationsMega: [1, 2],
  megaCharm:                2,
};

const CALC_DEFAULT_ID = 6;   // Dracaufeu : charmes, méga X / Y — tout ce que l'outil sait montrer

const calcState = {
  id: CALC_DEFAULT_ID,
  shiny: false,
  variant: '',   // slug de méga ou de forme ; '' = forme normale / de base
};

let calcWired = false;

/* ─── Modèle ─────────────────────────────────── */
function getGenerationOf(id) {
  return GENERATIONS.find(g => id >= g.start && id <= g.end)?.id ?? null;
}

// Nombre d'ids que getAvailableIdsForTier() peut tirer pour ce palier.
function countSpawnableIds(tier) {
  return (TIERS_DEF[tier] || [])
    .filter(id => SPAWN_RULES.enabledGenerations.includes(getGenerationOf(id)))
    .length;
}

// 0 pour Arceus (absent de CONFIG.rates) et pour une génération non activée.
function speciesSpawnChance(id) {
  const tier = POKEMON_TIERS[id];
  const rate = SPAWN_RULES.rates[tier];
  if (!rate || !SPAWN_RULES.enabledGenerations.includes(getGenerationOf(id))) return 0;
  return rate / 100 / countSpawnableIds(tier);
}

function hasShinyCharm(id) {
  return SPAWN_RULES.completedGenerations.includes(getGenerationOf(id));
}

function hasMegaCharm(id) {
  return SPAWN_RULES.completedGenerationsMega.includes(getGenerationOf(id));
}

function shinyChanceFor(id) {
  return SPAWN_RULES.shinyChance * (hasShinyCharm(id) ? SPAWN_RULES.shinyCharm : 1);
}

function getMegaForms(id) {
  const mega = MEGA_EVOLUTIONS[id];
  if (!mega) return [];
  return Array.isArray(mega) ? mega : [mega];
}

function megaChanceFor(id) {
  if (!getMegaForms(id).length) return 0;
  return SPAWN_RULES.megaChance * (hasMegaCharm(id) ? SPAWN_RULES.megaCharm : 1);
}

// Zarbi n'est pas dans le POKEMON_FORMS du site (il a son Zarbidex) : on le rajoute ici.
function getAltForms(id) {
  if (id === UNOWN_ID) {
    return UNOWN_FORMS.map(f => ({ slug: f.slug, nom: `Zarbi ${f.label}` }));
  }
  return POKEMON_FORMS[id] || [];
}

/* Variantes sélectionnables, au sens de la clé de capture. `kind` dit comment
   la probabilité se décompose : 'base' (ni méga ni forme), 'mega', 'form'. */
function getSpeciesVariants(id) {
  const megas = getMegaForms(id);
  if (megas.length) {
    return [
      { slug: '', nom: 'Forme normale', kind: 'base' },
      ...megas.map(m => ({ slug: m.slug, nom: m.nom, kind: 'mega' })),
    ];
  }
  return getAltForms(id).map(f => ({ slug: f.slug, nom: f.nom, kind: 'form' }));
}

/* Toutes les probabilités affichées, pour un spawn naturel.
   `precise` = la variante exacte choisie (shiny ou non × méga / forme). */
function computeSpawnOdds(id, { shiny = false, variantSlug = '' } = {}) {
  const pSpecies = speciesSpawnChance(id);
  const pShiny   = shinyChanceFor(id);
  const pMega    = megaChanceFor(id);
  const megas    = getMegaForms(id);
  const forms    = getAltForms(id);

  const shinyFactor = shiny ? pShiny : 1 - pShiny;
  let variantFactor = 1;
  if (megas.length) {
    const isMegaSlug = megas.some(m => m.slug === variantSlug);
    variantFactor = isMegaSlug ? pMega / megas.length : 1 - pMega;
  } else if (forms.length) {
    variantFactor = 1 / forms.length;
  }

  return {
    species:   pSpecies,
    normal:    pSpecies * (1 - pShiny) * (1 - pMega),
    shiny:     pSpecies * pShiny,
    mega:      pSpecies * pMega,
    shinyMega: pSpecies * pShiny * pMega,
    precise:   pSpecies * shinyFactor * variantFactor,
  };
}

/* ─── Formatage ──────────────────────────────── */
function formatOneIn(p) {
  if (p <= 0) return 'Jamais en spawn naturel';
  return `1 chance sur ${Math.round(1 / p).toLocaleString('fr-FR')}`;
}

// Deux chiffres significatifs, quelle que soit la petitesse : 0,0012 %, 3,4 %.
function formatPercent(p) {
  if (p <= 0) return '0 %';
  const pct = p * 100;
  const decimals = Math.min(8, Math.max(0, 1 - Math.floor(Math.log10(pct))));
  return `${pct.toLocaleString('fr-FR', { maximumFractionDigits: decimals })} %`;
}

/* ─── Recherche ──────────────────────────────── */
// « 25 », « #025 », « pikachu », « Pikachu (#25) » (valeur de la datalist).
function resolveCalcQuery(raw) {
  const query = String(raw || '').trim().toLowerCase();
  if (!query) return null;

  const numMatch = query.match(/^#?0*(\d+)$/) || query.match(/\(#0*(\d+)\)\s*$/);
  if (numMatch) {
    const id = Number(numMatch[1]);
    return isInPokedex(id) ? id : null;
  }

  let prefixHit = null;
  for (let id = 1; id <= POKEDEX_TOTAL; id++) {
    const name = String(state.names[id] || '').toLowerCase();
    if (name === query) return id;
    if (!prefixHit && name.startsWith(query)) prefixHit = id;
  }
  return prefixHit;
}

function fillCalcDatalist() {
  const list = document.getElementById('calc-pokemon-list');
  if (!list || list.childElementCount) return;
  const frag = document.createDocumentFragment();
  for (let id = 1; id <= POKEDEX_TOTAL; id++) {
    const opt = document.createElement('option');
    opt.value = `${state.names[id] || `#${id}`} (#${id})`;
    frag.appendChild(opt);
  }
  list.appendChild(frag);
}

/* ─── Rendu ──────────────────────────────────── */
function calcSpriteUrl(id, variant, shiny) {
  if (variant?.kind === 'form') {
    if (id === UNOWN_ID) return getUnownSpriteUrl(variant.slug, shiny);
    return getFormSpriteUrl(POKEMON_FORMS[id].find(f => f.slug === variant.slug), shiny);
  }
  return `${shiny ? SPRITE_SHINY : SPRITE_BASE}${id}.png`;
}

function renderCalcSprite(id, variant, shiny) {
  const img = document.getElementById('calc-sprite');
  img.src = calcSpriteUrl(id, variant, shiny);
  img.alt = variant?.kind === 'mega' || variant?.kind === 'form' ? variant.nom : (state.names[id] || `#${id}`);

  // Les mégas n'ont pas d'URL déductible : sprite de l'espèce d'abord, corrigé ensuite.
  if (variant?.kind !== 'mega') return;
  const requested = `${id}:${variant.slug}:${shiny}`;
  img.dataset.request = requested;
  getMegaSpriteUrl(id, variant.slug, shiny).then(url => {
    if (url && img.dataset.request === requested) img.src = url;
  });
}

function renderCalcHeader(id) {
  const tier = POKEMON_TIERS[id];
  const gen  = getGenerationOf(id);

  document.getElementById('calc-name').textContent   = state.names[id] || `#${id}`;
  document.getElementById('calc-number').textContent = `#${String(id).padStart(3, '0')} · Génération ${gen}`;

  const badge = document.getElementById('calc-tier');
  badge.className   = `modal-badge modal-badge-${tier}`;
  badge.textContent = `${TIER_STARS[tier]} ${TIER_LABELS[tier]}`;
}

function renderCalcControls(id, variants) {
  document.querySelectorAll('[data-calc-shiny]').forEach(btn => {
    btn.classList.toggle('active', (btn.dataset.calcShiny === '1') === calcState.shiny);
  });

  const wrap   = document.getElementById('calc-variant-wrap');
  const select = document.getElementById('calc-variant');
  wrap.hidden = variants.length === 0;
  select.innerHTML = '';
  for (const v of variants) {
    const opt = document.createElement('option');
    opt.value = v.slug;
    opt.textContent = v.nom;
    select.appendChild(opt);
  }
  select.value = calcState.variant;
}

function calcRow(label, p, { highlight = false } = {}) {
  return `
    <div class="calc-row${highlight ? ' calc-row-precise' : ''}${p <= 0 ? ' calc-row-zero' : ''}">
      <span class="calc-row-label">${label}</span>
      <span class="calc-row-odds">${escapeHtml(formatOneIn(p))}</span>
      <span class="calc-row-pct">${escapeHtml(formatPercent(p))}</span>
    </div>`;
}

function describePreciseVariant(id, variant) {
  const name = variant && variant.kind !== 'base' ? variant.nom : (state.names[id] || `#${id}`);
  return `${calcState.shiny ? '✨ ' : ''}${name}${calcState.shiny ? ' shiny' : ''}`;
}

function renderCalcNotes(id) {
  const notes = [];
  const gen = getGenerationOf(id);
  const tier = POKEMON_TIERS[id];

  if (!SPAWN_RULES.rates[tier]) {
    notes.push('N’apparaît jamais dans le cycle naturel : uniquement par spawn forcé.');
  } else if (!SPAWN_RULES.enabledGenerations.includes(gen)) {
    notes.push(`La Génération ${gen} n’est pas encore ouverte aux spawns naturels.`);
  } else {
    notes.push(`${TIER_LABELS[tier]} : ${SPAWN_RULES.rates[tier]} % des spawns, partagés entre ${countSpawnableIds(tier)} Pokémon.`);
  }
  if (hasShinyCharm(id)) {
    notes.push(`Charme Chroma actif (Génération ${gen} complétée) : chance de shiny ×${SPAWN_RULES.shinyCharm}.`);
  }
  if (getMegaForms(id).length && hasMegaCharm(id)) {
    notes.push(`Charme Méga actif (Megadex Gen ${gen} complété) : chance de méga ×${SPAWN_RULES.megaCharm}.`);
  }
  return notes.map(n => `<li>${escapeHtml(n)}</li>`).join('');
}

function renderCalculator() {
  const id = calcState.id;
  const variants = getSpeciesVariants(id);
  if (!variants.some(v => v.slug === calcState.variant)) {
    calcState.variant = variants[0]?.slug ?? '';
  }
  const variant  = variants.find(v => v.slug === calcState.variant) || null;
  const hasMega  = getMegaForms(id).length > 0;
  const odds     = computeSpawnOdds(id, { shiny: calcState.shiny, variantSlug: calcState.variant });

  renderCalcHeader(id);
  renderCalcControls(id, variants);
  renderCalcSprite(id, variant, calcState.shiny);
  document.getElementById('calc-sprite').classList.toggle('is-shiny', calcState.shiny);

  const rows = [
    calcRow('Toutes variantes', odds.species),
    calcRow(hasMega ? 'Normal (ni shiny, ni méga)' : 'Normal (non shiny)', odds.normal),
    calcRow('✨ Shiny', odds.shiny),
  ];
  if (hasMega) {
    rows.push(calcRow('Méga', odds.mega), calcRow('✨ Shiny + Méga', odds.shinyMega));
  }

  document.getElementById('calc-results').innerHTML = `
    ${calcRow(`Précisément : ${escapeHtml(describePreciseVariant(id, variant))}`, odds.precise, { highlight: true })}
    ${rows.join('')}`;
  document.getElementById('calc-notes').innerHTML = renderCalcNotes(id);
}

/* ─── Événements ─────────────────────────────── */
function setCalcPokemon(id) {
  if (id === calcState.id) return;
  calcState.id = id;
  calcState.variant = '';
  renderCalculator();
}

function wireCalculator() {
  const search = document.getElementById('calc-search');
  const error  = document.getElementById('calc-search-error');

  // Saisie en cours : on suit dès qu'un Pokémon se reconnaît, sans signaler d'erreur.
  search.addEventListener('input', () => {
    const id = resolveCalcQuery(search.value);
    error.hidden = true;
    if (id) setCalcPokemon(id);
  });
  // Validation : là seulement, une saisie qui ne mène à rien est signalée.
  search.addEventListener('change', () => {
    const id = resolveCalcQuery(search.value);
    error.hidden = !!id || !search.value.trim();
    if (id) {
      setCalcPokemon(id);
      search.value = `${state.names[id] || `#${id}`} (#${id})`;
    }
  });

  document.querySelectorAll('[data-calc-shiny]').forEach(btn => {
    btn.addEventListener('click', () => {
      calcState.shiny = btn.dataset.calcShiny === '1';
      renderCalculator();
    });
  });

  document.getElementById('calc-variant').addEventListener('change', e => {
    calcState.variant = e.target.value;
    renderCalculator();
  });
}

function initCalculator() {
  if (!calcWired) {
    wireCalculator();
    calcWired = true;
  }
  fillCalcDatalist();
  renderCalculator();
}
