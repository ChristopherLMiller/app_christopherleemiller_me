import App, { Container } from 'next/app';
import Router from 'next/router';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import NextSEO from 'next-seo';
import LogRocket from 'logrocket';
import { name, version } from '../package.json';
import Page from '../components/layout/Page';
import withApollo from '../lib/withApollo';
import { DEFAULT_SEO } from '../config';
import { initGA, logPageView } from '../utils/analytics';

LogRocket.init(process.env.LOGROCKET);

class MyApp extends App {
  constructor(...args) {
    super(...args);
    Sentry.init({
      dsn: process.env.SENTRY_PUBLIC_DSN,
      release: `${name}@${version}`,
    });
  }

  componentDidCatch(error, errorInfo) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });

    Sentry.configureScope(scope => {
      scope.addEventProcessor(async event => {
        event.extra.sessionURL = LogRocket.sessionURL;
        return event;
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development/production
    super.componentDidCatch(error, errorInfo);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on(`routeChangeComplete`, logPageView);
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <NextSEO config={DEFAULT_SEO} />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
