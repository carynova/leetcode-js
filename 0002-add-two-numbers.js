/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Notice!
 * The lengths of the two linked-lists can be different.
 * Manage the carry bit of each step added, linked-list can be extended when
 * there is a carry left in the last operation.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var answer, p
    var carry = 0

    while (l1 || l2) {
        // 1. add
        var a = l1 ? l1.val : 0
        var b = l2 ? l2.val : 0
        var sum = a + b + carry
        carry = sum >= 10 ? 1 : 0

        // 2. store result
        var node = new ListNode(sum % 10)
        if (!answer) {
            answer = p = node
        } else {
            p.next = node
            p = node
        }

        // 3. to the next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    // notice if carry is produced at the last add op, linkedlist will be 
    // extended
    if (carry) {
        var node = new ListNode(carry)
        p.next = node
    }

    return answer
};
