/**
 * 分割字符串
 * 1. 每行 n 个字符
 * 2. 不足 n 个字符的行用 0 补齐
 * @param string string
 * @param n number
 * @returns string
 */
// 方法一：使用正则表达式
function splitString(string, n) {
    var regex = new RegExp(".{1,".concat(n, "}"), "g");
    var list = string.match(regex);
    return list === null || list === void 0 ? void 0 : list.map(function (l) { return l.padEnd(n, "0"); }).join("\n");
}
// 方法二：使用循环
function splitString2(string, n) {
    var len = string.length;
    var list = [];
    for (var i = 0; i < len; i += n) {
        var str = string.slice(i, i + n);
        while (str.length < n) {
            str += 0;
        }
        list.push(str);
    }
    return list.join("\n");
}
// 测试用例
var result = splitString("helloworld", 3);
console.log(result);
