/**
 * 求最长连续递增子序列的长度
 */

function findLengthOfLCIS(nums) {
  let max = 1;
  let count = 1;
  let len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 1;
    }
  }
  return max;
}

// 测试用例
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])); // 4

/**
 * 求最长连续递增子序列的长度和对应的序列，思路：
 * 1. 记录最长序列的长度和起始位置，初始化maxCount = 1, maxStart = 0
 * 2. 记录当前连续递增子序列的长度和起始位置，初始化currentCount = 1, currentStart = 0
 * 3. 从下标1开始，只要当前位置元素大于前一个元素，currentCount+1, 否则currentCount=1, currentStart=i
 * 4. 当currentCount > maxCount, 更新maxCount = currentCount, maxStart = currentStart
 */
function findLengthOfIncreaseSeq(nums) {
  let len = nums.length;
  if (len === 0) return { maxCount: 0, maxSubSeq: [] };

  //   1. 定义最长连续递增子序列的长度maxCont和起始位置maxStart
  let maxCount = 1;
  let maxStart = 0;

  //   2. 定义当前连续递增子序列的长度currentCount和起始位置currentStart
  let currentCount = 1;
  let currentStart = 0;
  //   3. 从下标1开始遍历数组;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    let pre = nums[i - 1];

    // 3.1 如果当前位置元素大于前一个元素，currentCount+1, 否则currentCount=1, currentStart=i
    if (cur > pre) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxStart = currentStart;
      }
      // 3.2 如果currentCount > maxCount, 更新maxCount = currentCount, maxStart = currentStart
    } else {
      currentCount = 1;
      currentStart = i;
    }
  }

  return { maxCount, maxSubSeq: nums.slice(maxStart, maxStart + maxCount) };
}

// 测试用例
console.log(findLengthOfIncreaseSeq([1, 3, 5, 4, 7])); // { maxCount: 3, maxSubSeq: [1, 3, 5] }
console.log(findLengthOfIncreaseSeq([2, 2, 2, 2, 2])); // { maxCount: 1, maxSubSeq: [2] }
console.log(findLengthOfIncreaseSeq([1, 3, 5, 7])); // { maxCount: 4, maxSubSeq: [1, 3, 5, 7] }
console.log(findLengthOfIncreaseSeq([1, 3, 5, 4, 7, 8, 2]));
