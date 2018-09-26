//given a sorted array find a pair with sum =0

function findPair(arr1) {
  let start = 0;
  let end = arr1.length - 1;
  while (start < end) {
    if (arr1[start] + arr1[end] === 0) {
      return [start, end];
    }
    if (arr1[start] + arr1[end] > 0) {
      end = end - 1;
    } else {
      start = start + 1;
    }
  }
}

console.log(findPair([-2, 0, 1, 2, 3]));
