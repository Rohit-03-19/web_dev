/** Filter
 * this function gives us new array. this function basically adds element in new array if and only if they pass the given condition in the arrow function.
 * look at the given example.
 */

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
  el % 2 == 0;
});

/** So by applying this filter only even numbers will be added in the ans array. */

/** Every function.
 * It returns true if every element of array gives true for some function. Else returns false.
 * written as  arr.every(some function definition or name);
 * example is given below.
 */

[1, 2, 3, 4, 5].every((el) => el % 2 == 0);
// this will give false because each element in the above given array is not divisible by 2.

[2, 4, 6, 8, 10].every((ele) => ele % 2 == 0);
// this will give true because each and every element is divisible by 2 and all are even number.

/** Some function.
 * this is basically same as every function but also works as or operator .
 * written as arr.some( some function definition or name);
 * lets understand with a help of an example.
 */

[1, 2, 3, 4, 5].some((ele) => ele % 2 == 0);
//this will give true because from the given five element in the array two are passing this given function. so it gives us true.

[1, 3].some((ele) => ele % 2 == 0);
//now this gives us false because as mentiioned some function works as or operator so if all the cases failed it gives us false. because there is not a single even number in the given array.

/** Reduce function.
 * This function reduces the array to a single value.
 * it gives the final value according to the given logic.
 * written as  arr.reduce( reducer function with 2 variables for (accumulator, element));
 * basically what happens is that first element comes in the element variable and the return value gets stored in the accumulator.
 * now when the function runs second time the second element comes in the element var. and it runs the reducer function with the stored value in accumulator var.
 * now the value that is returned from this callback is again stored in the accumulator var. and the procss goes on till the last element is done with the reducer function and the value is returned.
 * lets see it with an example.
 */

let finalvalue = [1, 2, 3, 4, 5].reduce((res, ele) => res + ele);
//here the output will be 15.

/**Finding maximum in an array using the Reduce function in the array.
 * see the below given example
 */

//this is done with normal method
let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = -1;
// for (let i in arr) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

//now doing with reduce function.

let max = arr.reduce((max, ele) => {
  if (max < ele) {
    return ele;
  } else {
    return max;
  }
});

console.log(max);

/** Destructuring . It means storing values of arrays into multiple variables.
 */

let names = ["tony", "bruce", "peter", "steve"];
let [winner, runnerup, secondrunnerup] = names;
console.log(winner); //tony
console.log(runnerup); //bruce
console.log(secondrunnerup); //peter
