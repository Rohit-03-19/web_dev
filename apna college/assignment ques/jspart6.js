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

// let str = "abcdabcdefgggh";

// function getUnique(string) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = string[i];
//     if (ans.indexOf(currChar) == -1) {
//       ans += currChar;
//     }
//   }
//   return ans;
// }

// console.log(getUnique(str));

/**Q3. Write a Javascript function that accepts a list of country naes as input and returns the longest country name as output.*/

let country = ["australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.lenght; i++) {
    let ansLen = country[ansIdx].length;
    let ourrLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}

/**Q4. Write a Javascript function to count the number of vowels in a string argument. */

let str = "apnacollege";
function countVowels(str) {
  letcount = 0;
  for (leti = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}
