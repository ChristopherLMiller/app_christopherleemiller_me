import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { GRAPHQL_ENDPOINT } from '../config'

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache().restore(initialState || {})
  })
));