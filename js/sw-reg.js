// Service Worker registration

// Check service worker support
if (navigator.serviceWorker) {
    // Register service worker
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('ServiceWorker registration successful with scope: ', reg.scope))
        .catch(err => console.log('ServiceWorker registration failed: ', err))
}
