self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("statics").then(cache => {
            return cache.addAll(["./","./app.css","./images/meuve-icon.png","./app.js"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
