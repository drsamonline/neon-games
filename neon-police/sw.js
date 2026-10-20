// sw.js - offline cache
const VERSION='neon-neon-police';
const ASSETS=[
  './',
  './index.html',
  './manifest.webmanifest',
  './hud.css',
  './police.game.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(r).then(c=>{const n=fetch(r).then(res=>{if(res&&res.status===200){const cp=res.clone();caches.open(VERSION).then(x=>x.put(r,cp));}return res;}).catch(()=>c);return c||n;}));});
