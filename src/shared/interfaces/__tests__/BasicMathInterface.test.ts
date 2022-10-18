import BasicMath from '../BasicMathInterface';

describe('BasicMathInterface (Unit)', () => {
  let basicMath: BasicMath;

  beforeEach(() => {
    basicMath = new BasicMath();
  });

  describe('findMax', () => {
    it('should correctly find the maximum value in a list of numbers', () => {
      const testNums: number[] = [1, 8589, 39, 10000, 3, 6];
      const expectedMax: number = 10000;
      const actualMax: number = basicMath.findMax(testNums);
      expect(actualMax).toBe(expectedMax);
    });
  });

  describe('findMin', () => {
    it('should correctly find the minimum value in a list of numbers', () => {
      const testNums: number[] = [1, 8589, 39, 10000, 3, 6];
      const expectedMin: number = 1;
      const actualMin: number = basicMath.findMin(testNums);
      expect(actualMin).toBe(expectedMin);
    });
  });
});
