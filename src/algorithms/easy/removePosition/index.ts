function getNum(cur: string, str: string) {
  return Number(cur.split(str).filter(Boolean)[0]);
}

/**
 * 通过指令计算小人的移动位置，解题思路：
 * 1. 将输入的字符串按照分号分割，然后过滤掉不符合规则的输入
 * 2. 遍历过滤后的输入，根据指令计算出小人的移动位置
 * @param str string字符串
 */
function getRemovePosition(str: string) {
  let x = 0;
  let y = 0;

  let inputList = str.split(";").filter(Boolean);
  let regex = /^[AWSD]([1-9]|[1-9][0-9])$/;

  let validInput = inputList.filter((input) => regex.test(input));

  for (let i = 0; i < validInput.length; i++) {
    let cur = validInput[i];
    if (cur.startsWith("A")) {
      let num = getNum(cur, "A");
      x -= num;
    } else if (cur.startsWith("S")) {
      let num = getNum(cur, "S");
      y -= num;
    } else if (cur.startsWith("W")) {
      let num = getNum(cur, "W");
      y += num;
    } else if (cur.startsWith("D")) {
      let num = getNum(cur, "D");
      x += num;
    }
  }
  return {
    x,
    y,
  };
}

// 测试用例
console.log(getRemovePosition("A10;S20;W10;D30;X;A1A;B10A11;;A10;")); // { x: 10, y: -10 }
console.log(getRemovePosition("W10;A5;S20;D30;X;A1A;B10A11;;A10;")); // { x: 15, y: -10 }
