const express = require(`express`);
const next = require(`next`);
const { join } = require(`path`);
const sitemapAndRobots = require(`./lib/sitemapAndRobots`);

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== `production`;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Sitemap and Robots
    sitemapAndRobots({ server });

    // Posts
    server.get(`/post/:slug`, (req, res) => {
      const actualPage = `/post`;
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    // Service worker
    server.get(`/service-worker.js`, (req, res) => {
      const filePath = join(__dirname, `.next`, `/service-worker.js`);
      app.serveStatic(req, res, filePath);
    });

    // Redirect admin to the backend
    server.get(`/admin`, (req, res) => {
      res.status(301).redirect(`https://strapi.christopherleemiller.me/admin`);
    });

    // All others
    server.get(`*`, (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${process.env.SITE_URL}:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
