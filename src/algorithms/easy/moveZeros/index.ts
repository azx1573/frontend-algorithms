/**
 * 移动零，在原数组上操作，将所有的 0 移动到数组的末尾，同时保持非零元素的相对顺序
 */

/**
 * 移动零方案一：双指针
 * 详细思路：
 * 1. 使用双指针，一个指针用于遍历数组，另一个指针用于指向非零元素
 * 2. 当遇到非零元素时，将非零元素与j指针指向的元素交换，同时j指针后移
 * 3. 遍历结束后，所有的非零元素都被移动到数组的前面，而0都被移动到数组的后面
 */
export function moveZeros(nums: number[]): void {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
}

/**
 * 测试用例
 */
let nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums); // [1, 3, 12, 0, 0]
