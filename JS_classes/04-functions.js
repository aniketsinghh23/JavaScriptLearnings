// Functions are reusable blocks of code.
// Instead of writing the same logic again, you can call the function whenever needed.

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function with different values.
greet("Aman");
greet("Sara");

// Functions can also return a result back to the caller.
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum:", result);
