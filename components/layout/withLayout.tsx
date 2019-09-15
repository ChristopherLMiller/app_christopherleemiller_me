import { NextSeo } from 'next-seo';
import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions';

interface withLayoutProps {
  title: string;
  description: string;
  seo: string;
  path?: string;
  image?: string;
}

const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  description: string,
  seo: boolean,
  path?: string,
  image?: string
) => {
  class HOC extends React.Component<P & withLayoutProps> {
    public render() {
      return (
        <Fragment>
          <Header title={title} description={description} />
          {seo && (
            <NextSeo
              title={title}
              canonical={path ? `${process.env.SITE_URL}${path}` : undefined}
              description={description}
              openGraph={{
                title,
                description,
                type: 'website',
                images: [
                  {
                    alt: title,
                    url: image ? `${ImageURL(image)}.jpg` : SITE_DEFAULT_IMAGE,
                  },
                ],
                url: `${process.env.SITE_URL}${path}`,
              }}
            />
          )}
          <WrappedComponent {...(this.props as P)} />
          <Footer />
        </Fragment>
      );
    }
  }

  return HOC;
};

export { withLayout };
