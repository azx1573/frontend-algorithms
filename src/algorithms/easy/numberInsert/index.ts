/**
 * 小U的数字插入问题，小U手中有两个数字 a 和 b。第一个数字是一个任意的正整数，而第二个数字是一个非负整数。
 * 她的任务是将第二个数字 b 插入到第一个数字 a 的某个位置，以形成一个最大的可能数字。
 * 需要帮助小U找到这个插入位置，输出插入后的最大结果
 */

/**
 * 详细思路如下：
 * 1. 将两个数字转换为字符串
 * 2. 遍历第一个数字的每一位，将第二个数字插入到每一位的前面，然后将插入后的数字转换为数字
 * @param a number
 * @param b number
 * @returns  number
 */
function numberInsert(a: number, b: number): number {
  const strA = a.toString();
  const strB = b.toString();
  let max = 0;
  for (let i = 0; i <= strA.length; i++) {
    const temp = parseInt(strA.slice(0, i) + strB + strA.slice(i)); //
    max = Math.max(max, temp);
  }
  return max;
}

// test cases
console.log(numberInsert(123, 45)); //45123
console.log(numberInsert(76543, 4)); // 765443
console.log(numberInsert(1, 0)); // 10
console.log(numberInsert(44, 5)); // 544
console.log(numberInsert(666, 6)); // 6666
