// find number of ways to climb  the stairs of height k given n[] the order in which the stairs can be climbed
// basically how many ways (permutations) to create the sum of k given an array of numbers

const testHeight = 4;
const testAllowed = [2, 4, 1, 3];

const numberWaysToClimb = (height: number, allowedSteps: number[]) => {
  if (height === 0 || height === 1) return 1;
  let uniqueAllowed: number[] = [...new Set(allowedSteps)];
  let stairs: { [key: string]: number } = {};
  stairs[0] = 1;
  for (let stairIdx = 1; stairIdx < height + 1; stairIdx++) {
    stairs[stairIdx] = 0;
    uniqueAllowed.forEach((allowedCase) => {
      if (allowedCase === 0) return;
      if (stairs[stairIdx - allowedCase]) stairs[stairIdx] += stairs[stairIdx - allowedCase];
    });
  }
  return stairs[height];
};

console.log(numberWaysToClimb(testHeight, testAllowed));
