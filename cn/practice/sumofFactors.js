// roblem statement
// you have been provided with a number your task is to store the sum of its factors in the variable answer. A factor is a number that divides the given number without any remainder.

// Expected Input
// 6
// Expected Output
// 12
// Explanation
// The factor of 6 is 1,2,3,6 and their sum is 12
// Test Cases
// Find the factors of the given number
// Calculate the sum of factors
// Store the sum in the answer

function sumOfFactorial(num) {
  let answer = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      answer = answer + i;
    }
  }
  return answer;
}
