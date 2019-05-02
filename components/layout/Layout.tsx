import NextSEO from 'next-seo';
import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { SEPARATOR, SITE_TITLE } from '../../config';

const withLayout = (WrappedComponent, title, description, path) => {
  class HOC extends React.Component {
    render() {
      return (
        <Fragment>
          <Header title={title} description={description} />
          <NextSEO
            config={{
              title: `${SITE_TITLE}${SEPARATOR}${title}`,
              description,
              openGraph: {
                description,
                title: `${SITE_TITLE}${SEPARATOR}${title}`,
                url: `${process.env.SITE_URL}${path}`,
              },
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
