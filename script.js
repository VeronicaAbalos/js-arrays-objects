let output = document.getElementById("output");

/* ========================= */
/* STEP 2: ARRAYS */
/* ========================= */

let fruits = ["Apple", "Banana", "Mango"];

output.innerHTML += "<h3>Original Array:</h3>" + fruits + "<br>";


fruits.push("Orange");
output.innerHTML += "After push: " + fruits + "<br>";

fruits.pop();
output.innerHTML += "After pop: " + fruits + "<br>";

fruits.shift();
output.innerHTML += "After shift: " + fruits + "<br>";

fruits.unshift("Grapes");
output.innerHTML += "After unshift: " + fruits + "<br>";

output.innerHTML += "Array length: " + fruits.length + "<br><br>";


/* ========================= */
/* STEP 3: OBJECTS */
/* ========================= */

let person = {
    name: "John",
    age: 20,
    city: "New York"
};

output.innerHTML += "<h3>Object:</h3>";
output.innerHTML += "Name: " + person.name + "<br>";

// modify using dot notation
person.age = 25;

// modify using bracket notation
person["city"] = "Los Angeles";

output.innerHTML += "Updated Age: " + person.age + "<br>";
output.innerHTML += "Updated City: " + person.city + "<br><br>";


/* ========================= */
/* STEP 4: BUILT-IN METHODS */
/* ========================= */

let numbers = [1, 2, 3, 4, 5];

// forEach
output.innerHTML += "<h3>forEach:</h3>";
numbers.forEach(num => {
    output.innerHTML += num + " ";
});
output.innerHTML += "<br>";

// map
let doubled = numbers.map(num => num * 2);
output.innerHTML += "Mapped (x2): " + doubled + "<br>";

// filter
let filtered = numbers.filter(num => num > 2);
output.innerHTML += "Filtered (>2): " + filtered + "<br><br>";



/* ========================= */
/* STEP 4.2: ARRAY OF OBJECTS */
/* ========================= */

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 }
];

output.innerHTML += "<h3>Students:</h3>";

students.forEach(student => {
    output.innerHTML += student.name + " - " + student.grade + "<br>";
});

let topStudents = students.filter(s => s.grade > 80);

output.innerHTML += "<br>Top Students (>80):<br>";
topStudents.forEach(s => {
    output.innerHTML += s.name + "<br>";
});