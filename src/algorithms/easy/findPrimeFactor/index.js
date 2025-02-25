/*
 * 找出一个数的所有质数因子，使得当前数的所有质数因子乘积为它本身，思路：
 * 1. 一个数的所有质数因子乘积一定是等于这个数本身，这是基于数学推理
 * 2. 每次将 n 除以一个质数因子后，待分解的数 n 的值会变小。这样做可以减少后续需要尝试的质数范围，提高分解的效率
 */
function findPrimeFactor(num) {
    // 1. 将数据转换为安全数字
    var n = parseInt(num.toString());
    // 2. 定义factor保存每个质数因子，最小质数为2，保存result记录所有的质数因子集合
    var factor = 2;
    var result = [];
    // 3. 如果n > 1时，持续循环找出其余质数因子
    while (n > 1) {
        // 4. 如果factor能被n整除，则factor为num的质数因子
        if (n % factor === 0) {
            result.push(factor);
            n = Math.floor(n / factor);
        }
        else {
            // 5. 如果factor无法被n整除，则需要factor++继续寻找
            factor++;
        }
    }
    return result;
}
var res1 = findPrimeFactor(180);
var res2 = findPrimeFactor(47);
console.log(res1, res2);
