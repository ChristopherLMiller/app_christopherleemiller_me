import DefaultApp, { AppProps, AppContext } from 'next/app';
import React from 'react';
import Router from 'next/router';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { DefaultSeo } from 'next-seo';
import LogRocket from 'logrocket';
import { Event } from '@sentry/types';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { name, version } from '../package.json';
import Page from '../components/layout/Page';
import withApollo from '../lib/withApollo';
import { SITE_DEFAULT_IMAGE, SEPARATOR } from '../config';
import { initGA, logPageView } from '../utils/analytics';

interface IApolloClient {
  apollo: ApolloClient<NormalizedCacheObject>;
}
class MyApp extends DefaultApp<AppProps & IApolloClient> {
  constructor(props: AppProps & IApolloClient) {
    super(props);
    Sentry.init({
      dsn: process.env.SENTRY_PUBLIC_DSN,
      release: `${name}@${version}`,
    });
    LogRocket.init(process.env.LOGROCKET);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.configureScope(scope => {
      scope.setExtras(errorInfo);
    });

    Sentry.configureScope(scope => {
      scope.addEventProcessor((event: Event) => {
        if (event.extra !== undefined) {
          event.extra.sessionURL = LogRocket.sessionURL
            ? LogRocket.sessionURL
            : null;
          return event;
        }
        return event;
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development/production
    // super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.events.on(`routeChangeComplete`, logPageView);
  }

  componentWillUnmount() {
    Router.events.off(`routeChangeComplete`, logPageView);
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {} as any;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <DefaultSeo
            titleTemplate={`ChristopherLeeMiller.me ${SEPARATOR} %s`}
            facebook={{
              appId: process.env.FB_APP_ID,
            }}
            openGraph={{
              type: `website`,
              locale: `en_IE`,
              images: [
                {
                  url: SITE_DEFAULT_IMAGE,
                  width: 300,
                  height: 300,
                },
              ],
              site_name: `ChristopherLeeMiller.me`,
            }}
            twitter={{
              handle: `@ChrisLMiller_me`,
              cardType: `summary_large_image`,
            }}
          />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
