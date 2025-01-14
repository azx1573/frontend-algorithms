/**
 * Excel表列序号: 进制转换
 * 思路：将26进制转换为10进制
 * 1. A的ASCII码为65，B的ASCII码为66，...，Z的ASCII码为90，如果想要得到A-Z的序号，只需要将其ASCII码减去64即可
 * 2. 每次处理当前字符时，将结果乘以26，再加上当前字符的值
 *
 * 关于为啥要乘以26的解释：
 * 在将 26 进制数转换为 10 进制数的过程中，我们需要考虑每个字符的位置权重。就像在将十进制数展开时，每个数字的位置都有一个权重，
 * 例如对于十进制数 123，它可以表示为 1 * 10^2 + 2 * 10^1 + 3 * 10^0。同样，对于 26 进制数，我们需要考虑 26 的幂次
 * 例如对于 26 进制数 "AB"，它可以表示为 1 * 26^1 + 2 * 26^0。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {string} s
 * @return {*}  {number}
 * @example titleToNumber('AB') => 28
 * @see https://leetcode-cn.com/problems/excel-sheet-column-number/
 */
function titleToNumber(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result * 26 + s.charCodeAt(i) - 64; //
  }
  return result;
}

// test cases for titleToNumber
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ABC")); // 731 1*26^2 + 2*26^1 + 3*26^0 = 731
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647
