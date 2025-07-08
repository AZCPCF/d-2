import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "azcpcf-d2-collection",
    dir: "rtl",
    lang: "fa",
    name: "D2",
    short_name: "D2 Collection",
    description: "فروشگاه پوشاک مردانه و بچگانه",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "fullscreen", "window-controls-overlay"],
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#fed00b",
    prefer_related_applications: false,
    launch_handler: {
      client_mode: "auto",
    },
    categories: ["shopping"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      { src: "/screenshots/windows-ss.png", platform: "windows" },
      { src: "/screenshots/android-ss.png", platform: "android" },
      { src: "/screenshots/windows-ss-dark.png", platform: "windows" },
      { src: "/screenshots/android-ss-dark.png", platform: "android" },
    ],
    shortcuts: [
      {
        name: "درباره ما",
        url: "/about-us",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      {
        name: "ارتباط با ما",
        url: "/contact-us",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      {
        name: "دسته بندی ها",
        url: "/categories",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    ],
  };
}
