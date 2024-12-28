/**
 * 有效的括号，使用栈来解决，思路如下：
 * 1. 遍历字符串，如果是左括号，就入栈
 * 2. 如果是右括号，就出栈一个元素，判断是否匹配
 *
 * @param {string} s
 * @return {boolean}
 */
export default function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      const left = stack.pop();
      if (map[left] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
