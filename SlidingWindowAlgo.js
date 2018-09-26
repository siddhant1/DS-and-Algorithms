//This is an intersting one
//This is an o(n) solution rather than o(n^2) naive approach

function maxSum(arr, num) {
  var tempSum = 0;
  var maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(tempSum);
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSum([1, 2, 3, 4, 5], 2));
