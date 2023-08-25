function findLongestIncreasingSubsequence(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  const lisLengths = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lisLengths[i] = Math.max(lisLengths[i], lisLengths[j] + 1);
      }
    }
  }

  return Math.max(...lisLengths);
}

// Example usage:
const nums = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const longestIncreasingSubsequenceLength =
  findLongestIncreasingSubsequence(nums);
console.log(longestIncreasingSubsequenceLength); // Output: 6 (The LIS is [10, 22, 33, 50, 60, 80])
