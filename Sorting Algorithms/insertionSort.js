/**
 * Its like a game of cards
 * First element is sorted
 * Create hole for next element by comparing next element to all previous ones
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      console.log(arr[j + 1]);
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
