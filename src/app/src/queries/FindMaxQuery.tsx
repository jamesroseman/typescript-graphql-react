import { QueryResult } from 'react-apollo';
import gql from 'graphql-tag';

import { FindMaxResolverResponse } from '../types/api/FindMaxResolverTypes';

export type FindMaxQueryResponse = {
  data: {
    findMax: FindMaxResolverResponse;
  },
} & QueryResult;

export const FindMaxQuery = gql`
  query FindMax($numbers: [Float!]!) {
    findMax(nums: $numbers) {
      max
    }
  }
`;
