/*
 * 求最小调整次数:
 * 1. 添加时可以头部添加，可以尾部添加
 * 2. 移除时只能头部移除
 */
function minimumAdjustments(n, instructions) {
    // 1. 定义count，保存最小调整次数，定义一个操作队列queue,用于保存内容的出入栈
    var count = 0;
    var queue = [];
    // 2. 遍历输入的内容,分别取每一部分的值
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var cur = instructions_1[_i];
        var _a = cur.split(" ").filter(Boolean), position = _a[0], action = _a[1], num = _a[2];
        // 3. 将每一个内容打散，如果是“头部添加”，则queue.unshift(xx)
        if (position === "head" && action === "add") {
            queue.unshift(Number(num));
        }
        else if (position === "tail" && action === "add") {
            // 4. 如果是“尾部添加”，则queue.push(xx)
            queue.push(Number(num));
        }
        else {
            // 5. 如果是移除操作，需要区分队列是否符合预期(即队列排布为1-n升序排序)
            if (isExpected(queue)) {
                // 5.1 如果符合预期，直接移除 queue.shift(xx)
                queue.shift();
            }
            else {
                // 5.2 如果不符合预期，需要调整后移除，调整次数count++
                queue.sort(function (a, b) { return a - b; });
                count++;
                queue.shift();
            }
        }
    }
    // 6. 返回count即为最小操作次数
    return count;
}
var isExpected = function (list) {
    return list.every(function (item, index) { return index === 0 || list[index] > list[index - 1]; });
};
// 测试用例
console.log(minimumAdjustments(5, [
    "head add 1",
    "tail add 2",
    "remove",
    "head add 3",
    "tail add 4",
    "head add 5",
    "remove",
    "remove",
    "remove",
    "remove",
])); // 输出 1
console.log(minimumAdjustments(2, ["tail add 1", "head add 2", "remove", "remove"])); // 输出 1
console.log(minimumAdjustments(3, [
    "head add 3",
    "head add 2",
    "head add 1",
    "remove",
    "remove",
    "remove",
])); // 输出 0
console.log(minimumAdjustments(2, ["head add 1", "tail add 2", "remove", "remove"])); // 输出 0
