import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground, Context } from 'apollo-server-core';

import createSchema from '../../api/server/createSchema';

const server = new ApolloServer({
  schema: createSchema(),
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground,
  ],
});

export const handler = (event: any, context: any, callback: any) => {
  const serverHandler = server.createHandler();
  return serverHandler(
    {
      ...event,
      requestContext: event.requestContext || {},
    },
    context,
    callback,
  );
};
