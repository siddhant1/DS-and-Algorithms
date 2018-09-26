//Given an array and the number of digits to check find the maximum sum of any sum array
function maxSum(arr, num) {
  var max = -Infinity;
  for (let i = 0; i <= arr.length - num; i++) {
    var limit = i + num - 1;
    var sum = 0;
    for (let j = i; j <= limit; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

console.log(maxSum([1, 2, 3, 4,5], 5));
