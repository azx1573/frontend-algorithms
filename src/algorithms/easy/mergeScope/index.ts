/**
 * 合并区间，非常详细的思路是：
 * 1. 先将区间数组按照区间的起始位置进行排序，这样可以合并的区间就会连在一起,合并的情况就只有两种
 *  1.1 第二个位置的起始位置小于等于第一个位置的结束位置，这种情况下可以合并
 *  1.2 第二个位置的起始位置大于第一个位置的结束位置，这种情况下不能合并，直接添加到结果数组中
 * 2. 遍历排序后的区间数组，如果当前区间的起始位置小于等于结果数组中最后一个区间的结束位置，说明可以合并，更新结果数组中最后一个区间的结束位置
 * @param intervals  区间数组
 * @returns
 */
function mergeScope(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  // Sort intervals by their start value
  intervals.sort((a, b) => a[0] - b[0]);

  const res: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1]; // 这里之所以

    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}

// 测试用例参考：
// [[10,30],[20,60],[80,100],[150,180]] => [[10,60],[80,100],[150,180]]
console.log(
  mergeScope([
    [10, 30],
    [20, 60],
    [80, 100],
    [150, 180],
  ])
); // [[10,60],[80,100],[150,180]]

console.log(
  mergeScope([
    [0, 10],
    [10, 20],
  ])
); // [[0,20]]

console.log(
  mergeScope([
    [1, 4],
    [0, 2],
  ])
); // [[0,4]]
