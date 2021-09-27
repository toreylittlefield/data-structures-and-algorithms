let numbers = [];
const ARRAY_SIZE = 1000;

const randomize = () => Math.ceil((Math.random() * ARRAY_SIZE) / 2);

for (let i = 0; i < ARRAY_SIZE; i++) {
  numbers.push(randomize());
}

const swapItems = (arr: number[], indexOne: number, indexTwo: number) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const quicksort = (array: number[], leftBound: number = 0, rightBound: number = array.length - 1) => {
  if (rightBound > leftBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
};

const partition = (array: number[], leftIndex: number, rightIndex: number) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swapItems(array, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }
  return leftIndex;
};

console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers);
console.log('After  quicksort:', sorted);
