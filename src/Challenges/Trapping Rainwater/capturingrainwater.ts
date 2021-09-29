/**
 * A common interview question involving arrays is the “capturing rainwater” 
 * problem (also referred to as the “trapping rainwater” problem).

 * The Problem
 * Imagine a very heavy rainstorm over a highway that has many potholes and cracks. 
 * The rainwater will collect in the empty spaces in the road, creating puddles. 
 * Each puddle can only be as high as the road around it, as any excess water will just flow away.
 * 
 * The capturing rainwater problem asks you to calculate how much rainwater would be trapped in the empty spaces in a histogram 
 * (a chart which consists of a series of bars). Consider the following histogram (array) : [4, 2, 1, 3, 0, 1, 2].
 * Like with the road, the amount of water that can be captured at any given space cannot be higher than the bounds around it. 
 * To solve the problem, we need to write a function that will take in an array of integers and calculate the total water captured. 
 * Our function would return 6 for the histogram above
 */
// const testArray: number[] = [4, 2, 1, 3, 0, 1, 2];
const testArray: number[] = [0, 0, 45, 2, 3, 45, 5, 1];

type FindHeight = (array: number[]) => number;

const findHeights: FindHeight = (heights) => {
  console.time('start');
  let totalHeights = 0;
  // pointers
  let leftPointer: number = 0;
  let leftValue: number = 0;
  let rightPointer: number = 0;
  let rightValue: number = 0;
  // stack
  let stack: number[] = [];

  // util functions
  const isStackEmpty = () => stack.length === 0;
  const getMaxHeight = (leftValue: number, rightValue: number) => Math.min(leftValue, rightValue);

  let curHeight: number = heights[leftPointer];

  const initStack = () => {
    // find first number > 0 to initialize pointers and stack
    while (isStackEmpty()) {
      if (curHeight > 0) {
        stack.push(leftPointer);
        leftValue = heights[leftPointer];
        break;
      }
      // reassign / move pointers
      leftPointer += 1;
      rightPointer = leftPointer;
      curHeight = heights[leftPointer];
    }
  };

  while (rightPointer < heights.length - 1) {
    if (isStackEmpty()) {
      initStack();
    }
    rightPointer += 1;
    const curVal = heights[rightPointer];
    const nextVal = heights[rightPointer + 1];
    // if rightpointer is great then or equal to leftPointer value then pop stack and move left and right pointer
    if (leftValue <= curVal && stack.length === 1) {
      // keeping searching
      stack.pop();
      leftPointer += 1;
      leftValue = curVal;
    } else if ((curVal >= nextVal && stack.length > 1) || nextVal === undefined) {
      // evaluate the heights in the window (bounds/range)
      stack.push(rightPointer);
      rightValue = curVal;
      const minToCompare = getMaxHeight(leftValue, rightValue);
      const sum = stack.reduce((acc: number, cur: number) => {
        if (heights[cur] < minToCompare) {
          const diff = minToCompare - heights[cur];
          acc += diff;
        }
        return acc;
      }, 0);
      // add the sum & reset stack, move the left pointer
      totalHeights += sum;
      stack = [];
      leftPointer = rightPointer;
      leftValue = heights[leftPointer];
      // evaluate heights
    } else if (leftValue > curVal) {
      stack.push(rightPointer);
    }
  }
  console.timeEnd('start');

  return totalHeights;
};
console.log(findHeights(testArray));
