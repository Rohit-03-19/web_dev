/**Q1. Write a javascript function that returns an array elements larger than a number. */

let arr = [12, 23, 15, 46, 35, 15, 75, 84, 64, 29, 81, 60, 47];
function greaterNo(array) {
  let num = prompt("enter the number");
  let greater = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > num) {
      greater.push(arr[i]);
    }
  }
  console.log(`${greater.join(" ")}`);
}
greaterNo(arr);
