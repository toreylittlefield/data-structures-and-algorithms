const memofibonacci = () => {
  const memo: { [key: string]: number } = {};
  return function fibonacci(n: number) {
    if (n <= 1) {
      return n;
    }
    if (n in memo) return memo[n];
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

    return memo[n];
  };
};

// Test your code with calls here:
const fibo = memofibonacci();
fibo(20);
