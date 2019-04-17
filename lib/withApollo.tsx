import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { GRAPHQL_ENDPOINT } from '../config'

export default withApollo(({ initialState }) => (
  new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache().restore(initialState || {})
  })
));