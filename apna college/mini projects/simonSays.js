let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

let body = document.querySelector("body");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  //random btn choose
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx, randColor, randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkColor(index) {
  // console.log(`current level : ${level}`);

  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    console.log("same value");
  } else {
    h3.innerText = `Game Over!!! Your score is ${level}.`;
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "white";
    }, 500);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkColor(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
