//sw.js...
var cacheName = 'test app';

self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open(cacheName).then(function(cache) { return cache.addAll(["index.html", "test.js", "sw.js", "test.manifest", "images/test-icon-32.png", "images/test-icon-128.png", "images/test-icon-144.png", "images/test-icon-152.png", "images/test-icon-167.png", "images/test-icon-180.png", "images/test-icon-192.png", "images/test-icon-256.png", "images/test-icon-512.png", "favicon-32.png"]); })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(response) { return response || fetch(event.request); })
    );
});

