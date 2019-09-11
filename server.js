const express = require(`express`);
const next = require(`next`);
const { join } = require(`path`);
const sitemap = require(`./lib/genSitemap`);
const mailer = require(`./utils/mailer`);
const bodyParser = require(`body-parser`);

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== `production`;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // Contact Form Submissions
    server.post(`/api/contact`, (req, res) => {
      const { email, name, message } = req.body;

      mailer({ email, name, message })
        .then(() => {
          console.log(`Mailed Successfully`);
          res.send(`success`);
        })
        .catch(error => {
          console.log(`mail failed`, error);
          res.send(`bad`);
        });
    });

    // Posts
    server.get(`/post/:slug`, (req, res) => {
      const actualPage = `/post`;
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    // Models
    server.get(`/model/:slug`, (req, res) => {
      const actualPage = `/model`;
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

    // Sitemap
    server.get(`/sitemap.xml`, (req, res) => {
      try {
        const xml = sitemap.toXML();
        res.header(`Content-Type`, `application/xml`);
        res.send(xml);
      } catch (e) {
        console.error(e);
        res.status(500).end();
      }
    });

    // Robots
    server.get(`/robots.txt`, (req, res) => {
      res.sendFile(join(__dirname, `../static`, `robots.txt`));
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
