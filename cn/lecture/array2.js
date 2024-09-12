const teams = ["CSK", "RCB", "MI", "LSG"];
const pushArray = teams.push("GT");
console.log(pushArray);

// unshift
teams.unshift("KKR");
console.log(teams);

// Removing an elemnt
// pop

teams.pop();
console.log(teams);

// check the element is present or not
//  indexOf()

const rcbIndex = teams.indexOf("RCB");
console.log(rcbIndex);

// includes()

const kkrIndex = teams.indexOf("KKR");
console.log(kkrIndex);

// slice() and splice()

console.log(teams.slice(1, 4));

// splice()
// arry.splice(starting index, numbder of elements to be deleted including that index, "elements to be added", ending index)
teams.splice(2, 0, "GT");
console.log(teams);

teams.splice(1, 2, "LSG", "GT", "SH", "DC");
console.log(teams);
