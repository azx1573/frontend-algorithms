/*
 * 找出一个数的所有质数因子，使得当前数的所有质数因子乘积为它本身，思路：
 * 1. 一个数的所有质数因子乘积一定是等于这个数本身，这是基于数学推理
 * 2. 每次将 n 除以一个质数因子后，待分解的数 n 的值会变小。这样做可以减少后续需要尝试的质数范围，提高分解的效率
 */
function findPrimeFactor(num) {
    // 1. 将数据转换为安全数字
    var n = parseInt(num.toString());
    // 2. 定义factor保存每个质数因子，最小质数为2，保存result记录所有的质数因子集合
    var result = [];
    // 3. 先单独处理2，因为2是最小的质数，且是唯一的偶数质数，减少循环次数
    while (n % 2 === 0) {
        result.push(2);
        n = n / 2;
    }
    // 4. 从3开始，每次递增2，因为偶数不可能是质数，减少循环次数
    var factor = 3;
    while (factor <= Math.sqrt(n)) {
        // 4.1 如果n能被factor整除，则将factor加入到result中，并将n除以factor
        while (n % factor === 0) {
            result.push(factor);
            n = n / factor;
        }
        factor += 2;
    }
    // 5. 如果n是一个大于2的质数
    if (n > 2) {
        result.push(n);
    }
    return result;
}
var res1 = findPrimeFactor(180);
var res2 = findPrimeFactor(47);
console.log(res1, res2);
