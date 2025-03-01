var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * 输入形如3 abc bca cab abc 1的单词，找出所有兄弟单词中第no个单词，具体规则见index.md
 * @param str string字符串
 * @returns  string字符串
 */
function findBrotherWord(str) {
    var inputList = str.split(" ");
    // 输入单词的数量
    var num = inputList.shift();
    // 输入的单词列表
    var strList = inputList.slice(0, Number(num));
    // no是要找的第几个兄弟单词
    var no = Number(inputList.pop());
    //   x是目标单词
    var x = inputList.pop();
    // 用来存放兄弟单词
    var bros = [];
    function hasSameLetter(str1, str2) {
        if (str1.length !== str2.length)
            return false;
        var map = new Map();
        for (var i = 0; i < str1.length; i++) {
            map.set(str1[i], (map.get(str1[i]) || 0) + 1);
            map.set(str2[i], (map.get(str2[i]) || 0) - 1);
        }
        return __spreadArray([], map.values(), true).every(function (item) { return item == 0; });
    }
    // 1. 无需找出x的所有组合，只需要判断list中的单词是不是x的兄弟单词，满足兄弟单词的条件是：
    // * list中每个元素的长度必须跟x一样
    // * 不能是x本身
    // * 跟x含有相同数量的字母，即将其各种变换后跟x相等
    for (var i = 0; i < strList.length; i++) {
        var cur = strList[i];
        if (cur.length === x.length && cur !== x && hasSameLetter(cur, x)) {
            bros.push(cur);
        }
    }
    // 2. 将list中满足是x兄弟单词的单词推到res中，并按字典序排序，输出数量和第no个元素
    bros.sort();
    return [bros.length, bros[no - 1]].join("\n");
}
var case1 = findBrotherWord("3 abc bca cab abc 1");
var case2 = findBrotherWord("3 a aa aaa a 1");
console.log(case1, case2);
