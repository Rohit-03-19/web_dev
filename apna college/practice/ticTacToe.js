//  to create the following tic-tac-toe game state. we would require use of a nested array.
// in which arrays will be having the characters stored and for empty spaces we will be assigning null.

let tictactoe = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];

console.log(tictactoe);

tictactoe[0][1] = "O";
