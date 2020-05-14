const fetch = require(`node-fetch`);

const { createSitemap } = require(`sitemap`);

const sitemap = createSitemap({
  hostname: process.env.SITE_URL,
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    {
      url: `/blog/`,
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

async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

// iterate over the posts and append to the sitemap
const article_slugs = fetchData(
  `https://strapi.christopherleemiller.me/graphql?query=query ALL_ARTICLE_SLUGS { articles(limit: 999, where: {  published: true }) { slug, updated_at } }&operationName=ALL_ARTICLE_SLUGS`
)
  .then((response) => {
    response.data.articles.forEach((article) => {
      sitemap.add({
        url: `post/${article.slug}`,
        changefreq: `monthly`,
        priority: 0.7,
        lastmodISO: article.updated_at,
      });
    });
  })
  .catch(() => {
    console.log(`Unable to fetch data`);
  });

const models_url = fetchData(
  `https://strapi.christopherleemiller.me/graphql?query=query ALL_MODELS_SLUGS { models(limit: 999, where: { published: true }) { slug, updated_at } }&operationName=ALL_MODELS_SLUGS`
)
  .then((response) => {
    response.data.models.forEach((model) => {
      sitemap.add({
        url: `model/${model.slug}`,
        changefreq: `weekly`,
        priority: 0.7,
        lastmodISO: model.updated_at,
      });
    });
  })
  .catch(() => {
    console.log(`Unable to fetch data`);
  });

const images_url = fetchData(
  `https://strapi.christopherleemiller.me/graphql?query=query ALL_IMAGE_SLUGS { images(limit: 999) { slug, updated_at } }&operationName=ALL_IMAGE_SLUGS`
)
  .then((response) => {
    response.data.images.forEach((image) => {
      sitemap.add({
        url: `image/${image.slug}`,
        changefreq: `weekly`,
        priority: 0.7,
        lastmodISO: image.updated_at,
      });
    });
  })
  .catch(() => {
    console.log(`Unable to fetch data`);
  });

module.exports = sitemap;
