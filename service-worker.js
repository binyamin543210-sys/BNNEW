self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("bnapp-calendar-v1").then((cache) =>
      cache.addAll([
        "./",
        "index.html",
        "style.css",
        "app.js",
        "manifest.json",
        "firebase-config.js"
      ])
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
