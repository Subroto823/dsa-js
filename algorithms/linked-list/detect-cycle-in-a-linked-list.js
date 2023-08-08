/*
# Detect Cycle in a LinkedList

# Implementation of Floyd's Tortoise and Hare Algorithm in JavaScript to detect cycles in a linked list.
# Time Complexity: O(n)
*/

const { ListNode } = require("./_node");

function hasCycle(head) {
    if (!head || !head.next) return false;

    let tortoise = head;
    let hare = head;

    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            return true;
        }
    }

    return false;
}


const node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creating a cycle

console.log(hasCycle(node1));

// In this example, the linked list formed by node1, node2, node3, node4, and node5 contains a cycle, so the hasCycle function will return true. If se remove the line node5.next = node2;, the linked list will not contain a cycle, and the function will return false.