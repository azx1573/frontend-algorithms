/**
 * 给定一个数组，数组中的每个元素都是一个数字，将这个数组表示的数字加一。方案如下：
 */

/**
 * 方案一：将数组转换为数字，加一后再转换为数组
 * @param digits number[]
 * @returns number[]
 */
export function plusOne(digits: number[]): number[] {
  let num = BigInt(digits.join(""));
  num++;
  return num.toString().split("").map(Number);
}
