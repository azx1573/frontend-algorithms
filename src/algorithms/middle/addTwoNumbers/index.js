/**
 * 两数相加
 * @param {*} l1
 * @param {*} l2
 */
const addTwoNumbers = (l1, l2) => {
  // 换一种简单的思路，不用考虑进位，直接相加，然后再处理进位
  let dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;
  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    carry = Math.floor(sum / 10);
  }
};
