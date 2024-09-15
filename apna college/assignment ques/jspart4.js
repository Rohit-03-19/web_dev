/**Q1. write a JS program to delete all the occurrences of elements 'num' in
a given array. Example : if arr=[1,2,3,4,5,6,2,3] & num=2
Resultshouldbearr=[1,3,4,5,6,3]. */

// let arr = [1, 3, 4, 2, 5, 6, 3, 7, 1, 2, 3, 8, 4, 5, 3, 9, 64, 15];

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

/** Write a JS program to find the no of digits in a number.
 * Example : if number= 287152 , digits=6.
 */

// let number = prompt("Enter the numebr. ");
// let digits = 0;
// let original = number;
// while (original > 0) {
//   digits += 1;
//   original = Math.floor(original / 10);
// }
// console.log(`The number of digits in ${number} is ${digits}`);

/**Q3. Write a JS program to find the sum of the digits of the given Number  */

// let number = prompt("Enter the numebr. ");
// let sum = 0;
// let original = number;
// while (original > 0) {
//   sum += original % 10;
//   original = Math.floor(original / 10);
// }
// console.log(`The sum of the digits in ${number} is ${sum}`);

/**Q4. Write the factorial for a number n. */

// let n = prompt("Enter the number for which you want factorial.");
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(`the factorial of the given ${n} is ${fact}`);

/**Q5. Find the largest number in an array with only positive numbers.*/
let arr = [1, 3, 4, 2, 5, 6, 3, 7, 1, 2, 3, 8, 4, 5, 3, 9, 64, 15];
let max = 0;
for (let i = 0; i <= arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(`${max} is the greatest number present.`);
