import { calculateResult } from './gettingResultUtils';

describe('check if the last element can be reached', () => {
  it('should return true when last element can be reached', () => {
    const result = calculateResult([1, 2, 0, 3, 0, 2, 0]);
    expect(result).toBeTruthy();
  });

  it('should return false when last element can not be reached 1', () => {
    const result = calculateResult([1, 0, 10]);
    expect(result).not.toBeTruthy();
  });

  it('should return false when last element can not be reached 2', () => {
    const result = calculateResult([1, 2, 0, 1, 0, 2, 0]);
    expect(result).not.toBeTruthy();
  });

  it('should return false when last element can not be reached 3', () => {
    const result = calculateResult([1, 2, 0, -1, 0, 2, 0]);
    expect(result).not.toBeTruthy();
  });

  it('should return false when negative values smaller then arr length entered', () => {
    const result = calculateResult([1, -12, 0, 3, 0, 2, 0]);
    expect(result).not.toBeTruthy();
  });

  it('should return false when only one negative value entered', () => {
    const result = calculateResult([-2]);
    expect(result).not.toBeTruthy();
  });

  it('should return false when only one positive value entered', () => {
    const result = calculateResult([2]);
    expect(result).toBeTruthy();
  });

  it('should return tre when only two positive values entered', () => {
    const result = calculateResult([1, 3]);
    expect(result).toBeTruthy();
  });
});
