/**
 * 买卖股票的最佳时机
 */

/**
 * 买卖股票的最佳时机
 * 方案一：暴力解法, 时间复杂度 O(n^2) 空间复杂度 O(1)
 * 思路：
 * 1. 双循环遍历数组，每次都计算当前卖出价格减去买入价格的差值
 * 2. 用一个变量存储最大利润
 * 3. 最后返回最大利润
 * 缺陷：当价格值很多时，时间复杂度过高，可能会出现超时
 * @param prices 股票价格数组
 * @returns 最大利润
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }
  return maxProfit;
}

/**
 * 买卖股票的最佳时机
 * 方案二：动态规划, 时间复杂度 O(n) 空间复杂度 O(1)
 * 详细解题思路：
 * 1. 定义两个变量，一个用来存储最大利润，一个用来存储最小价格
 * 2. 遍历数组，每次都更新最小价格和最大利润
 * 3. 最后返回最大利润
 * @param prices 股票价格数组
 * @returns 最大利润
 */
export function maxProfit2(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

// test cases for maxProfit
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([1, 2, 4])); // 3
console.log(maxProfit([1, 2, 4, 2])); // 3
console.log(maxProfit([1, 2, 4, 2, 5])); // 4
console.log(maxProfit([2, 4, 2, 5, 2, 1])); // 3

console.log("maxProfit2", maxProfit2([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit2([7, 6, 4, 3, 1])); // 0
console.log(maxProfit2([2, 4, 1])); // 2
console.log(maxProfit2([1, 2])); // 1
console.log(maxProfit2([1, 2, 4])); // 3
console.log(maxProfit2([1, 2, 4, 2])); // 3
console.log(maxProfit2([1, 2, 4, 2, 5])); // 4
