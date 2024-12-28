/**
 * 判断一个字符是否是回文字符串-双指针解法
 */
const isPalindrome = function (s) {
  // remove all non-alphanumeric characters and convert to lowercase
  const newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let len = newString.length;
  let left = 0;
  let right = len - 1;

  if (len < 2) {
    return true;
  }

  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(111, isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(222, isPalindrome("race a car")); // false
console.log(333, isPalindrome("0P")); // false
