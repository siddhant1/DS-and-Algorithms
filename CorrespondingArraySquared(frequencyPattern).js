//Check if the array2 has corresponding elements squared in arr1
function isArraySquared(arr1, arr2) {
  //We will use the frequency counter approach
  //create 2 object or hash tables corresponding to the frequencies of both arrays
  var freq1 = {};
  var freq2 = {};
  for (element of arr1) {
    freq1[element] = (freq1[element] || 0) + 1;
  }
  for (element of arr2) {
    freq2[element] = (freq2[element] || 0) + 1;
  }
  //then compare the two object
  for (key in freq1) {
    if (!freq2[key ** 2]) {
      return false;
    }
    if (freq1[key] != freq2[key ** 2]) {
      return false;
    }
  }
  return true;
  //THIS IS AN o(n) Linear Solution instead of scanning the 2 arrays and comparing o(n^2) solution
}

console.log(isArraySquared([1, 2, 3, 4, 2], [1,4,9,16,4]));
