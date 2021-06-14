import { isNumber } from 'lodash';
import { RESULT_NEGATIVE, RESULT_NO_ARR, RESULT_POSITIVE } from './constants';

export const checkIfLastElementReached = (
  arr: number[],
  indexOfLastItem: number,
  itemIndex: number,
  item?: number
): boolean => {
  if (item === undefined || !isNumber(itemIndex)) {
    return false;
  }

  if (item === 0 && itemIndex !== indexOfLastItem) {
    return false;
  }

  const highestPossibleIndex = item + itemIndex;
  if (highestPossibleIndex >= indexOfLastItem) {
    return true;
  }

  return checkIfLastElementReached(
    arr,
    indexOfLastItem,
    highestPossibleIndex,
    arr[highestPossibleIndex]
  );
};

export const calculateResult = (mainArr: number[]) => {
  const indexOfLastItem = mainArr.length - 1;

  const result = checkIfLastElementReached(
    mainArr,
    indexOfLastItem,
    0,
    mainArr[0]
  );
  return result;
};

export const getResultMessage = (mainArr: number[], isWinnable: boolean) => {
  if (mainArr.length === 0) {
    return RESULT_NO_ARR;
  }
  if (isWinnable) {
    return RESULT_POSITIVE;
  }
  if (!isWinnable) {
    return RESULT_NEGATIVE;
  }
};
