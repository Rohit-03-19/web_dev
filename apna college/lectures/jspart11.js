/** Call Stack.
 * it is like stacking something. this is a data structure which works on the principle of last in first out.
 * for example stacking up few cd's or stacking up plates.
 */

// function hello() {
//   console.log("inside hello function.");
//   console.log("hello");
// }

// function demo() {
//   console.log("Inside demo function noew calling hello function.");
//   hello();
// }

// console.log("calling the demo function. ");
// demo();
// console.log("Stack ended. Bye!!!.");

// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

//instead of writing this much amount of code we can create a function  for making it more practical but yet it looks not that good but used in industrial level projects and this is called CALLBACK HELL.
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) {
      nextColorChange();
    }
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("pink", 1000, () => {
        changeColor("blue", 1000);
      });
    });
  });
});

/** Promises :- the promises object represents the eventual completion (or failure) of an asychronous operation and its resulting value.*/

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Aapna College",
  () => {
    console.log("(1)Your work has been saved successfully!!!.");
    savetoDb(
      "Hello World",
      () => {
        console.log("(2)Your work has been saved successfully!!!.");
        savetoDb(
          "Rohit you have done your work successfully, Congratulaion!!!.",
          () => {
            console.log("(3)Your work has been saved successfully!!!.");
          },
          () => {
            console.log("(3)Weak connection, data was no saved.");
          }
        );
      },
      () => {
        console.log("(2)Weak connection, data was no saved.");
      }
    );
  },
  () => {
    console.log("(1)Weak connection, data was no saved.");
  }
);