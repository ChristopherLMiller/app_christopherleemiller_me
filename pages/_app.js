import App, { Container } from 'next/app';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import NextSEO from 'next-seo';
import { name, version } from '../package.json';
import Page from '../components/layout/Page';
import withData from '../lib/withData';
import { SENTRY_PUBLIC_DSN, DEFAULT_SEO } from '../config';

class MyApp extends App {
  constructor(...args) {
    super(...args);
    Sentry.init({
      dsn: SENTRY_PUBLIC_DSN,
      release: `${name}@${version}`,
    });
  }

  componentDidCatch(error, errorInfo) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
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

export default withData(MyApp);
