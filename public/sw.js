self.addEventListener("install", () => {
  console.log("[SW] Installed");
  self.skipWaiting();
});
self.addEventListener("activate", () => {
  console.log("[SW] Activated");
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((response) => {
          return caches.open("runtime").then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
