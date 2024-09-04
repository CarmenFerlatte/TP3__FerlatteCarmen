const CACHE_NAME = 'stack-cache-v1';

const FILES_TO_CACHE = [
    './offline.html',
    './index.html',
    './realisations.html',
    './contact.html',
    './assets/php/header.html',
    './assets/php/footer.html',
    './img/icons/icon-192x192.png',
    './style/css/style.css',
    './img/gifs/courriel_dino.gif',
    './img/gifs/',
];

// Installation du Service Worker
self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Mise en cache des fichiers de l'application
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Mise en cache des fichiers de l\'application');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');

    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Retirer la vieille cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );

    self.clients.claim();
});

// Accès à une ressource mise en cache
self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    // Gestion de l'évènement Fetch (accès à une ressource mise en cache)
    if (evt.request.mode !== 'navigate') {
        return;
    }

    evt.respondWith(
        fetch(evt.request).catch(() => {
            return caches.open(CACHE_NAME).then((cache) => {
                return cache.match('offline.html');
            });
        })
    );
});