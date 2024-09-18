/**Q1. Write an arrow function named arrayAverage that accepts an array of numbers and reutrns the average of those numbers. */

const arrayAverage = (array) => {
  let sum = 0,
    avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    console.log(array[i]);
  }
  avg = sum / array.length;
  console.log(sum);
  console.log(array.length);
  return avg;
};

let arr = [10, 26, 35, 15, 42, 94, 78, 96, 53];
console.log(arrayAverage(arr));

/**Q2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not. */
