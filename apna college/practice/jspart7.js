/** Write an arrow function that returns the square of a number 'n'.*/

// const square = (n) => n * n;

// console.log(square(5));

/** Write a dunction that prints "Hello World" 5 times at interval of 2s each. */

const id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("5 times Hello WOrld has been printed.");
}, 10000);
