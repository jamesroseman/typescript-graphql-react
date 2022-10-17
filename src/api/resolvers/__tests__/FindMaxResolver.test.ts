import { Express } from 'express';
import { GraphQLResponse } from 'apollo-server-types';
import gql from 'graphql-tag';
import { ApolloServer, ExpressContext } from 'apollo-server-express';

import { FindMaxResolverResponse } from '../FindMaxResolver';
import createServer, { APIServer } from '../../server/createServer';

describe('FindMaxResolver (Unit)', () => {
  let server: ApolloServer<ExpressContext>;
  let app: Express;

  beforeEach(async () => {
    const apiServer: APIServer = await createServer();
    server = apiServer.server;
    app = apiServer.app;
  });

  describe('findMax', () => {
    it('finds the maximum value in a list of numbers', async () => {
      const response: GraphQLResponse = await server.executeOperation({
        query: gql`
          {
            findMax(nums:[4, 8, 15, 16, 23, 42]) {
              max,
            }
          }
        `,
      });
      const { max } = response.data?.findMax as FindMaxResolverResponse;
      expect(max).toBe(42);
    });
  });
});
