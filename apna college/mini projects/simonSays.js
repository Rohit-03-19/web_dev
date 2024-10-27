let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "puprle", "green"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}

function levelUp() {
  level++;
  h3.innerText = `Level ${level}`;

  //random btn choose
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx, randColor, randbtn);
  btnFlash(randbtn);
}
