import NextSEO from 'next-seo';
import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { SEPARATOR, SITE_TITLE, SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions';

const withLayout = (WrappedComponent, title, description, path, image) => {
  class HOC extends React.Component {
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
          <WrappedComponent {...this.props} />
          <Footer />
        </Fragment>
      );
    }
  }

  return HOC;
};

export { withLayout };
