/**
 * 求最长回文字符串
 * 方案一：暴力解法
 */

function findLongestPalindrome(str) {
  let len = str.length;
  if (len < 2) return 1;
  if (len == 2 && str[0] == str[1]) return 2;

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      } else {
        left++;
        right--;
      }
    }
    return true;
  }

  let maxLen = 1;
  let start = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isPalindrome(str, i, j)) {
        maxLen = Math.max(maxLen, j - i + 1);
        start = i;
      }
    }
  }

  return `${maxLen}(${str.slice(start, start + maxLen)})`;
}

// 测试用例
console.log(findLongestPalindrome("babad")); // aba bab 3
console.log(findLongestPalindrome("cbbd")); // bb 2
console.log(findLongestPalindrome("a")); // a 1
console.log(findLongestPalindrome("ac")); // a/c 1
console.log(findLongestPalindrome("ababc")); // 3 aba bab

/**
 * 方案二：中心扩展法，思路：
 * 1. 从中心向两边扩展，找到最长的回文字符串，分为两种情况：
 *   - 回文字符串长度是奇数，中心是一个字符
 *   - 回文字符串长度是偶数，中心是两个字符
 * 2. 遍历字符串，分别以每个字符为中心，找到最长的回文字符串，记录最长的回文字符串长度和起始位置
 */
function findLongestPalindrome2(str) {
  let len = str.length;
  if (len < 2) return 1;
  if (len == 2 && str[0] == str[1]) return 2;

  /**
   * 从中心向两边扩展，找到最长的回文字符串，思路：
   * 1. 从中心向两边扩展，找到最长的回文字符串
   * 2. 当退出while循环时，说明当前i和j之间的字符串是回文字符串，不包含i和j，因此就是j-i+1-2=j-i-1
   * @param {*} str  string
   * @param {*} left number
   * @param {*} right number
   * @returns
   */
  function expandAroundCenter(str, left, right) {
    let i = left;
    let j = right;

    while (i >= 0 && j < len) {
      if (str[i] === str[j]) {
        i--;
        j++;
      } else {
        break;
      }
    }

    return j - i - 1;
  }

  let maxLen = 1;
  let start = 0;

  for (let i = 0; i < len; i++) {
    let len1 = expandAroundCenter(str, i, i); // 以一个字符为中心
    let len2 = expandAroundCenter(str, i, i + 1); // 以两个字符为中心
    let curLen = Math.max(len1, len2);
    if (curLen > maxLen) {
      maxLen = curLen;
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }

  return `${maxLen}(${str.substr(start, maxLen)})`;
}

console.log(findLongestPalindrome2("babad")); // aba bab 3
console.log(findLongestPalindrome2("cbbd")); // bb 2
console.log(findLongestPalindrome2("a")); // a 1
console.log(findLongestPalindrome2("ac")); // a/c 1
console.log(findLongestPalindrome2("ababc")); // 3 aba bab
