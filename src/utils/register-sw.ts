export function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("[PWA] Service worker registered", reg);
        })
        .catch((err) => {
          console.error("[PWA] Service worker registration failed", err);
        });
    });
  }
}
