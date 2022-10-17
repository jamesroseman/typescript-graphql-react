import 'reflect-metadata';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

import FindMaxResolver from '../resolvers/FindMaxResolver';

export default async function createSchema(): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: [
      FindMaxResolver,
    ],
  });
}
