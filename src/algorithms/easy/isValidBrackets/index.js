/**
 * 有效的括号，要判断括号的顺序，最好的方法是使用栈
 * 1. 遍历字符串，如果是左括号，就入栈
 * 2. 如果是右括号，就出栈一个元素，判断出栈的元素是否和当前元素匹配
 * 3. 比如'[{()}]',前3个都是左括号需入栈，遇到第4个右括号')'，出栈)和(匹配，继续遍历
 * 4. 最后栈为空，说明括号匹配
 *
 * @param {string} s
 * @return {boolean}
 */
function isValidBrackets(s) {
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

console.log(isValidBrackets("()")); // true
console.log(isValidBrackets("()[]{}")); // true
console.log(isValidBrackets("([{}])[]{}")); // true
console.log(isValidBrackets("(]")); // false
console.log(isValidBrackets("([)]")); // false

/**
 * 求括号的最大嵌套深度：给定 有效括号字符串 s，返回 s 的 嵌套深度。嵌套深度是嵌套括号的 最大 数量。
 * 思路：
 * 1. 遍历字符串，遇到左括号就加1，遇到右括号就减1
 * 2. 用一个变量max记录最大的嵌套深度
 */
function maxDepth(s) {
  let max = 0;
  let depth = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] === "(") {
      depth++;
      max = Math.max(max, depth);
    } else if (s[i] === ")") {
      depth--;
    }
  }
  return max;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("1+(2*3)/(2-1)")); // 1
