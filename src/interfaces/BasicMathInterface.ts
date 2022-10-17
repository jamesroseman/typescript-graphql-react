interface IBasicMath {
  findMax(nums: number[]): number,
  findMin(nums: number[]): number,
}

/**
 * Interface for basic mathmatical operations.
 */
export default class BasicMath implements IBasicMath {
  
  /**
   * Given a list of numbers, return the highest.
   * @param nums A list of numbers.
   */
  findMax(nums: number[]): number {
    return nums.reduce(
      (currMax: number, curr: number) => currMax > curr ? currMax : curr,
      Number.MIN_VALUE,
    );
  }

  /**
   * Given a list of numbers, return the smallest.
   * @param nums A list of numbers.
   */
  findMin(nums: number[]): number {
    return nums.reduce(
      (currMin: number, curr: number) => currMin < curr ? currMin : curr,
      Number.MAX_VALUE,
    );
  }
}