// Objects store related data as key and value pairs.
// They are good for describing one thing with multiple details.

let student = {
  name: "Riya",
  age: 18,
  course: "JavaScript",
};

// Dot notation lets you read one property at a time.
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student course:", student.course);

// You can add new properties after the object is created.
student.city = "Delhi";
console.log("Updated student:", student);
