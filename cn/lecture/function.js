/** Function in JavaScript  */

function greetUser() {
  for (i = 0; i <= 10; i++) {
    console.log("hello User, Welcome to our page!");
  }
}

// greetUser();

// Function with Parameters

function greetName(userName) {
  console.log(`hello ${userName}, Welcome to our page!`);
  age(1895);
}

greetName("Rohit");

// We Can add more parameters in our function definition
// We can also call afunction inside a different fuction.
// See Below.

function age(birthyear) {
  console.log(2024 - birthyear);
}

// We calso give parameters a default value to minimise errors.
// as birthyear=2000 instead of simply writing birhtyear.
