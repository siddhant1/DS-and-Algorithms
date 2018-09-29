function bubbleSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

/**
 * bubble the larget element to the end
 * do until the array is sorted
 */

function bubbleSort2(arr) {
  console.log("1");
  var isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  return arr;
}

console.log(bubbleSort2([5, 4, 3, 2, 1]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
