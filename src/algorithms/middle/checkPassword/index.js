/**
 * 密码验证合格程序，密码合格的条件：
 * 1. 长度超过8位
 * 2. 包括大小写字母.数字.其它符号,以上四种至少三种
 * 3. 不能有相同长度超2的子串重复
 */
function checkPassword(str) {
    var checkLength = str.length > 8;
    //   检查密码类型
    var checkType = function (str) {
        var num = 0;
        if (/[A-Z]/.test(str))
            num++;
        if (/[a-z]/.test(str))
            num++;
        if (/\d/.test(str))
            num++;
        if (/[^A-Za-z0-9]/.test(str))
            num++;
        return num >= 3;
    };
    //   检查密码是否有相同长度超2的子串重复;
    var checkRepeat = function (str) {
        return !/(.{3,}).*\1/.test(str);
    };
    //   同时满足以上三个条件则返回OK，否则返回NG
    if (checkLength && checkType(str) && checkRepeat(str)) {
        return "OK";
    }
    else {
        return "NG";
    }
}
// 测试用例
console.log(checkPassword("123456")); // NG
console.log(checkPassword("123456789")); // NG
console.log(checkPassword("021Abc9Abc1")); // NG
console.log(checkPassword("021Abc9000")); // OK
console.log(checkPassword("Abc1@")); // NG
console.log(checkPassword("A1@ababa@1A")); // OK
