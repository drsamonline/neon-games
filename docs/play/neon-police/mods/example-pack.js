// Example content pack — copy this file, change the ids, and you have a mod.
// It is loaded by a <script> tag in index.html, so it works fully offline.
window.NEON_MODS = window.NEON_MODS || [];
window.NEON_MODS.push({
  id: 'example-pack',
  name: 'Example Pack',
  author: 'Dr. Sohil Momin',
  version: '1.0.0',

  // a new weapon: only the required fields are needed, the rest get defaults
  weapons: [{
    id: 'railgun', name: 'Railgun', kind: 'sniper', rarity: 'legendary',
    damage: 210, rpm: 40, mag: 4, reserveMax: 24, spread: 0.001,
    range: 300, reload: 2.6, price: 3200, unlock: 12,
    palette: { body: '#3a4a6a', accent: '#59d0ff', barrel: '#1a2434' },
  }],

  // a new enemy: needs hp/speed/dmg/radius, everything else is optional
  enemies: [{
    id: 'stalker', name: 'Stalker', hp: 110, speed: 5.4, dmg: 15, radius: 0.5,
    scale: 1.0, xp: 60, coins: 22, unlock: 3, color: '#2a3a4a', skin: '#4a6a7a',
    behavior: 'chase', sightRange: 70,
  }],

  // extra biome weighting and spawn-pool entries.
  // Left empty on purpose: this template ships ENABLED, so it must not change the
  // game's balance. Uncomment the pool line and stalkers will start spawning.
  biomes: [],
  pool: [],   // e.g. ['stalker']
});
