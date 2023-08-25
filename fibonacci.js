// write a fibonacci sequence using a recursive function
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
console.log(fibonacci(30)); // 832040
console.log(fibonacci(40)); // 102334155
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(60)); // 1548008755920