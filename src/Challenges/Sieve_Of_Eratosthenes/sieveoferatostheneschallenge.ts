// Sieve of Eratothenes algorithm for finding prime numbers.
// sieve provides a set of steps for finding all prime numbers up to a given limit.

// prime number is a positive number with no divisors but 1 and itself. 2, 3, 11, and 443 are all prime numbers.
// sieve assumes {2,...,n} are prime, and then successively marking them as NOT prime.

const sieveArray: number[] = [...Array(999).keys()].map((key) => key + 2);

type FindPrimes = (arrayNums: number[]) => number[];

type FindMultiples = (arrayNums: number[], primes?: number[]) => number[];
// n log n solution
const findPrimes: FindPrimes = (arrayNums) => {
  const findMultiples: FindMultiples = (arr, primes = []) => {
    if (arr.length === 0) return primes;
    const numToEval = arr[0];
    primes.push(numToEval);
    arr = arr.filter((num) => {
      // console.log(arr.length)
      return num % numToEval !== 0;
    });
    return findMultiples(arr, primes);
  };
  return findMultiples(arrayNums);
};
// const res = findPrimes(sieveArray);
// console.log(res.length);

const findPrimesWhileLoop: FindPrimes = (arrayNums) => {
  let primes: number[] = [];
  while (true) {
    const currentNum = arrayNums[0];
    if (currentNum === undefined) break;
    primes.push(currentNum);
    arrayNums = arrayNums.filter((num) => {
      return num % currentNum !== 0;
    });
  }

  return primes;
};
const res = findPrimesWhileLoop(sieveArray);
console.log(res.length);
