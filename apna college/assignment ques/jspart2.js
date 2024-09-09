/** Create a numebr variable num with some value.
 * Now, print "good" if the number is divisble by 10 and print "bad" if t not.
 */
// let num;
// num = prompt("Enter a number");
// if (num % 10 == 0) {
//   console.log("Goood");
// } else {
//   console.log("baad");
// }

/** Take the user's name & age as input using prompts.
 * Then return back the following statement to the user as an alert(by subsituting thier name & age):
 */

// let name, age;
// name = prompt("Enter the name");
// age = prompt("Enter the age");
// console.log(`${name} is ${age} years old.`);

/** Write a switch statement to print the months in a quarter
 * Months in a quarter 1: January, February, March.
 * Months in a quarter 2: April, May, June.
 * Months in a quarter 3: July, August, September.
 * Months in a quarter 4: October, November, December.
 */

let quarter = 2;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Wrong input.");
}
