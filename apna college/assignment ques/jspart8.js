/**Q1. square and sum the array elements using the arrow function and then find the average of the array. */

let arr = [2, 4, 3, 6, 1, 5, 7, 8, 9, 4, 5];
// let avg = (ele) => {
//   let sum = 0;
//   for (let i of ele) {
//     sum += i ** 2;
//   }
//   let average = sum / ele.length;
//   return average;
// };
// console.log(avg(arr));

/**Q2. Create a new array using the map function whose each element is equal to the original element plus 5. */

let newarray = arr.map((ele) => (ele += 5));

/**Q3. Create a new array whose elemnts are in uppercase of words present in the original array. */

let names = ["tony", "bruce", "peter", "steve"];

/**Q4. Write a funciton called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled. */

/**Q5. Write a function called mergeObjects that accepts two objects and returns a new object which containes all the keys and values of the first object and second object. */
