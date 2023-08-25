const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, won't be added

console.log(mySet.has(1)); // true
console.log(mySet.size); // 2

mySet.delete(2); // Remove an element
