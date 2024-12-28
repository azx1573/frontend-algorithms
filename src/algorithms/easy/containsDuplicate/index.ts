/**
 * 方法一：判断数组中是否有重复元素
 * @param nums
 * @returns
 */
function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

/**
 * 方法二：去重后判断数组长度是否相等
 * @param nums
 */
function containsDuplicate2(nums) {
  return new Set(nums).size !== nums.length;
}
