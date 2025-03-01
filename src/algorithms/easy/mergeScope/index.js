// # 合并区间 NC37
// ## 题目描述
// 给出一组区间，请合并所有重叠的区间。
// 请保证合并后的区间按区间起点升序排列。
// ```
// //"区间"定义
// class Interval {
//    int start; //起点
//    int end;   //终点
// }
// ```
// 数据范围：区间组数 $0 \leq n \leq 2 \times 10^5$ ，区间内的值都满足 $0 \leq val \leq 2 \times 10^5$
// 要求：空间复杂度 O(n)，时间复杂度 O(n log n)
// 进阶：空间复杂度 O(val)，时间复杂度 O(val)
// ### 示例一
// ```
// 输入：
// [[10,30],[20,60],[80,100],[150,180]]
// 返回值：
// [[10,60],[80,100],[150,180]]
// ```
// ### 示例二
// ```
// 输入：
// [[0,10],[10,20]]
// 返回值：
// [[0,20]]
// ```
// 区间值为start何end的数组，合并所有重叠的区间。
/**
 * 合并区间，非常详细的思路是：
 * 1. 先将区间数组按照区间的起始位置进行排序，这样可以合并的区间就会连在一起
 * 2. 遍历排序后的区间数组，如果当前区间的起始位置小于等于结果数组中最后一个区间的结束位置，说明可以合并，更新结果数组中最后一个区间的结束位置
 * @param intervals  区间数组
 * @returns
 */
function mergeScope(intervals) {
    if (intervals.length === 0)
        return [];
    // Sort intervals by their start value
    intervals.sort(function (a, b) { return a[0] - b[0]; });
    var res = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        var last = res[res.length - 1]; // 这里之所以
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        }
        else {
            res.push(intervals[i]);
        }
    }
    return res;
}
// 测试用例参考：
// [[10,30],[20,60],[80,100],[150,180]] => [[10,60],[80,100],[150,180]]
console.log(mergeScope([
    [10, 30],
    [20, 60],
    [80, 100],
    [150, 180],
])); // [[10,60],[80,100],[150,180]]
console.log(mergeScope([
    [0, 10],
    [10, 20],
])); // [[0,20]]
console.log(mergeScope([
    [1, 4],
    [0, 2],
])); // [[0,4]]
