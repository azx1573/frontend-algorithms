/**
 * 两数相加
 * @param {*} l1
 * @param {*} l2
 */
function addTwoNumbers(l1, l2) {
  // 1. 定义一个空的虚拟头节点
  const dummy = new ListNode(0);
  // 2. 定义一个变量保存当前节点，初始值指向dummy
  let current = dummy;
  // 3. 定义一个变量carry保存进位信息，因为当前位置的进位信息下一个位置求和时会用到
  let carry = 0;

  // 4. 循环遍历链表直到所有链表都遍历完成或者进位值为0
  while (l1 || l2 || carry) {
    // 4.1 total = l1.value + l2.value + carry
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    const total = val1 + val2 + carry;
    // 4.2 carry是由total决定，因此total改变后更新carry的值，carry = Math.floor(total / 10);
    carry = Math.floor(total / 10);

    // 4.3 计算当前一次计算的最终值digit，digit = total % 10
    const digit = total % 10;

    // 4.4 创建一个新的节点保存num，并将当前节点挂到current中，即让current的next指向新节点：current.next = newNodeList
    current.next = new ListNode(digit);

    // 4.5 将current从dummy指向移动到current.next：current = current.next
    current = current.next;

    // 4.6 移动l1和l2继续向后遍历
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 测试用例
// 创建链表 l1: 2 -> 4 -> 3
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// 创建链表 l2: 5 -> 6 -> 4
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// 调用函数计算结果
let result = addTwoNumbers(l1, l2);

// 输出结果链表的值
const output = [];
while (result) {
  output.push(result.val);
  result = result.next;
}
console.log(output); // [7, 0, 8]
