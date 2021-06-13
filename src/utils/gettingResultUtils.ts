import { isNumber } from 'lodash';
import { RESULT_NEGATIVE, RESULT_NO_ARR, RESULT_POSITIVE } from './constants';

export const checkIfLastElement = (
  arr: number[],
  indexOfLastItem: number,
  itemIndex: number,
  item?: number
): boolean => {
  if (!item || !isNumber(itemIndex)) {
    return false;
  }

  const highestPossibleIndex = item + itemIndex;
  if (item === 0 && itemIndex !== indexOfLastItem) {
    return false;
  }

  if (highestPossibleIndex >= indexOfLastItem) {
    return true;
  }

  return checkIfLastElement(
    arr,
    indexOfLastItem,
    arr[highestPossibleIndex],
    highestPossibleIndex
  );
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
