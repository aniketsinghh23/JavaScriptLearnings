// A for loop repeats code a set number of times.
// It is useful when you know how many times you want something to run.

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// You can also use a for loop to go through every item in an array.
let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log("Color at index " + i + ":", colors[i]);
}
