function getNum(cur, str) {
    return Number(cur.split(str).filter(Boolean)[0]);
}
/**
 * 通过指令计算小人的移动位置，解题思路：
 * 1. 将输入的字符串按照分号分割，然后过滤掉不符合规则的输入
 * 2. 遍历过滤后的输入，根据指令计算出小人的移动位置
 * @param str string字符串
 */
function getRemovePosition(str) {
    var x = 0;
    var y = 0;
    var inputList = str.split(";").filter(Boolean);
    var regex = /^[AWSD]([1-9]|[1-9][0-9])$/;
    var validInput = inputList.filter(function (input) { return regex.test(input); });
    for (var i = 0; i < validInput.length; i++) {
        var cur = validInput[i];
        if (cur.startsWith("A")) {
            var num = getNum(cur, "A");
            x -= num;
        }
        else if (cur.startsWith("S")) {
            var num = getNum(cur, "S");
            y -= num;
        }
        else if (cur.startsWith("W")) {
            var num = getNum(cur, "W");
            y += num;
        }
        else if (cur.startsWith("D")) {
            var num = getNum(cur, "D");
            x += num;
        }
    }
    return {
        x: x,
        y: y,
    };
}
// 测试用例
console.log(getRemovePosition("A10;S20;W10;D30;X;A1A;B10A11;;A10;"));
console.log(getRemovePosition("W10;A5;S20;D30;X;A1A;B10A11;;A10;"));
