/**
 * 部门人力分配问题，详细解释请参考 index.md
 * 解题思路：二分查找
 * @param M number
 * @param requirements
 * @returns  number
 */
function calculateResult(M: number, requirements: number[]): number {
  // 采用二分查找法,必须先对需求进行排序以供后续安排：
  requirements.sort((a, b) => a - b);
  // 1. 先定义left，初始值为1，定义right，初始值为需求数总和，定义result保存最终result
  let left = 1;
  let right = requirements.reduce((acc, cur) => acc + cur, 0);
  let result = right;

  // 2. 采用while循环，如果当前人力mid能完成需求，则right = mid - 1，尝试最小人力，如果完不成则left = mid + 1, 扩大人力
  while (left <= right) {
    // 1. 找到mid
    let mid = Math.floor((left + right) / 2);
    if (canCompleteWithGivenManpower(M, requirements, mid)) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }

  // 3. 返回result
  return result;
}

/*
 * 判断当前给定人力能否完成需求：
 * 1. 每个月最多2个需求
 * 2. 当月工作量不超过给定人力工作量
 */
function canCompleteWithGivenManpower(
  M: number,
  requirements: number[],
  manPower: number
) {
  // 1. 定义month,用于存储每个月在满足需求的条件下最大的月份数
  let month = 0;

  // 2.记录每次需要完成的需求数
  let i = 0;

  // 3. 开发遍历需求池
  while (i < requirements.length) {
    // 4. 定义每个月工作量currentMonthWorkload，定义tasks记录每个月的任务数

    let currentMonthWorkload = 0;
    let tasks = 0;

    // 5. 如果同时满足每个月需求数不超过2且当月工作量不超过最大人力时，记录当月最大工作量，否则移到下个月
    while (
      i < requirements.length &&
      tasks < 2 &&
      currentMonthWorkload + requirements[i] <= manPower
    ) {
      tasks++;
      currentMonthWorkload += requirements[i];
      i++; // 继续下一个任务
    }

    // 6. 当月任务需求已满，如果month大于最大月数M则表示当期的manPower人力无法完成需求
    month++;
    if (month > M) {
      return false;
    }
  }

  // 7. 整个任务分完了，走到这里证明manPower可以完成所有需求
  return true;
}

// 示例用例
const M = 3;
const requirements = [3, 5, 3, 4];
console.log(calculateResult(M, requirements)); // 应该输出6

// const M = 2;
// const requirements = [3, 5, 3, 4];
// console.log(calculateResult(M, requirements)); // 应该输出9
