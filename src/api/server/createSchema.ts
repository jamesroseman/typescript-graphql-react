import 'reflect-metadata';
import { GraphQLSchema } from 'graphql';
import { buildSchemaSync } from 'type-graphql';

import FindMaxResolver from '../resolvers/FindMaxResolver';

/**
 * Generates a GraphQL schema.
 */
export default function createSchema(): GraphQLSchema {
  return buildSchemaSync({
    resolvers: [
      FindMaxResolver,
    ],
  });
}
