self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('dashboard-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/src/css/normalize.css',
          '/src/css/styles.css',
          '/src/js/main.js',
          '/src/images/icons/icon-192x192.png',
          '/src/images/icons/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });