const { createSitemap } = require(`sitemap`);
require(`dotenv`).config();

const sitemap = createSitemap({
  hostname: process.env.SITE_URL,
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    {
      url: `/articles/`,
      changefreq: `daily`,
      priority: 1,
    },
    {
      url: `/about`,
      changefreq: `never`,
      priority: 1,
    },
    {
      url: `/contact-me`,
      changefreq: `never`,
      priority: 1,
    },
    {
      url: `/galleries`,
      changefreq: `weekly`,
      priority: 1,
    },
    {
      url: `/models`,
      changefreq: `weekly`,
      priority: 1,
    },
    {
      url: `/privacy-policy`,
      changefreq: `yearly`,
      priority: 1,
    },
    {
      url: `/services`,
      changefreq: `yearly`,
      priority: 1,
    },
  ],
});

module.exports = sitemap;
