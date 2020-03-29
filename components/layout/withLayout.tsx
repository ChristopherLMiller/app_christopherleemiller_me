import { Component } from 'react';
import { NextSeo } from 'next-seo';
import { Footer } from './Footer';
import Header from './Header';
import { SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions/imageURL';
import { Profile } from './Profile';
import styled from 'styled-components';

interface withLayoutProps {
  title: string;
  description: string;
  seo: string;
  path?: string;
  image?: string;
}

const InnerPage = styled.div`
  position: relative;
`;

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
  class HOC extends Component<P & withLayoutProps> {
    static getInitialProps = async (ctx: any) => {
      let pageProps = {};

      if (WrappedComponent.getInitialProps)
        return await WrappedComponent.getInitialProps(ctx);

      return { pageProps };
    }

    public render() {
      return (
        <InnerPage>
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
        </InnerPage>
      );
    }
  }

  return HOC;
};

export { withLayout };
