const express = require(`express`);
const next = require(`next`);
const { join } = require(`path`);
// const sitemap = require(`./lib/genSitemap`);
const bodyParser = require(`body-parser`);
const cookieParser = require(`cookie-parser`);
const uid = require(`uid-safe`);
const session = require(`express-session`);
const mongoose = require(`mongoose`);
const MongoStore = require(`connect-mongo`)(session);

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== `production`;
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect(
  `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds137263.mlab.com:37263/api_christopherleemiller_me`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app
  .prepare()
  .then(() => {
    const server = express();

    // prepare session for authentication
    const sessionConfig = {
      secret: uid.sync(18),
      cookie: {
        maxAge: 86400 * 1000, // 24 hours
      },
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: db }),
    };

    server.use(session(sessionConfig));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    // Admin redirect
    server.get(`/strapi`, (req, res) => {
      res.status(301).redirect(`https://strapi.christopherleemiller.me/admin`);
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

    /*    // Sitemap
        server.get(`/sitemap.xml`, (res) => {
          const xml = sitemap.toXML();
          res.header(`Content-Type`, `application/xml`);
          res.send(xml);
          console.error(e);
        });

        // Robots
        server.get(`/robots.txt`, (res) => {
          res.sendFile(join(__dirname, `../static`, `robots.txt`));
        });
    */

    // All others
    server.get(`*`, (req, res) => {
      handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${process.env.SITE_URL}:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
