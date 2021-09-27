const merge = (leftArray: number[], rightArray: number[]) => {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  console.log(leftArray);
  console.log(rightArray);
  return [...sortedArray, ...leftArray, ...rightArray];
};

const mergeSort = (startArray: number[]): number[] => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const inputArr = [3, 2, 1];

console.log(mergeSort(inputArr));
