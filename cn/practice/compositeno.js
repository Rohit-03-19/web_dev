// Problem statement
// Write a javascript program to check if a number is composite or not. A composite number is a natural number or a positive integer that has more than two factors.

// Expected Input
// 20
// Expected Output
// true
// Expected Input
// 13
// Expected Output
// false
// Test cases
// a-If the number is composite store true in the answer
// b-If the number is not composite store false in the answer

function Composite(number) {
  let answer;
  //Write your code here
  let factors = 0;
  for (i = 2; i <= number; i++) {
    if (number % i == 0) {
      factors += 1;
    }
  }
  if (factors > 2) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
