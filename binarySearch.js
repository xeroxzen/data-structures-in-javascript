function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index where the target is found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Return -1 if the target is not found in the array
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10];
const targetValue = 6;
const resultIndex = binarySearch(sortedArray, targetValue);
console.log(
  `Binary Search: Target ${targetValue} found at index ${resultIndex}`
);
