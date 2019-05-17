const sm = require(`sitemap`);
const path = require(`path`);
require(`dotenv`).config();

const sitemap = sm.createSitemap({
  hostname: process.env.SITE_URL,
  cacheTime: 600000, // 600 sec - cache purge period
});

const setup = ({ server }) => {
  sitemap.add({
    url: `/articles`,
    changefreq: `daily`,
    priority: 1,
  });

  sitemap.add({
    url: `/about`,
    changefreq: `never`,
    priority: 1,
  });

  sitemap.add({
    url: `/contact-me`,
    changefreq: `never`,
    priority: 0.9,
  });

  sitemap.add({
    url: `/gallery`,
    changefreq: `daily`,
    priority: 1,
  });

  sitemap.add({
    url: `/models`,
    changefreq: `weekly`,
    priority: 1,
  });

  sitemap.add({
    url: `/privacy-policy`,
    changefreq: `yearly`,
    priority: 1,
  });

  sitemap.add({
    url: `/services`,
    changefreq: `never`,
    priority: 1,
  });

  server.get(`/sitemap.xml`, (req, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header(`Content-Type`, `application/xml`);
      res.send(xml);
    });
  });

  server.get(`/robots.txt`, (req, res) => {
    res.sendFile(path.join(__dirname, `../static`, `robots.txt`));
  });
};

module.exports = setup;
