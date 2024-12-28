/**
 * 罗马数字转整数最简方法，思路：
 * 1. 创建一个map对象，存储罗马数字和整数的对应关系
 * 2. 创建一个result变量，用于存储最终的结果
 * 3. 遍历罗马数字字符串
 * 4. 如果当前字符对应的整数小于下一个字符对应的整数，则减去当前字符对应的整数
 * 5. 否则，加上当前字符对应的整数
 * 6. 返回result
 * @param {string} s
 */

const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]];
    } else {
      result += map[s[i]];
    }
  }
  return result;
};
