import { NextSeo } from 'next-seo';
import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions/imageURL';
import { Profile } from './Profile';


interface withLayoutProps {
  title: string;
  description: string;
  seo: string;
  path?: string;
  image?: string;
}

const withLayout = <P extends object>(
  WrappedComponent: any,
  meta: {
    title: string,
    description: string,
    useSEO: boolean,
    path?: string,
    image?: string,
  }
) => {
  class HOC extends React.Component<P & withLayoutProps> {
    static getInitialProps = WrappedComponent.getInitialProps;


    public render() {
      return (
        <Fragment>
          <Profile />
          <Header title={meta.title} description={meta.description} />
          {meta.useSEO && (
            <NextSeo
              title={meta.title}
              canonical={meta.path ? `${process.env.SITE_URL}${meta.path}` : undefined}
              description={meta.description}
              openGraph={{
                title: meta.title,
                description: meta.description,
                type: 'website',
                images: [
                  {
                    alt: meta.title,
                    url: meta.image ? `${ImageURL(meta.image)}.jpg` : SITE_DEFAULT_IMAGE,
                  },
                ],
                url: `${process.env.SITE_URL}${meta.path}`,
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
