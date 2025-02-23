/*
 * 求最小调整次数:
 * 1. 添加时可以头部添加，可以尾部添加
 * 2. 移除时只能头部移除
 */
function minimumAdjustments(n: number, instructions: string[]): number {
  // 1. 定义count，保存最小调整次数，定义一个操作队列queue,用于保存内容的出入栈
  let count = 0;
  let queue = [];

  // 2. 遍历输入的内容,分别取每一部分的值
  for (const cur of instructions) {
    let [position, action, num] = cur.split(" ").filter(Boolean);

    // 3. 将每一个内容打散，如果是“头部添加”，则queue.unshift(xx)
    if (position === "head" && action === "add") {
      queue.unshift(Number(num));
    } else if (position === "tail" && action === "add") {
      // 4. 如果是“尾部添加”，则queue.push(xx)
      queue.push(Number(num));
    } else {
      // 5. 如果是移除操作，需要区分队列是否符合预期(即队列排布为1-n升序排序)
      if (isExpected(queue)) {
        // 5.1 如果符合预期，直接移除 queue.shift(xx)
        queue.shift();
      } else {
        // 5.2 如果不符合预期，需要调整后移除，调整次数count++
        queue.sort((a, b) => a - b);
        count++;
        queue.shift();
      }
    }
  }

  // 6. 返回count即为最小操作次数
  return count;
}

const isExpected = (list: number[]) =>
  list.every((item, index) => index === 0 || list[index] > list[index - 1]);

// 测试用例
console.log(
  minimumAdjustments(5, [
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
  ])
); // 输出 1

console.log(
  minimumAdjustments(2, ["tail add 1", "head add 2", "remove", "remove"])
); // 输出 1

console.log(
  minimumAdjustments(3, [
    "head add 3",
    "head add 2",
    "head add 1",
    "remove",
    "remove",
    "remove",
  ])
); // 输出 0

console.log(
  minimumAdjustments(2, ["head add 1", "tail add 2", "remove", "remove"])
); // 输出 0
