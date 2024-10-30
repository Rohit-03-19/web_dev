/** Call Stack.
 * it is like stacking something. this is a data structure which works on the principle of last in first out.
 * for example stacking up few cd's or stacking up plates.
 */

function hello() {
  console.log("inside hello function.");
  console.log("hello");
}

function demo() {
  console.log("Inside demo function noew calling hello function.");
  hello();
}

console.log("calling the demo function. ");
demo();
console.log("Stack ended. Bye!!!.");

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
