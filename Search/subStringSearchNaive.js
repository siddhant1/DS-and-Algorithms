// takes a long string and a substring
//o(n^2)
//KNP solution is o(n)
//approach

/**
 * traverse the long string
 * traverse the short string
 * check if the short matches the long by incrementing the long and short simultaneously
 * if all the strings are matching and we are at the end of the array , congo we found the match
 */
function substring(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(substring("hellohello", "hel"));
