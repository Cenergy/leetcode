/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let n = new ListNode(null);
  let root = n;
  let carry = 0;
  while (l1 || l2 || carry) {
    let x1 = 0,
      x2 = 0;
    if (l1) {
      x1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      x2 = l2.val;
      l2 = l2.next;
    }
    let all = x1 + x2 + carry;
    carry = parseInt(all / 10);
    n.next = new ListNode(all % 10);
    n = n.next;
  }
  return root.next;
};
// @lc code=end
