/**
 * 爬楼梯：
 * 方案一：递归, 时间复杂度O(2^n), 空间复杂度O(n)
 * 思路：题目设定每次可以爬1阶或者2阶，所以爬楼梯的方法数等于爬1阶的方法数加上爬2阶的方法数
 * 1. 当n=1时，只有一种爬法
 * 2. 当n=2时，有两种爬法
 * 3. 当n>2时，第一次可以选择爬1阶或者2阶，所以爬楼梯的方法数等于爬1阶的方法数加上爬2阶的方法数，即f(n) = f(n-1) + f(n-2)
 * 可以看到，当n为44时，递归的时间复杂度已经非常高，所以递归的方法不适合这道题
 * @param n
 * @returns {number}
 */
function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// test cases
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(44)); // 1134903170

/**
 * 爬楼梯：
 * 方案二：动态规划, 时间复杂度O(n), 空间复杂度O(n)
 * 思路：动态规划的思路是将递归的方法改为迭代的方法，从底向上计算，时间复杂度为O(n)
 * 1. 当n=1时，只有一种爬法
 * 2. 当n=2时，有两种爬法
 * 3. 当n>2时，第一次可以选择爬1阶或者2阶，所以爬楼梯的方法数等于爬1阶的方法数加上爬2阶的方法数，即f(n) = f(n-1) + f(n-2)
 * 详细思路解析如下：
 * 1. 定义dp数组，dp[i]表示爬到第i阶楼梯的方法数
 * 2. 初始化dp[1] = 1, dp[2] = 2
 * 3. 从第3阶楼梯开始，dp[i] = dp[i-1] + dp[i-2]
 * 4. 返回dp[n]
 * @param n
 * @returns {number}
 */
function climbStairs2(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = new Array(n + 1); // dp数组,n+1是因为dp[0]不用，所以数组长度为n+1
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
