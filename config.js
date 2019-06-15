// Client side things only, don't put things here that shouldn't be public
export const GRAPHQL_ENDPOINT = `https://strapi.christopherleemiller.me/graphql`;
export const STRAPI_ENDPOINT = `https://strapi.christopherleemiller.me`;
export const CLOUDINARY_URL = `https://res.cloudinary.com`;
export const CLOUDINARY_CLOUD = `christopherleemiller`;
export const CLOUDINARY_VERSION = `v1554111995`;
export const CLOUDINARY_FOLDER = `clm_me`;

export const SITE_TITLE = `Christopher Lee Miller`;
export const SITE_DEFAULT_IMAGE = `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/c_scale,w_300/${CLOUDINARY_VERSION}/${CLOUDINARY_FOLDER}/assets/logo.png`;
export const SEPARATOR = ` - `;

export const DEFAULT_SEO = {
  title: `ChristopherLeeMiller.me`,
  description: `Website all about me and my services`,
  canonical: process.env.SITE_URL,
  openGraph: {
    type: `website`,
    locale: `en_IE`,
    url: process.env.SITE_URL,
    title: `ChristopherLeeMiller.me`,
    description: `Website all about me and my services`,
    image: SITE_DEFAULT_IMAGE,
    site_name: `ChristopherLeeMiller.me`,
    imageWidth: 300,
    imageHeight: 300,
  },
  twitter: {
    handle: `@ChrisLMiller_me`,
    cardType: `summary_large_image`,
  },
};

export const DISQUS_SHORTNAME = `christopherleemiller-me`;
export const PER_PAGE = 20;
