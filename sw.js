// Service Worker

const cacheName = 'restaurant-reviews-v1';

self.addEventListener('install', e => {
    // Pages cached in fetch event
});

self.addEventListener('activate', e => {
    // delete old caches
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheName && key.startsWith('restaurant-reviews-'))
                .map(key => caches.delete(key)))
            })
    )
});

self.addEventListener('fetch', e => {
    e.respondWith(
        // get response from cache if available or get response over the network
        caches.match(e.request)
            .then(cacheRes => {
                return cacheRes ||
                    fetch(e.request)
                        .then(fetchRes => {
                        // cache visited pages
                        caches.open(cacheName)
                            .then(cache => cache.add(e.request));
                        return fetchRes;
                    })
            })
    )
});
