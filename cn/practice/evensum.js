/** To Calculate the sum of even numbers */

let result = 0;
let sum = 0;
let limit = prompt("enter the number till you which the sum ");

for (let i = 0; i <= limit; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    result = sum;
  }
}

console.log("sum is " + result);
