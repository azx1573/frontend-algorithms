/**
 * 判断一个字符是否是回文字符串-双指针解法
 */
const isPalindrome = function (s) {
  s = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  let len = s.length,
    left = 0,
    right = len - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
j;

console.log(111, isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(222, isPalindrome("race a car")); // false
console.log(333, isPalindrome("0P")); // false
