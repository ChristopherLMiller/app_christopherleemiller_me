// Client side things only, don't put things here that shouldn't be public
export const GRAPHQL_ENDPOINT = `https://api.christopherleemiller.me/graphql`;
export const siteTitle = `Christopher Lee Miller`;
export const siteDefaultImage = `https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png`;
export const separator = ` - `;

export const DEFAULT_SEO = {
  title: `ChristopherLeeMiller.me`,
  description: `Website all about me and my services`,
  openGraph: {
    type: `website`,
    locale: `en_IE`,
    url: process.env.SITE_URL,
    title: `ChristopherLeeMiller.me`,
    description: `Website all about me and my services`,
    image: siteDefaultImage,
    site_name: `ChristopherLeeMiller.me`,
    imageWidth: 300,
    imageHeight: 300,
  },
  twitter: {
    handle: `@moose517`,
    cardType: `summary_large_image`,
  },
};

export const perPage = 10;
