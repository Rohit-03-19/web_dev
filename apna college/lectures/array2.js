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
