import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { endpoint } from '../config';

const cache = new InMemoryCache();

if (process.browser) {
  persistCache({
    cache,
    storage: window.localStorage,
  });
}

function createClient({ headers }) {
  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'omit',
        },
        headers,
      });
    },
    cache,
  });

  client.defaultOptions = {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
  };

  return client;
}

export default withApollo(createClient);
