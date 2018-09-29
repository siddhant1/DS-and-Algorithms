/**
 * Check for min
 * move to front
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

    console.log(arr);
  }
  return arr;
}
console.log(selectionSort([5, 4, 3, 2, 1]));
