/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(a, b) {
    let d = new ListNode(0), p = d, c = 0;

    while (a || b || c) {
        let s = (a?.val ?? 0) + (b?.val ?? 0) + c;
        c = Math.floor(s / 10);
        p = p.next = new ListNode(s % 10);
        a = a?.next;
        b = b?.next;
    }

    return d.next;
};
