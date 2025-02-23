/*
 * 等分苹果
 */
function divideApple(n, weights) {
  // 1. 求出最小苹果重量
  let minWeight = Math.min(...weights);

  // 2. 定义totalWeight用于保存苹果总重量
  let totalWeight = weights.reduce((acc, cur) => acc + cur, 0);

  // 3. 定义xorSum用于保存一堆苹果异或综合
  let xorSum = weights.reduce((acc, cur) => acc ^ cur, 0);

  // 4. 如果xorSum不为0则无法等分，不符合A的需求
  if (xorSum !== 0) return -1;

  // 5. 苹果总重量减去最小的苹果重量则为B最多可分得的
  return totalWeight - minWeight;
}

const n1 = 3;
const weights1 = [3, 5, 6];
console.log(divideApple(n1, weights1)); // 应该输出11

const n2 = 8;
const weights2 = [7258, 6579, 2602, 6716, 3050, 3564, 5396, 1773];
console.log(divideApple(n2, weights2)); // 应该输出35165

// 无法满足异或和为0的用例
const n3 = 2;
const weights3 = [1, 2];
console.log(divideApple(n3, weights3)); // 应该输出-1

const n4 = 4;
const weights4 = [2, 4, 6, 7];
console.log(divideApple(n4, weights4)); // 应该输出-1

// 总重量为偶数但异或和不为0
const n5 = 3;
const weights5 = [1, 3, 5];
console.log(divideApple(n5, weights5)); // 应该输出-1

// 边界情况：无法分割的单个苹果
const n6 = 1;
const weights6 = [5];
console.log(divideApple(n6, weights6)); // 应该输出-1

// 所有苹果异或和为0但无法等分（需要动态规划验证的用例）
const n7 = 4;
const weights7 = [3, 3, 3, 3];
console.log(divideApple(n7, weights7)); // 应该输出9（总重量12-3=9）
