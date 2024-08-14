const CACHE_NAME = 'stack-cache-v7';

const FILES_TO_CACHE = [
    './offline.html',
    './index.html',
    './realisations.html',
    './contact.html',
    './css/navbar.css',
    './js/install.js',
    './js/navbar.js',
    './js/script.js',
    './manifest.json'
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});