//  learning how to use splice

// splice : removes / replace / add elemnts in place
// basic format of splice is:-
// Array.splice(start,deletecount,item1,item2....itemNth);

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));

console.log(colors);

console.log(colors.splice(0, 1));

console.log(colors);

console.log(colors.splice(0, 1, "black", "grey"));

// sorting an array.
//  arr.sort is used.

console.log(colors.sort());

let marks = [99, 89, 67, 42, 100];

// array refrences
// this basically tells us the conscept of memory address where the values are actually stored or the memory address reserved for the identifier given to that array.
// in simple words if we compare two array let suppose arr1 and arr2 having value [1,2,3,4].
// will give false because the values are not compared the memory address is compared and the address reserved is different for each array.

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
if (arr1 == arr2) {
  console.log("true");
} else {
  console.log("false");
}
