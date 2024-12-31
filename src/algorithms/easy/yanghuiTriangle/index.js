"use strict";
/**
 * 杨辉三角
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = generate;
exports.solution = solution;
/**
 * JavaScript版杨辉三角
 * 方案一：动态规划，时间复杂度O(n^2)，空间复杂度O(n^2)
 * 详细思路：
 * 1. 初始化一个二维数组res，用于存放杨辉三角的结果
 * 2. 遍历行数numRows，生成每一行的数据
 * 3. 每一行的数据都是一个长度为i+1的数组，初始化为1
 * 4. 从第二个元素开始，到倒数第二个元素结束，每个元素的值都等于上一行的前一个元素和上一行的当前元素之和
 * 5. 返回res
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    var res = [];
    for (var i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1).fill(1);
        for (var j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
    }
    return res;
}
/**
 * JavaScript版杨辉三角
 * 方案二: 递归，时间复杂度O(n^2)，空间复杂度O(n^2)，递归深度为numRows
 * 详细思路：
 * 1. 递归函数generate2，接收一个参数numRows，表示要生成的行数
 * 2. 如果numRows为0，返回空数组
 * 3. 如果numRows为1，返回[[1]]
 * 4. 递归调用generate2(numRows - 1)，获取上一行的数据
 * 5. 获取上一行的最后一行数据lastRow（每一行与前面所有行的数据是用二维数组存储的）
 * 6. 初始化一个新的数组newRow，第一个元素为1
 * 7. 遍历lastRow，从第二个元素开始，到倒数第二个元素结束，每个元素的值都等于上一行的前一个元素和上一行的当前元素之和
 * 8. 最后一个元素为1
 * 9. 将newRow添加到res中
 * 10. 返回res
 * @param {number} numRows
 * @return {number[][]}
 */
function solution(n) {
    if (n === 0)
        return [];
    if (n === 1)
        return [[1]];
    // 拿到倒数第二行到第二行的所有数据
    var res = solution(n - 1);
    // 拿到最后一行的数据，用于生成当前行数据
    var lastRow = res[res.length - 1];
    var newRow = [1];
    for (var i = 1; i < lastRow.length; i++) {
        newRow.push(lastRow[i - 1] + lastRow[i]);
    }
    newRow.push(1);
    res.push(newRow);
    return res;
}
// test cases
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(solution(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
