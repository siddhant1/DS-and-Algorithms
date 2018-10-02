function merge(arr1, arr2) {
  let mergedArr = [];
  arr1[arr1.length] = Infinity;
  arr2[arr2.length] = Infinity;
  console.log(arr1);
  console.log(arr2);
  var i = 0;
  j = 0;
  console.log(arr1[j]);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  mergedArr.splice(-1, 1);
  return mergedArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.round(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(left, right);
}
console.log(mergeSort([1, 10, 50, 80, 2, 14, 99, 100]));
