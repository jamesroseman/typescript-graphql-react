import {
  Args, Query, Resolver,
} from 'type-graphql';

import BasicMath from '../../shared/interfaces/BasicMathInterface';
import { FindMaxResolverArgs, FindMaxResolverResponse } from '../../shared/types/api/FindMaxResolverTypes';

interface IFindMaxResolver {
  findMax(args: FindMaxResolverArgs): FindMaxResolverResponse,
}

@Resolver()
export default class FindMaxResolver implements IFindMaxResolver {
  @Query(() => FindMaxResolverResponse)
  findMax(@Args() {
    nums,
  }: FindMaxResolverArgs): FindMaxResolverResponse {
    const basicMath: BasicMath = new BasicMath();
    const max: number = basicMath.findMax(nums);
    return { max };
  }
}
