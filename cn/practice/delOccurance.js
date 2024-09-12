/** You have been provided with an array your task is to find all the duplicate elements and return in form of an array
 * Expected Input
 * [12,43,64,45,35,12,68,12]
 *
 * Expected Output
 * [12]
 *
 * Test Cases
 * Find the element that has more than one occurrence . Store the new lement in a new array retur the new array.
 */

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  let duplicate = [];
  for (let i = 0; i < arr.lenght; i++) {
    let j = 1;
    if (arr[i] == arr[j]) {
      duplicate = duplicate.unshift(arr[j]);
    }
    j += 1;
  }
  return duplicate;
}

console.log(findDuplicate(arr));
