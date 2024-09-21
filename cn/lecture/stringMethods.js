/* Methods in Strings */
let str = "Javascript is a Dynamically typed langugae.";

// includes(this bascially tells us that whether passed string is present in the string or not.) Gives answer in true or false only.

console.log(str.includes("is"));
console.log(str.includes("iS"));

// replace(original,new) {this bascially updates the string by replacing the words by new ones.}
// we can also use replaceAll if we want to change all the similar words wit new ones.
console.log(str.replace("is", "was"));
// console.log(str.replaceAll("is", "was"));
