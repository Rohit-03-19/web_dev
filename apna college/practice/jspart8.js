/**Q1. Check if all numbers in our array are multiples of 10 or not.
 * for this question we will be using every method.
 */

let array = [10, 20, 50, 60, 480, 350, 12590];
let ans = array.every((ele) => ele % 10 == 0);
console.log(ans);

/**Q2. Create a function to find the min number in an array.
 */

let min = array.reduce((min, ele) => {
  if (min < ele) {
    return min;
  } else {
    return ele;
  }
});
console.log(min);
