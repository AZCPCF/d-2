import { NextApiRequest, NextApiResponse } from "next";

const siteUrl = "https://azcpcf-d-2.vercel.app";

// Static pages including manifest
const staticRoutes = ["", "about", "contact", "blog", "manifest.webmanifest"];

// Example dynamic blog slugs (you can fetch from CMS or filesystem later)
const blogSlugs = ["how-to-use-nextjs", "my-second-post"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = [
    ...staticRoutes.map((route) => `${siteUrl}/${route}`),
    ...blogSlugs.map((slug) => `${siteUrl}/blog/${slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
