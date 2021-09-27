// iterative example of a factorial function
const iterativeFactorial = (n: number) => {
  let result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

// recursive example of a factorial function
const recursiveFactorial = (n: number): number => {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  if (n > 0) {
    console.log(`Execution context: ${n}`);
    return n * recursiveFactorial(n - 1);
  }
  return n;
};

const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);
