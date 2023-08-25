function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return str === str.split("").reverse().join("");
}

// Example usage:
const string1 = "racecar";
console.log(isPalindrome(string1)); // true

const string2 = "hello";
console.log(isPalindrome(string2)); // false
