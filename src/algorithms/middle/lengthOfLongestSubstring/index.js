/**
 * 无重复最长子串
 * @param s string
 */
const lengthoOfLongestSubstring = (s) => {
  let len = s.length;
  let arr = [];
  let max = 0;

  for (let i = 0; i < len; i++) {
    const index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]); // 将当前字符加入数组
    max = Math.max(max, arr.length); // 比较当前数组长度和最大长度
  }
  return max;
};

let res = lengthoOfLongestSubstring("abcabcbb");
