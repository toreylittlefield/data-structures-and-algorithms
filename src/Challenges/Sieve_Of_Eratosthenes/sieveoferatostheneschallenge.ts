// Sieve of Eratothenes algorithm for finding prime numbers.
// sieve provides a set of steps for finding all prime numbers up to a given limit.

// prime number is a positive number with no divisors but 1 and itself. 2, 3, 11, and 443 are all prime numbers.
// sieve assumes {2,...,n} are prime, and then successively marking them as NOT prime.

const sievebooleanArray: number[] = [...Array(999).keys()].map((key) => key + 2);

type FindPrimes = (booleanArrayNums: number[]) => number[];

type FindMultiples = (booleanArrayNums: number[], primes?: number[]) => number[];
// n log n solution
const findPrimes: FindPrimes = (booleanArrayNums) => {
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
  return findMultiples(booleanArrayNums);
};
// const res = findPrimes(sievebooleanArray);
// console.log(res.length);

const findPrimesWhileLoop: FindPrimes = (booleanArrayNums) => {
  let primes: number[] = [];
  while (true) {
    const currentNum = booleanArrayNums[0];
    if (currentNum === undefined) break;
    primes.push(currentNum);
    booleanArrayNums = booleanArrayNums.filter((num) => {
      return num % currentNum !== 0;
    });
  }

  return primes;
};
// const res = findPrimesWhileLoop(sievebooleanArray);
// console.log(res.length);

// using booleans solution
const findPrimesBoolean = (limit: number) => {
  const booleanArray: boolean[] = [];
  for (let index = 0; index < limit; index++) {
    booleanArray.push(true);
  }
  for (let index = 4; index < limit; index += 2) {
    booleanArray.push(false);
  }
  booleanArray[0] = false;
  booleanArray[1] = false;
  for (let prime = 3; prime < Math.sqrt(limit); prime += 2) {
    const element = booleanArray[prime];
    if (element === true) {
      for (let primeMultiple = prime * prime; primeMultiple <= limit; primeMultiple += prime * 2) {
        booleanArray[primeMultiple] = false;
      }
    }
  }
  const primes: number[] = [2];
  for (let num = 3; num < booleanArray.length; num += 2) {
    const val = booleanArray[num];
    if (val === true) {
      primes.push(num);
    }
  }
  return primes;
};

console.log(findPrimesBoolean(50000000).length);
