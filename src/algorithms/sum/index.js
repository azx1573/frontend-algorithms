/**
 * 求解两数之和-暴力解法
 * 时间复杂度：O(n^2)
 */
function sum(nums, target) {
  let len = nums.len;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * 求解两数之和-哈希表解法
 * 时间复杂度：O(n)
 */
function sum(nums, target) {
  let len = nums.length;
  let map = new Map();

  for (let i = 0; i < len; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(111, sum([2, 7, 11, 15], 9)); // [0, 1]
console.log(222, sum([3, 2, 4], 6)); // [1, 2]
console.log(333, sum([3, 3], 6)); // [0, 1]
console.log(444, sum([1, 3, 5, 6], 3)); // []
