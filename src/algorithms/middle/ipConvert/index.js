/**
 * ip地址转换
 * 1. 如果将传入的是十进制的ip地址转，需要换为标准的ip地址
 *    解题思路：
 *      1. 将十进制的ip地址转换为32位二进制，不足的补0
 *      2. 将32位二进制分为4组，每组8位，转换为十进制
 * 2. 如果传入的是标准的ip地址，需要转换为十进制的ip地址
 *   解题思路：
 *     1. 将ip地址用.分割
 *     2. 将打散后的ip地址转换为8位二进制。不足的补0
 *     3. 将所有的二进制组合起来成为32位二进制，然后转换为十进制
 * 杰斯
 * @param ip  传入的ip地址
 */
function ipConvert(ip) {
    // 1. 用简单的方法判断是否是合法的ip地址
    // 2. 是标准ip地址
    if (ip.split(".").length > 1) {
        // 2.1 将ip地址用.分割
        var ipList = ip.split(".");
        // 2.2 将打散后的ip地址转换为二进制
        var res = ipList
            .map(function (ip) {
            return Number(ip).toString(2).padStart(8, "0");
        })
            .join("");
        return parseInt(res, 2);
    }
    else {
        // 3. 是十进制ip地址
        // 3.1 将 十进制ip转换为32位二进制，不足的补0
        var ipList = Number(ip).toString(2).padStart(32, "0");
        // 3.2 将32位的二进制分为4组，每组8位，转换为十进制
        var matched = ipList.match(/\d{1,8}/g) || [];
        return matched.map(function (ip) { return parseInt(ip, 2); }).join(".");
    }
}
// 测试用例
console.log(ipConvert("10.0.3.193")); // 167773121
console.log(ipConvert("167773121")); // 10.0.3.193
console.log(ipConvert("167969729")); // 10.3.3.193
console.log(ipConvert("10.3.3.193")); // 167969729
