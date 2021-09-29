// Sieve of Eratothenes algorithm for finding prime numbers.
// sieve provides a set of steps for finding all prime numbers up to a given limit.

// prime number is a positive number with no divisors but 1 and itself. 2, 3, 11, and 443 are all prime numbers.
// sieve assumes {2,...,n} are prime, and then successively marking them as NOT prime.

const sieveArray = [...Array(99).keys()].map((key) => key + 2);
