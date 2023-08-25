const myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");

console.log(myMap.get("key1")); // "value1"
console.log(myMap.has("key2")); // true

myMap.delete("key1");
