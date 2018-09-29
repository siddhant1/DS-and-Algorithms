/**
 * In this doc I will explain how js default sort() method works
 * if no callback function is provided it sorts according to unicode value
 * if provided it looks at return values at eery iteration and if num1-num2 <0,
 * it says num1 should be ahead of num2 and vice-versa
 */

console.log([13295, 675, 3, 1, -1].sort());
console.log([13295, 675, 3, 1, -1].sort((num1, num2) => num1 - num2));
console.log([13295, 675, 3, 1, -1].sort((num1, num2) => num2 - num1));
console.log(
  ["abcd", "a", "b", "ab", "abc"].sort(
    (str1, str2) => str1.length - str2.length
  )
);
