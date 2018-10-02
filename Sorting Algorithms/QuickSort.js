function partition(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      var temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  console.log(pivotIndex);
  var t = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = t;
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}
console.log(quickSort([5, 3, 2, 1]));
