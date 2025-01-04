/**
 * Check if a number is a power of three
 */

/**
 * 方法一：迭代
 * 思路：如果一个数是 3 的幂，则一定可以被3整除，且可以一直除以 3，直到最后结果为 1
 * @param n number
 * @returns  boolean
 */
export function isPowerOfThree(n: number): boolean {
  if (n < 1) {
    return false;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

// test cases
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
