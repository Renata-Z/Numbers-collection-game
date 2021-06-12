export const checkIfLastElement = (
  arr: number[],
  indexOfLastItem: number,
  item?: number,
  itemIndex?: number
): boolean => {
  if (!item || !itemIndex) {
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
