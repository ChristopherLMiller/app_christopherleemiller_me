// Client side things only, don't put things here that shouldn't be public
export const endpoint = 'https://api.christopherleemiller.me';
export const SENTRY_PUBLIC_DSN =
  'https://689a090684274ef79c1d224dab39e692@sentry.io/1331823';

export const DEFAULT_SEO = {
  title: 'ChristopherLeeMiller.me',
  description: 'Website all about me and my services',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.christopherleemiller.me',
    title: 'ChristopherLeeMiller.me',
    description: 'Website all about me and my services',
    image:
      'https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png',
    site_name: 'ChristopherLeeMiller.me',
    imageWidth: 300,
    imageHeight: 300,
  },
  twitter: {
    handle: '@moose517',
    cardType: 'summary_large_image',
  },
};

export const perPage = 10;