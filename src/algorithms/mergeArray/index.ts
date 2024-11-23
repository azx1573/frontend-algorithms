/**
 * 合并两个有序数组-直接合并后排序
 * 需注意：
 * 1. 两个数组是有序数组，合并会也要保持有序
 * 2. 假设空间充足，不需要考虑数组长度问题
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
function mergeTwoArray(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
}

const res = mergeTwoArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
console.log(res);
