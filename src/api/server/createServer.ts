import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import express, { Express } from 'express';

import createSchema from './createSchema';

export type APIServer = {
  server: ApolloServer<ExpressContext>;
  app: Express;
}

/**
 * Generates and starts an ApolloServer used for serving GraphQL requests.
 */
export default async function createServer(): Promise<APIServer> {
  const app = express();
  const schema = createSchema();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });
  await apolloServer.start();
  await apolloServer.applyMiddleware({ app, path: '/' });
  return {
    server: apolloServer,
    app,
  };
}
