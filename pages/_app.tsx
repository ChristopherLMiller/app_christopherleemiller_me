import App, { AppProps } from 'next/app';
import React from 'react';
import Router from 'next/router';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { DefaultSeo } from 'next-seo';
import LogRocket from 'logrocket';
import { Event } from '@sentry/types';
import { ApolloClient } from 'apollo-client';
import { ToastProvider } from 'react-toast-notifications';
import { name, version } from '../package.json';
import Page from '../components/layout/Page';
import { withApollo } from '../lib/withApollo';
import { SEPARATOR } from '../config';
import { initGA, logPageView } from '../utils/analytics';
import { ProvideAuth } from '../lib/hook/useAuth';
import cookie from 'react-cookies';

interface IApolloClient {
  apollo: ApolloClient<any>;
}

interface AppState {
  user: object | null;
  jwt: string | null;
}

class MyApp extends App<AppProps & IApolloClient, {}, AppState> {
  constructor(props: AppProps & IApolloClient) {
    super(props);

    // Setup sentry for error tracking
    Sentry.init({
      dsn: process.env.SENTRY_PUBLIC_DSN,
      release: `${name}@${version}`,
    });

    // Setup LogRocket for error monitoring
    LogRocket.init(process.env.LOGROCKET);

    // Setup state
    this.state = {
      user: null,
      jwt: null,
    }
  }

  // Error Catching
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
    // Initialize Google Analytics and log page changes
    initGA();
    Router.events.on(`routeChangeComplete`, logPageView);

    // get the user from localstorage if it exists
    const user = cookie.load('user');
    const jwt = cookie.load('jwt');
    if (user) {
      this.setState({
        user: user,
        jwt: jwt,
      });
    }
  }

  componentWillUnmount() {
    Router.events.off(`routeChangeComplete`, logPageView);
  }

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {} as any;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (

      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <ProvideAuth user={this.state.user}>
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
                <React.StrictMode>
                  <Component {...pageProps} />
                </React.StrictMode>
              </Page>
            </ToastProvider>
          </ProvideAuth>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
