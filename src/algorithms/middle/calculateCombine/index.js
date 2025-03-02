/**
 * 给出两个整数 n 和 k，写一个函数来生成 [1,n] 内所有 k 个数的组合。
 * 解题思路：回溯法
 * 1. 递归函数的参数：当前递归的位置，当前递归的起始值，当前递归的终止值
 * 2. 递归终止条件：当递归的位置等于 k 时，将当前的组合加入到结果集中
 * 3. 递归的过程：从当前递归的起始值开始，递归的下一个位置，递归的起始值加一
 * 4. 递归的回溯：递归结束后，将当前递归的起始值减一
 */
function combine(n, k) {
  let res = [];

  // 定义递归函数，start为当前递归的起始值，path为当前递归的组合区间，比如可以动态的添加和回溯删除元素
  function dfs(start, path) {
    // 递归终止条件，当递归的位置等于 k 时，将当前的组合加入到结果集中
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    // 递归的过程，从当前递归的起始值开始，递归的下一个位置，递归的起始值加一
    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(1, []);

  return res;
}

// 测试用例
console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
console.log(combine(5, 3)); // [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
