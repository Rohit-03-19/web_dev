const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritk", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

// function addStudent (batch, student) {
//     batch.push(student);
//     console.log(batch);
// }

// addStudent(aprilBatch,'Ritu');
// addStudent(mayBatch,'Sunny');

// Using Rest...

function addStudent(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addStudent(aprilBatch, "Sunny", "Ritu", "Jaron", "Mohit");

// Spread ...
// it expands or copy the array.

const newBatch = [...mayBatch];
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

// Concatenate

const mergeBatch = [...mayBatch, ...juneBatch];

console.log(mergeBatch);
