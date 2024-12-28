// 求解两数之和等于target的元素的下标
/**
 * 求解两数之和-暴力解法
 */
function sumOfTarget(lists, target) {
    var len = lists.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (lists[i] + lists[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
/**
 * 求解两数之和-哈希表解法
 * @param lists number[]
 * @param target number
 */
function sumOfTarget2(lists, target) {
    var len = lists.length;
    var map = new Map();
    for (var i = 0; i < len; i++) {
        var diff = target - lists[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        else {
            map.set(lists[i], i);
        }
    }
    return [];
}
/**
 * 求解两数之和-双指针解法，需要先排序
 * @param lists number[]
 * @param target number
 * @returns
 */
function twoPointersOfSum(lists, target) {
    var len = lists.length;
    var left = 0;
    var right = len - 1;
    lists.sort(function (a, b) { return a - b; });
    while (left < right) {
        if (lists[left] + lists[right] === target) {
            return [left, right];
        }
        else if (lists[left] + lists[right] < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return [];
}
/**
 * 求解两数之和变种-判断是否存在两数之和是否等于target
 * @param lists number[]
 * @param target  number
 */
function twoSumIsExist(lists, target) {
    var len = lists.length;
    var map = new Map();
    for (var i = 0; i < len; i++) {
        var diff = target - lists[i];
        if (!map.has(diff)) {
            map.set(lists[i], i);
        }
        else {
            return true;
        }
    }
    return false;
}
// test cases
console.log(sumOfTarget([2, 7, 11, 15], 9)); // [0, 1]
console.log(sumOfTarget2([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoPointersOfSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumIsExist([2, 7, 11, 15], 9)); // true
console.log(twoSumIsExist([2, 7, 11, 15], 10)); // false
