/**
 * 成绩排序，根据输入的排序方式，对成绩进行排序
 * 思路：
 * 1. 将输入的字符串转换为数组，并提取重要信息，比如学生数、排序方式、学生姓名和成绩
 * 2. 根据排序方式对成绩进行排序
 * 3. 返回排序后的结果
 * @param str string字符串
 * @returns string字符串
 */
function sortScore(str) {
    var inputStr = str.split("\n");
    var stuNum = Number(inputStr.shift());
    var sortType = Number(inputStr.shift());
    var scoreList = inputStr
        .slice(0, stuNum)
        .map(function (stu) { return stu.split(" "); })
        .filter(function (stu) { return stu.length === 2; })
        .map(function (_a) {
        var name = _a[0], score = _a[1];
        return ({
            name: name,
            score: Number(score),
        });
    });
    if (sortType == 0) {
        scoreList.sort(function (a, b) { return b.score - a.score; });
    }
    else {
        scoreList.sort(function (a, b) { return a.score - b.score; });
    }
    return scoreList
        .map(function (stu) { return "".concat(stu.name, " ").concat(stu.score); })
        .join("\n");
}
var caseNo = sortScore("3\n0\nfang 90\nyang 50\nning 70");
var caseNo2 = sortScore("3\n1\nfang 90\nyang 50\nning 70");
console.log(caseNo, caseNo2);
