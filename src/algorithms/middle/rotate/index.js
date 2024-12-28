/**
 *  翻转数组
 * @param {*} nums
 * @param {*} start
 * @param {*} end
 */

/**
 * 翻转数组
 * @param {*} nums
 * @param {*} start
 * @param {*} end
 */
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

/**
 * 数组轮转方案一：特殊翻转法
 * 1. 先将整个数组翻转
 * 2. 再将前k个元素翻转
 * 3. 最后将后n-k个元素翻转
 * @param {*} nums
 * @param {*} k
 */
function rotate(nums, k) {
  const n = nums.length;
  k %= n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

/**
 * 数组轮转方案二
 */
function rotate2(nums, k) {
  const len = nums.length;
  k %= len;
  if (k === 0) return nums;
  nums.unshift(...nums.splice(-k));
}
