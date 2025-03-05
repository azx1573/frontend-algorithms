/**
 * 整数反转，整体思路是：
 * 1. 首先判断x是否为负数，如果是负数则将其转为正数
 * 2. 通过while循环逐个逐个对x取余拿出最后一位数字，然后将其加到reversed的末尾
 * @param {number} x
 * @return {number}
 */
function reverseNumber(x) {
  // 1. 首先判断x是否为负数，如果是负数则将其转为正数
  let type = x > 0 ? 1 : -1;
  // 2. 定义变量reversed用于存放每次翻转的结果，初始化为0
  let reversed = 0;

  // 3. 将x转为正数
  x = Math.abs(x);

  // 4. 循环处理x的每一位数字，直到x为0
  while (x !== 0) {
    // 3.1 定义变量digit用于存放x的最后一位数字
    let digit = x % 10;
    // 3.2 更新reversed = reversed * 10 + digit
    reversed = reversed * 10 + digit;
    // 3.3 缩短x的长度：x = Math.floor(x / 10)
    x = Math.floor(x / 10);
    // 3.4 如果reversed溢出了32位有符号整数的范围，则返回0
    if (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) return 0;
  }

  return reversed * type;
}

// 测试用例
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(120)); // 21
