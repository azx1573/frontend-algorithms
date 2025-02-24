/**
 * 分割字符串
 * 1. 每行 n 个字符
 * 2. 不足 n 个字符的行用 0 补齐
 * @param string string
 * @param n number
 * @returns string
 */

// 方法一：使用正则表达式
function splitString(string: string, n: number) {
  let regex = new RegExp(`.{1,${n}}`, "g");
  let list = string.match(regex);

  return list?.map((l) => l.padEnd(n, "0")).join("\n");
}

// 方法二：使用循环
function splitString2(string: string, n: number) {
  let len = string.length;
  let list = [];

  for (let i = 0; i < len; i += n) {
    let str = string.slice(i, i + n);
    while (str.length < n) {
      str += 0;
    }
    list.push(str);
  }
  return list.join("\n");
}

// 测试用例
let result = splitString("helloworld", 3);
console.log(result);
