type BinarySearch = (arr: number[], target: number) => number | null;

const binarySearch: BinarySearch = (arr, target) => {
  // Add left and right variables below
  let left = 0;
  let right = arr.length;
  // Add indexToCheck calculation below
  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(`indexToCheck equals: ${indexToCheck} and checking value equals: ${checking}`);

    if (checking === target) {
      return indexToCheck;
    }
    if (target > checking) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;

console.log(binarySearch(searchable, target));
