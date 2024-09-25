/** Execution context.
 * it is divided into two segments.
 * first is known as memory allocation.
 * second is knows as code execution.
 */

// console.log(`username: ${username}`);
// console.log(`userage: ${userage}`);

// greetUser(username);

// var username = "Tom";
// var userage = 10;
// console.log(`username: ${username}`);
// console.log(`userage: ${userage}`);

// function greetUser(name) {
//   var greet = "I hope you are doing fine.";
//   console.log(`hello ${name}, ${greet}`);
//   var currentYear = 2024;
//   const year = currentYear - userage;
//   return `Your birth year is ${year}`;
// }
// var birthYear = greetUser(username);
// console.log(birthYear);

var userName = "Tom";
var userAge = 10;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name) {
  console.log(`*****************************`);
  var greet = "I hope you are doing fine.";
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = birthYear(currentYear, userAge);
  console.log(`*****************************`);
  return `Your birth year is ${year}`;
}

function birthYear(year, age) {
  console.log("Calculating the birth year");
  return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);
