import App, { AppProps, AppContext } from 'next/app';
import React from 'react';
import Router from 'next/router';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { DefaultSeo } from 'next-seo';
import LogRocket from 'logrocket';
import { Event } from '@sentry/types';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { ToastProvider } from 'react-toast-notifications';
import { name, version } from '../package.json';
import Page from '../components/layout/Page';
import { withApollo } from '../lib/withApollo';
import { SEPARATOR } from '../config';
import { initGA, logPageView } from '../utils/analytics';
import { ProvideAuth } from '../lib/hook/useAuth';

interface IApolloClient {
  apollo: ApolloClient<NormalizedCacheObject>;
}
class MyApp extends App<AppProps & IApolloClient> {
  constructor(props: AppProps & IApolloClient) {
    super(props);
    Sentry.init({
      dsn: process.env.SENTRY_PUBLIC_DSN,
      release: `${name}@${version}`,
    });
    LogRocket.init(process.env.LOGROCKET);
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req != undefined) {
      const cookies = ctx.req.headers.cookie;
      if (cookies != undefined) {
        const cookiesArray = cookies.split(';');

        cookiesArray.forEach(cookie => {
          const keyPair = cookie.split('=');

          if (keyPair[0].trim() === 'jwt') {
            const jwt = keyPair[1].trim();
            pageProps = { ...pageProps, jwt };
          }
        });
      }
    }

    return { pageProps };
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
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.events.on(`routeChangeComplete`, logPageView);
  }

  componentWillUnmount() {
    Router.events.off(`routeChangeComplete`, logPageView);
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <ProvideAuth>
            <DefaultSeo
              titleTemplate={`ChristopherLeeMiller.me ${SEPARATOR} %s`}
              facebook={{
                appId: process.env.FB_APP_ID,
              }}
              openGraph={{
                locale: `en_IE`,
                site_name: `ChristopherLeeMiller.me`,
              }}
              twitter={{
                handle: `@ChrisLMiller_me`,
                cardType: `summary_large_image`,
              }}
            />
            <ToastProvider>
              <Page>
                <Component {...pageProps} />
              </Page>
            </ToastProvider>
          </ProvideAuth>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
