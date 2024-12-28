/**
 * 删除数组中的重复项，要求修改原数组，并返回修改后的数组长度
 */
function RemoveSame() {
  // 方案一：采用暴力解法
  RemoveSame.prototype.remove = function (arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--;
          len--;
        }
      }
    }
  };

  /**
   * 方案二：采用双指针法
   * 思路：
   * 1. 定义两个指针，一个慢指针slow，一个快指针fast
   * 2. 遍历数组，当找到不同的元素时，将慢指针移动到下一个位置，并将快指针的值赋给慢指针的值
   * 3. 最后返回慢指针的位置+1，即为修改后的数组长度
   * @param {*} arr
   * @returns
   */
  RemoveSame.prototype.remove2 = function (arr) {
    const len = arr.length;
    let slow = 0;
    for (let fast = 1; fast < len; fast++) {
      if (arr[slow] !== arr[fast]) {
        slow++;
        arr[slow] = arr[fast];
      }
    }
    return slow + 1;
  };

  /**
   * 定义一个快慢指针，快指针用于遍历数组，慢指针用于记录不同的元素，当快指针遇到不同的元素时，将其赋值给慢指针，并将慢指针+1，最后返回慢指针+1，即为修改后的数组长度
   * @param {*} nums
   * @returns
   */
  RemoveSame.prototype.remove3 = function (nums) {
    let len = nums.length;
    let slow = 1,
      fast = 1;
    while (fast < len) {
      if (nums[fast] !== nums[fast - 1]) {
        nums[slow] = nums[fast];
        slow++;
      }
      fast++;
    }
    return slow;
  };
}
