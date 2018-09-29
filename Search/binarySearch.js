//Binary Search works only on sorted arrays
function binarySearch(arr, num) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.ceil((start + end) / 2);
  while (start <= end) {
    console.log(middle);
    if (arr[middle] === num) {
      return middle;
    }
    if (arr[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.ceil((start + end) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4,56,648,8579,42354265],42354265));
