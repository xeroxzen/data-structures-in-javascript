function fibonacciMemo(n, memo = {}) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Check if the result is already memoized
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Calculate the Fibonacci number and memoize it
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);

  return memo[n];
}

// Example usage:
console.log(fibonacciMemo(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacciMemo(10)); // Output: 55 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
console.log(fibonacciMemo(30)); // 832040
console.log(fibonacciMemo(40)); // 102334155
console.log(fibonacciMemo(50)); // 12586269025
console.log(fibonacciMemo(60)); // 1548008755920
