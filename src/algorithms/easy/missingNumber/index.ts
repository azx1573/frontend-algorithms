/**
 * Missing Number
 */

/**
 * 丢失的数字：给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数
 * 方案一：遍历 [0, n] 范围内的每一个数，判断是否在数组中，如果不在则返回
 */
export function missingNumber(nums: number[]): number {
  let len = nums.length;
  for (let i = 0; i <= len; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return -1; // Return -1 if no number is missing
}

/**
 * 方案二：求和，然后减去数组中的所有数，剩下的就是丢失的数字
 * 思路：[0, n] 这个范围内的所有数之和为 n * (n + 1) / 2
 * 1. 求出 [0, n] 这个范围内的所有数之和
 * 2. 减去数组中的所有数之和
 * 3. 剩下的就是丢失的数字
 */
export function missingNumber2(nums: number[]): number {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  return sum - nums.reduce((acc, cur) => acc + cur, 0);
}

/**
 * 方案三：异或运算
 * 思路：异或运算有以下几个性质
 * 1. 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a
 * 2. 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0
 * 3. 异或运算满足交换律和结合律，即 a ^ b ^ a = b ^ a ^ a = b ^ (a ^ a) = b ^ 0 = b
 * 4. 交换律：a ^ b = b ^ a
 * 5. 结合律：a ^ b ^ c = a ^ (b ^ c)
 */
export function missingNumber3(nums: number[]): number {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
}

/**
 * 方案四：哈希表，基本思路和方案一类似
 */
export function missingNumber4(nums: number[]): number {
  let set = new Set(nums);
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
}

// test cases for missingNumber
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber2([3, 0, 1])); // 2
console.log(missingNumber2([0, 1])); // 2
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber2([0])); // 1
console.log(missingNumber3([3, 0, 1])); // 2
console.log(missingNumber3([0, 1])); // 2
console.log(missingNumber3([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber3([0])); // 1
console.log(missingNumber4([3, 0, 1])); // 2
console.log(missingNumber4([0, 1])); // 2
console.log(missingNumber4([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber4([0])); // 1
