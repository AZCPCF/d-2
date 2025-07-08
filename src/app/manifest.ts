import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D2",
    short_name: "D2 Collection",
    description: "فروشگاه پوشاک مردانه و بچگانه",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fed00b",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["shopping"],
    dir: "rtl",
    id: "azcpcf-d2-collection",
    lang: "fa",
    shortcuts: [
      { name: "درباره ما", url: "/about-us" },
      { name: "ارتباط با ما", url: "/contact-us" },
      { name: "دسته بندی ها", url: "/categories" },
    ],
    launch_handler: { client_mode: "auto" },
    orientation: "any",
    display_override: ["standalone", "fullscreen"],
    scope: "/",
  };
}
