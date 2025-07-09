/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://azcpcf-d-2.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/secret", "/admin/*"],
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom logic per path if needed
    return {
      loc: path, // => this will be prepended by siteUrl
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
