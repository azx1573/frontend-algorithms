/**
 * 成绩排序，根据输入的排序方式，对成绩进行排序
 * 思路：
 * 1. 将输入的字符串转换为数组，并提取重要信息，比如学生数、排序方式、学生姓名和成绩
 * 2. 根据排序方式对成绩进行排序
 * 3. 返回排序后的结果
 * @param str string字符串
 * @returns string字符串
 */
function sortScore(str: string): string {
  let inputStr: string[] = str.split("\n");

  let stuNum: number = Number(inputStr.shift());
  let sortType: number = Number(inputStr.shift());

  let scoreList = inputStr
    .slice(0, stuNum)
    .map((stu: string) => stu.split(" "))
    .filter((stu: string[]) => stu.length === 2)
    .map(([name, score]: string[]) => ({
      name,
      score: Number(score),
    }));

  if (sortType == 0) {
    scoreList.sort(
      (a: { score: number }, b: { score: number }) => b.score - a.score
    );
  } else {
    scoreList.sort(
      (a: { score: number }, b: { score: number }) => a.score - b.score
    );
  }

  return scoreList
    .map((stu: { name: string; score: number }) => `${stu.name} ${stu.score}`)
    .join("\n");
}

const caseNo = sortScore(`3
0
fang 90
yang 50
ning 70`);

const caseNo2 = sortScore(`3
1
fang 90
yang 50
ning 70`);
console.log(caseNo, caseNo2);
