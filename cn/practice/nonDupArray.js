arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  for (let i in arr1) {
    for (let j in arr2) {
      if (arr1[i] == arr2[j]) {
        arr2.splice(j, 1);
      }
    }
  }
  array = arr1.concat(arr2);
  return array;
}
console.log(mergeArray(arr1, arr2));
