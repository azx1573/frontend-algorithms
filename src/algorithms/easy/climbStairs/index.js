/**
 * 爬楼梯：
 * 方案一：递归, 时间复杂度O(2^n), 空间复杂度O(n)
 * 思路：题目设定每次可以爬1阶或者2阶，所以爬楼梯的方法数等于爬1阶的方法数加上爬2阶的方法数
 * 1. 当n=1时，只有一种爬法
 * 2. 当n=2时，有两种爬法
 * 3. 当n>2时，第一次可以选择爬1阶或者2阶，所以爬楼梯的方法数等于爬1阶的方法数加上爬2阶的方法数，即f(n) = f(n-1) + f(n-2)
 * @param n
 * @returns {number}
 */
function climbStairs(n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
}
// test cases
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(44)); // 1134903170
