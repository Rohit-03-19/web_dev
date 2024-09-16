const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the number you think it would be");

while (true) {
  if (guess == "quit") {
    console.log("User Quits!");
    break;
  }
  if (guess == random) {
    console.log("You are right! Congrats!! random number was ", random);
    break;
  } else {
    guess = prompt("Your guess was wrong. Please try again");
  }
}
