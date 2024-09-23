// Problem statement
// You have been given a string your task is to reverse and return the updated string
// Note
// Make the changes in the existing string you should not create a new string for storing the reverse of the string
// Expected Input
// "Hello"
// Expected Output
// "olleH"
// Test Cases
// Find the reverse of the given string
// Return the updated string

function reverseString(str) {
  //Implement Your function here
  let arr = [];
  for (let i of str) {
    arr.push(i);
  }
  str = "";
  arr = arr.reverse();
  for (let i of arr) {
    str += i;
  }
  return str;
}
console.log(reverseString("Hello"));
//Output : "olleH"
const hello = "hello";
console.log(hello.reverse);
