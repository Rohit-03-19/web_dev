/**Q1. Write a javascript program to get the first n elements of an array.[n can be any positive number.] */

let arr = [7, 9, 0, -2];
let n = prompt("Enter upto which number you want the elements");
for (let i = 0; i <= n - 1; i++) {
  console.log(arr[i]);
}

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0, n);
// console.log(ans);

/**Q2. Write a javascript program to get the last n elemenets of an array.[n can be any positive number.] */

let nlast = prompt("Enter the number upto which you want the last n element");
for (let i = arr.length - 1; i >= arr.length - nlast; i--) {
  console.log(arr[i]);
}
// letarr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length - n);
// console.log(ans);

/**Q4. Write a javascript program to test whether the character at the given character index is lower case?
 */

let str = "ApNaCoLlEgE";
let idx = 3;
if (str[idx] == str[idx].toLowerCase()) {
  console.log("characterislowercase");
} else {
  console.log("characterisnotlowercase");
}

/**Q6. Write a javascript program to check if an element exists in an array or not. */

let arr1 = ["hello", "a", 23, 64, 99, -6];
let item = 64;
if (arr1.indexOf(item) != -1) {
  console.log("elementexistsinarray");
} else {
  console.log("elementdoesn'texistinarray");
}
