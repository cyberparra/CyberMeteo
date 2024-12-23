const CACHE_NAME = 'CyberMeteo-v1';
const urlsToCache = [
    '/METEOWEB/',
    '/METEOWEB/index.html',
    '/METEOWEB/3h.html',
    '/METEOWEB/astro.html',
    '/METEOWEB/manifest.json',
    '/METEOWEB/icon-192x192.png',
    '/METEOWEB/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});