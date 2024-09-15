/**Q1. write a JS program to delete all the occurrences of elements 'num' in
      a given array. Example : if arr=[1,2,3,4,5,6,2,3] & num=2
      Resultshouldbearr=[1,3,4,5,6,3]. */

let arr = [1, 3, 4, 2, 5, 6, 3, 7, 1, 2, 3, 8, 4, 5, 3, 9, 64, 15];
let num = prompt(
  "Enter the elements which you want to remove from occurrences"
);
let count = "";

for (let i = 0; i < arr.length; i++) {
  if (num == arr[i]) {
    arr.splice(i, 1);
    count = count + i + " & ";
  }
}
console.log(arr);
// console.log(`the element ${num} was present at ${count}`);
if (count !== "") {
  count = count.slice(0, -1); // Remove the last "&" character
  console.log(`The element ${num} was present at ${count}`);
} else {
  console.log(`The element ${num} was not found in the array`);
}
