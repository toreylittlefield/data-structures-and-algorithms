const swap = (arr: number[], indexOne: number, indexTwo: number) => {
  const temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
  return arr;
};

const bubbleSort = (input: number[]) => {
  let index = 0;
  let swapped = 0;
  let lastSwapped = 0;
  console.log(input);
  while (true) {
    const curVal = input[index];
    const nextVal = input[index + 1];
    if (curVal > nextVal) {
      swapped += 1;
      swap(input, index, index + 1);
    }
    index++;
    if (index === input.length) {
      if (lastSwapped === swapped) break;
      index = 0;
      lastSwapped = swapped;
    }
  }
  return input;
};
const array = [3, 2, 1];
console.log(bubbleSort(array));
