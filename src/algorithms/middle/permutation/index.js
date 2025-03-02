/**
 * 有重复元素的全排列，解题思路：
 * 1. 定义一个结果数组result，一个字符数组arr，一个字符数组长度len
 * 2. 定义一个swap函数，用于交换数组元素位置
 * 3. 定义一个dfs函数，用于递归寻找全排列
 * 4. 在dfs函数中，定义一个Set集合used，用于存储已经组合过的字符
 * 5. 在dfs函数中，遍历arr数组，如果used集合中已经存在当前字符，则跳过当前循环
 * 6. 在dfs函数中，如果used集合中不存在当前字符，则将当前字符添加到used集合中
 * 7. 在dfs函数中，交换start和i的位置，寻找其它的组合，递归确定下一个位置的字符
 * 8. 在dfs函数中，如果start和len相等退出后，需要回溯恢复数组元素位置寻找其它的组合
 * 9. 最后返回result数组
 * @param {*} s
 * @returns
 */
function permutation(s) {
  let result = [];
  let arr = s.split("");
  let len = arr.length;

  function swap(list, i, j) {
    [list[i], list[j]] = [list[j], list[i]];
  }

  function dfs(start) {
    // 1. 判断终止条件,start和len相等则证明已到达最深层级，直接退出当前dfs
    if (start === len) {
      result.push(arr.join(""));
      return;
    }

    // 2. 定义Set集合存储已经组合过的字符
    let used = new Set();

    for (let i = start; i < len; i++) {
      let cur = arr[i];

      // 2.1 如果已经取过了，则继续下一轮循环
      if (used.has(cur)) {
        continue;
      }

      // 2.2 如果没有则需要将cur添加到used中
      used.add(cur);

      // 2.3 交换start和i的位置，寻找其它的组合
      swap(arr, start, i);

      // 2.4 递归确定下一个位置的字符
      dfs(start + 1);

      // 2.5 如果start和len相等退出后，需要回溯恢复数组元素位置寻找其它的组合
      swap(arr, start, i);
    }
  }

  dfs(0);

  return result;
}

const permutations = permutation("qqe");
const permutations2 = permutation("qwe");
console.log(permutations, permutations2);
