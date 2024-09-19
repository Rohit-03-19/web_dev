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
