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
  } else if (guess < random) {
    guess = prompt("your guess was too small. Please try again");
  } else {
    guess = prompt("Your guess was too large. Please try again");
  }
}
