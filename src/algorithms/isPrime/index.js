/**
 * 判断一个数据是否是质数
 * 判断标准：除了1和它本身以外，不能被其他自然数整除(不能被2~num-1整除)
 * @param {*} num
 */
function isPrime(num) {
  // 如果一个数小于2，那么它不是质数
  if (num < 2) return false;

  //   方法一：查询范围为2~num-1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * 基于上述版本进行优化
 * @param {*} num
 * @returns boolean
 */
function isPrimeNew(num) {
  // 如果一个数小于2，那么它不是质数
  if (num < 2) return false;

  //   方法二：查询范围为2~Math.sqrt(num)，这是因为一个合数最小的因子一定是小于等于它的平方根的，所以只需要遍历到平方根即可
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(111, isPrimeNew(6));
