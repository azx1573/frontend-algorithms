/*
 * 方案一：使用toString方法
 */
function switchNumber(decimal: number) {
  let num = Number(decimal);
  return num.toString(2);
}

/*
 * 方案二：使用传统方法：将n不断除以2取余，直到商为0时，将余数倒加
 * 1. 每次将n除以2的商作为新一次的n
 * 2. 定义变量binary保存余数，余数需要倒加
 */
function switchNumber2(decimal: number) {
  if (decimal === 0) return "0";

  let binary = "";

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

let result1 = switchNumber2(13);
let result2 = switchNumber2(12);
let result3 = switchNumber(13);
let result4 = switchNumber(12);

console.log(result1, result2, result3, result4);
