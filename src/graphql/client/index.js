import {ApolloClient, InMemoryCache} from '@apollo/client';

const BACKEND_URL = 'http://192.168.29.141:4000';

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
