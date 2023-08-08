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
        tortoise = tortoise.next;         // Move tortoise by 1 step
        hare = hare.next.next;           // Move hare by 2 steps

        if (tortoise === hare) {
            return true; // Cycle detected
        }
    }

    return false;
}


const node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    node5 = new Node(5);

// Link nodes to form a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creating a cycle

console.log(hasCycle(node1));

// In this example, the linked list formed by node1, node2, node3, node4, and node5 contains a cycle, so the hasCycle function will return true. If you remove the line node5.next = node2;, the linked list will not contain a cycle, and the function will return false.