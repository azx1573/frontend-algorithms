/**
 * 合并两个升序链表，非常详细的解题思路如下：
 * 1. 新建一个空链表 dummy，用于存储合并后的链表
 * 2. 新建一个指针 cur，指向 dummy
 * 3. 遍历 l1 和 l2，比较 l1 和 l2 的值，将较小的值连接到 cur 的后面
 * 4. 遍历结束后，将 l1 或 l2 中剩余的节点连接到 cur 的后面
 * 5. 返回 dummy.next
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let cur = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return dummy.next;
}
