import NextSEO from 'next-seo';
import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { SEPARATOR, SITE_TITLE, SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions';

interface withLayoutProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  description: string,
  path?: string,
  image?: string
) => {
  class HOC extends React.Component<P & withLayoutProps> {
    public render() {
      return (
        <Fragment>
          <Header title={title} description={description} />
          <NextSEO
            config={{
              canonical: `${process.env.SITE_URL}${path}`,
              description,
              openGraph: {
                description,
                images: [
                  {
                    alt: title,
                    url: image ? `${ImageURL(image)}.jpg` : SITE_DEFAULT_IMAGE,
                  },
                ],
                title: `${SITE_TITLE}${SEPARATOR}${title}`,
                url: `${process.env.SITE_URL}${path}`,
              },
              title: `${SITE_TITLE}${SEPARATOR}${title}`,
            }}
          />
          <WrappedComponent {...(this.props as P)} />
          <Footer />
        </Fragment>
      );
    }
  }

  return HOC;
};

export { withLayout };
