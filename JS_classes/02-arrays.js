// Arrays are lists that can hold many values in one variable.
// They are useful when you want to work with a group of items.

let fruits = ["Apple", "Banana", "Mango"];

// Arrays start at index 0, so [0] means the first item.
console.log("First fruit:", fruits[0]);
console.log("All fruits:", fruits);

// push() adds a new item to the end of the array.
fruits.push("Orange");
console.log("After adding one fruit:", fruits);

// length tells you how many items are in the array.
console.log("Last fruit:", fruits[fruits.length - 1]);
