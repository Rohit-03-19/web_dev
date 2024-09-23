/** Filter
 * this function gives us new array. this function basically adds element in new array if and only if they pass the given condition in the arrow function.
 * look at the given example.
 */

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
  el % 2 == 0;
});

/** So by applying this filter only even numbers will be added in the ans array. */
