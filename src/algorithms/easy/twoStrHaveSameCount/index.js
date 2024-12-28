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
 * Check if two strings have the same count of characters
 * @param str1 string
 * @param str2 string
 * @returns boolean
 */
function twoStrHaveSameCount(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    if (str1 === str2)
        return true;
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    if (str1 !== str2) {
        return false;
    }
    return true;
}
/**
 * 检查两个字符串中的字符数量是否相同：
 * 方法二：使用哈希表同时记录两个字符串中的字符，最后比较哈希表中的值是否相等，具体做法是：
 * 1. 首先排除两个字符串长度不相等的情况以及两个字符串相等的情况
 * 2. 当两个字符串长度相等时，同时遍历两个字符串，使用哈希表记录两个字符串中的字符
 * 3. 第一个字符串中的字符数量加 1，第二个字符串中的字符数量减 1
 * 4. 最后遍历哈希表中的值，如果有一个值不等于 0，则返回 false
 * @param str1 string
 * @param str2 string
 * @returns boolean
 */
function twoStrHaveSameCount2(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    if (str1 === str2)
        return true;
    var map = new Map();
    for (var i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);
        map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }
    if (__spreadArray([], map.values(), true).every(function (item) { return item === 0; }))
        return true;
    return false;
}
// test cases
console.log(twoStrHaveSameCount("abcd", "dcca")); // false
console.log(twoStrHaveSameCount("abcd", "dbca")); // true
console.log(twoStrHaveSameCount("abccde", "ccbdae")); // true
console.log(twoStrHaveSameCount("abcd", "dba")); // false
console.log(twoStrHaveSameCount("dba", "abcd")); // false
