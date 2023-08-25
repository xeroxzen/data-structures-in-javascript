function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index where the target is found
    }
  }
  return -1; // Return -1 if the target is not found in the array
}

// Example usage:
const array = [2, 4, 6, 8, 10];
const target = 6;
const result = linearSearch(array, target);
console.log(`Linear Search: Target ${target} found at index ${result}`);
