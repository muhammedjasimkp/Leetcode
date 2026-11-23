/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        const first = prev.next;
        const second = prev.next.next;

        // Rewire pointers for the pair: prev -> second -> first -> rest
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Advance prev to the end of the swapped pair
        prev = first;
    }

    return dummy.next;
};