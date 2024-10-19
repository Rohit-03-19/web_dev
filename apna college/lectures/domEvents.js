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
//   // console.log("Generate random color");
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;
//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;
//   console.log("Color Updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this.innerText);
  console.dir(this);
  this.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )} , ${Math.floor(Math.random() * 255)} , ${Math.floor(
    Math.random() * 255
  )})`;
});
