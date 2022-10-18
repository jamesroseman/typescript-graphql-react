import {
  ArgsType, Field, ObjectType,
} from 'type-graphql';

@ArgsType()
export class FindMaxResolverArgs {
  constructor() {
    this.nums = [];
  }

  @Field(() => [Number])
    nums: number[];
}

@ObjectType()
export class FindMaxResolverResponse {
  constructor() {
    this.max = Number.MIN_VALUE;
  }

  @Field(() => Number)
    max: number;
}
