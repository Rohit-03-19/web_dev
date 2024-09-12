// Problem statement
// Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.

// Note

// Use Math.floor when dividing the number by 10 to ensure that it returns data type number.
// Expected Input
// num1 = 78574
// num2 = 78392
// Expected Output
// true
// Expected Input
// num1 = 74847
// num2 = 781
// Expected Output
// false
// Test Cases
// Make a function named commonDigits
// Take two numbers as arguments
// Count the number of digits in both the numbers
// Check if both the numbers have equal numbers of digits
// If they are equal return true else return false

function commonDigits(num1, num2) {
  let n = 0;
  let m = 0;
  let answer;
  while (num1 != 0) {
    num1 /= 10;
    n += 1;
  }
  while (num2 != 0) {
    num2 /= 10;
    m += 1;
  }
  if (n == m) {
    console.log("true");
  } else {
    console.log("false");
  }
}

commonDigits(74847, 78155);
