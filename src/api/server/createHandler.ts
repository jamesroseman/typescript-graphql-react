import { ApolloServer } from 'apollo-server-cloud-functions';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import createSchema from './createSchema';

/**
 * Generates a handler for an ApolloServer instance, used primarily for Google Cloud serverless hosting.
 */
export default function createHandler() {
  const schema = createSchema();
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    introspection: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  return server.createHandler();
}
