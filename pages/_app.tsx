import App, { AppProps } from "next/app";
import { StrictMode, ErrorInfo } from "react";
import Router from "next/router";
import * as Sentry from "@sentry/browser";
import { ApolloProvider } from "@apollo/react-hooks";
import { DefaultSeo } from "next-seo";
import LogRocket from "logrocket";
import { Event } from "@sentry/types";
import { ApolloClient } from "apollo-client";
import { ToastProvider } from "react-toast-notifications";
import { name, version } from "../package.json";
import Page from "../components/layout/Page";
import { withApollo } from "../lib/hook/withApollo";
import { SEPARATOR } from "../config";
import { initGA, logPageView } from "../utils/functions/analytics";
import { ProvideAuth } from "../lib/hook/useAuth";
import cookie from "react-cookies";
import { AnimatePresence, motion } from "framer-motion";

import "../node_modules/highlight.js/styles/atom-one-dark.css";
import "../static/nprogress.css";

interface IApolloClient {
  apollo: ApolloClient<any>;
}

interface AppState {
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
      jwt: null,
    };
  }

  // Error Catching
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.configureScope((scope) => {
      scope.setExtras(errorInfo);
    });

    Sentry.configureScope((scope) => {
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

    // get the jwt from cookies if it exists
    const jwt = cookie.load("jwt");
    if (jwt) {
      this.setState({
        jwt: jwt,
      });
    }
  }

  componentWillUnmount() {
    Router.events.off(`routeChangeComplete`, logPageView);
  }

  render() {
    const { Component, apollo, pageProps, router } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ProvideAuth jwt={this.state.jwt}>
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
            <AnimatePresence exitBeforeEnter>
              <motion.div initial="exit" animate="enter" exit="exit">
                <Page>
                  <StrictMode>
                    <Component {...pageProps} key={router.route} />
                  </StrictMode>
                </Page>
              </motion.div>
            </AnimatePresence>
          </ToastProvider>
        </ProvideAuth>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
