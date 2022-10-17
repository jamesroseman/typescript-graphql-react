import {
  Args, ArgsType, Field, ObjectType, Query, Resolver,
} from 'type-graphql';

import BasicMath from '../../interfaces/BasicMathInterface';

@ArgsType()
export class FindMaxResolverArgs {
  @Field(() => [Number])
    nums: number[];
}

@ObjectType()
export class FindMaxResolverResponse {
  @Field(() => Number)
    max: number;
}

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
