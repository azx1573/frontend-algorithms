// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x \*\* 0.5 。

/**
 * 计算x的平方根：
 * 方案一（最简方案）：使用Math.sqrt()函数
 * @param {number} x
 * @returns {number}
 */

export const mySqrt = (x: number): number => {
  return Math.floor(Math.sqrt(x));
};

/**
 * 计算x的平方根：
 * 方案二：二分查找
 * 【思路分析】：对于任何非负数x，它的平方根一定小于等于x/2+1,(当x>4时)，即在[0,x/2+1]区间内查找满足条件的数
 * 1.当x=0时，返回0
 * 2. 初始化左指针left=1，右指针right=x/2+1
 * 3. 当left<right时，执行循环
 * 4. 计算中间值mid=(left+right+1)/2：这是因为
 * 时间复杂度O(logN)
 * 空间复杂度O(1)
 * 【代码分析】
 * 1. 首先排除x为0的情况
 * 2. 初始化左右指针，左指针为1(0已经考虑了)，右指针为x/2+1(上面有解释)
 * 3. 当左指针小于右指针时，执行循环
 * 4. 计算中间值 mid=(left+right+1)/2，这里+1是为了避免死循环，举例：当left=1，right=2时，Math.floor((1+2)/2)=1，如果不加1，那么left始终等于mid,导致范围没法缩小出现死循环
 * 5. 如果mid*mid>x,说明mid的平方大于x，那么需要将right向前移动一位缩小范围： right=mid-1
 * 6. 如果mid*mid<=x,说明mid的平方小于等于x，那么需要将left向后移动一位缩小范围：left=mid, 这里left=mid而不是left=mid+1, 如果mid的平方等于x, 那么mid就是x的平方根，如果mid的平方根小于x,那么x的平方根一定在mid的右边，所以left可以直接赋值为mid继续缩小范围w
 * 7. 返回left，这是因为left是最接近x的平方根的整数值
 * @param {number} x
 * @returns {number}
 */
export const mySqrt2 = (x: number): number => {
  if (x === 0) return 0;

  let left = 0;
  let right = Math.floor(x / 2) + 1;

  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

// test cases
console.log(mySqrt2(4)); // 2
console.log(mySqrt2(8)); // 2
console.log(mySqrt2(9)); // 3
console.log(mySqrt2(16)); // 4
console.log(mySqrt2(45)); // 6
