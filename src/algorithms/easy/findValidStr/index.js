/**
 * 字符串解密加扰字符串,具体拆解见index.md
 * @param string1
 * @param string2
 * @returns string
 */
function findValidStr(string1, string2) {
    // 1. 找出string1中剔除了干扰字符后的有效字符validStrings
    var validStrings = string1.split(/[0-9a-f]/g).filter(Boolean);
    // 2.如果有效数字没有返回Not Found
    if (!validStrings.length)
        return "Not Found";
    // 3. 找出string2中的字符数：targetNum
    var targetNum = new Set(string2).size;
    // 4. 匹配出string1中有效字符及其每个对应的字符数的集合bestNumbersSet,需要剔除有效字符数大于targetNum的字符
    var bestNumbersSet = validStrings
        .map(function (str) { return ({
        str: str,
        uniqueNum: new Set(str).size,
    }); })
        .filter(function (f) { return f.uniqueNum <= targetNum; });
    // 5. 如果bestNumbersSet没有值则返回Not Found
    if (!bestNumbersSet.length)
        return "Not Found";
    // 6. 找出上述bestNumbersSet中字符数最接近targetNum的数字 maxNumbers
    var maxNumbers = Math.max.apply(Math, bestNumbersSet.map(function (item) { return item.uniqueNum; }));
    // 7. 从上述bestNumbersSet中匹配出等于maxNumbers的值，然后按字典序降序排序得到最终值result
    var bestNumber = bestNumbersSet.filter(function (num) { return num.uniqueNum === maxNumbers; });
    var result = bestNumber.sort(function (a, b) { return b.str.localeCompare(a.str); });
    // 8. 去除result中的第一个即为返回值
    return result[0].str || "Not Found";
}
console.log(111, findValidStr("123admyffc79pt", "ssyy")); // pt
console.log(222, findValidStr("thisisanewday111forme", "good")); // orm
console.log(333, findValidStr("123admyffc79ptaagghi2222smeersst88mnrt", "ssyyfgh")); // mnrt
console.log(444, findValidStr("abcmnq", "rt")); // Not Found
