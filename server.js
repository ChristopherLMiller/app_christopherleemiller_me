const express = require(`express`);
const next = require(`next`);
// const sitemap = require(`lib/genSitemap`);
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
let db = null;

if (process.env.NODE_ENV === `production`) {
  mongoose
    .connect(
      `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds137263.mlab.com:37263/api_christopherleemiller_me`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch(() => console.log(`unable to connect to mongo for session storage`));
  mongoose.Promise = global.Promise;
  db = mongoose.connection;
}

app
  .prepare()
  .then(() => {
    const server = express();

    // prepare session for authentication
    if (process.env.NODE_ENV === `production`) {
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
    }

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    // Admin redirect
    server.get(`/strapi`, (req, res) => {
      res
        .status(301)
        .redirect(`https://strapi.christopherleemiller.me/dashboard`);
    });

    /*    // Sitemap
        server.get(`/sitemap.xml`, (res) => {
          const xml = sitemap.toXML();
          res.header(`Content-Type`, `application/xml`);
          res.send(xml);
          console.error(e);
        });
        */

    // All others
    /*server.get(`*`, (req, res) => {
      handle(req, res);
    });*/
    server.use((req, res) => app.getRequestHandler()(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${process.env.NEXT_PUBLIC_SITE_URL}:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
