/**Q1. write a JS program to delete all the occurrences of elements 'num' in
      a given array. Example : if arr=[1,2,3,4,5,6,2,3] & num=2
      Resultshouldbearr=[1,3,4,5,6,3]. */

let arr = [1, 3, 4, 2, 5, 6, 3, 7, 1, 2, 3, 8, 4, 5, 3, 9, 64, 15];
let num = prompt(
  "Enter the elements which you want to remove from occurrences"
);
let count = "";
let i = 0,
  m = 0;
for (let i = 0; i < arr.length; i++) {
  if (num == arr[i]) {
    arr.splice(i, 1);
    count = count + i + " & ";
  }
  if (i == arr.lenght - 1) {
    m = arr.lenght - 1;
  }
}
console.log(arr);
console.log(count.length);
console.log(typeof count);
// console.log(`the element ${num} was present at ${count}`);
count = count.trim;
count = count.slice(0, 17); // Remove the last "&" character
console.log(`The element ${num} was present at ${count}`);

// let arr = [1, 3, 4, 2, 5, 3, 6, 7, 1, 2, 8, 4, 5, 9, 64, 15];

// let num = Number(
//   prompt("Enter the elements which you want to remove from occurrences")
// );

// let count = [];

// for (let i = 0; i < arr.length; i++) {
//   if (num === arr[i]) {
//     arr.splice(i, 1);
//     count.push(i);
//     i--;
//   }
// }

// console.log(arr);

// if (count.length > 0) {
//   console.log(`The element ${num} was present at ${count.join(" & ")}`);
// } else {
//   console.log(`The element ${num} was not found in the array`);
// }
