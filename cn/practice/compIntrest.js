// Problem statement
// Create a Compound Interest program that calculates the total amount accumulated after a certain period based on the following attributes:

// a. principalAmount: The principal value deposited

// b. annualInterestRate: Interest rate per year

// c.  numberOfYears: Period for which interest has to be given.
// Note
// Do not use toFixed or round off the answer.
// You need to use the for loop approach for this question.
// Sample Input
// principalAmount : 500$
// annualInterestRate : 0.08 (8% converted to decimal value)
// numberOfYears : 5
// Sample Output
// 734.66
// Test Cases
//  a- You must calculate the total amount accumulated based on the given attributes.
//  b- Store the final amount in the "answer" variable.

function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;
  //Write your code here
  // answer=parseFloat(principalAmount * Math.pow((1 + annualInterestRate), numberOfYears));
  let year = 1;
  answer = principalAmount;
  while (year <= numberOfYears) {
    let interest = answer * annualInterestRate;
    answer += interest;
    year++;
  }
  return answer;
}
