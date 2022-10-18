import ApolloClient from 'apollo-boost';

// Construct a URI for the GraphQL API from the environment.
const apiUrl: string | undefined = process.env.REACT_APP_GRAPHQL_API_URL;
if (apiUrl === undefined) {
  throw new Error('Cannot find GraphQL API url [ REACT_APP_GRAPHQL_API_URL ] in env.');
}
const apiPortStr: string | undefined = process.env.REACT_APP_GRAPHQL_API_PORT;
if (apiPortStr === undefined) {
  throw new Error('Cannot find GraphQL API port [ REACT_APP_GRAPHQL_API_PORT ] in env.');
}
const apiPort: number = parseInt(apiPortStr);
if (Number.isNaN(apiPort)) {
  throw new Error('Provided GraphQL API port not a number [ REACT_APP_GRAPHQL_API_PORT ].');
}
console.log(apiPortStr, parseInt(apiPortStr), Number.isNaN(apiPortStr));
const uri: string = !apiUrl.startsWith('http') ? `http://${apiUrl}:${apiPort}` : `${apiUrl}`;

console.log(`[x] Connected to GraphQL API at: ${uri}`);

// Disable caching of responses
// https://github.com/apollographql/apollo-client/issues/3234
// apollo-boost clients don't include defaultOptions
// https://github.com/apollographql/apollo-client/issues/3900
const client = new ApolloClient({ uri });

export default client;