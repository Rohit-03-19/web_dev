/**Q1. Write a javascript function that returns an array elements larger than a number. */

// let arr = [12, 23, 15, 46, 35, 15, 75, 84, 64, 29, 81, 60, 47];
// function greaterNo(array) {
//   let num = prompt("enter the number");
//   let greater = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > num) {
//       greater.push(arr[i]);
//     }
//   }
//   console.log(`${greater.join(" ")}`);
// }
// greaterNo(arr);

/**2. Write a Javascript function to extract unique characters from a string. Example : str = “abcdabcdefgggh” ans=“abcdefgh” */

let str = "abcdabcdefgggh";

function getUnique(string) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = string[i];
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}

console.log(getUnique(str));
