// let btns = document.querySelectorAll("button");
// // console.dir(btn);

// // btn.onclick = function () {
// //   console.log("button was clicked");
// // };
// for (btn of btns) {
//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
// }

// // // btn.onclick = sayHello;

// function sayHello() {
//   alert("Hello!");
// }
// function sayName() {
//   alert("Apna College!");
// }
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this.innerText);
//   console.dir(this);
//   this.style.backgroundColor = `rgb(${Math.floor(
//     Math.random() * 255
//   )} , ${Math.floor(Math.random() * 255)} , ${Math.floor(
//     Math.random() * 255
//   )})`;
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function (event) {
//   console.log("key = ", event.key);
//   console.log("code = ", event.code);
//   console.log("key was released");
// });

// // inp.addEventListener("keydown", function () {
// //   console.log("key was pressed");
// // });

let form = document.querySelector("form");

form.addEventListener("submit", function () {
  alert("Form Submitited");
  event.preventDefault();
  console.log("Form Submitited");
});
