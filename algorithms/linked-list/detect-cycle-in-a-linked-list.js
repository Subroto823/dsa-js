Sure, here's an implementation of Floyd's Tortoise and Hare Algorithm in JavaScript to detect cycles in a linked list:

javascript

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if there are 0 or 1 nodes
    }
    
    let tortoise = head;
    let hare = head.next;
    
    while (tortoise !== hare) {
        if (!hare || !hare.next) {
            return false; // No cycle if hare reaches end of list
        }
        tortoise = tortoise.next;
        hare = hare.next.next;
    }
    
    return true; // Cycle detected
}

To use this code, you would need to create a linked list of ListNode objects where each node's next points to the next node in the list. To test for a cycle, you can call the hasCycle function with the head of the linked list as an argument. If the function returns true, a cycle exists in the linked list; if it returns false, there is no cycle.

Here's an example of how you might create a linked list and test for a cycle:

javascript

// Create nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

// Link nodes to form a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creating a cycle

// Test for cycle
console.log(hasCycle(node1)); // Output: true

In this example, the linked list formed by node1, node2, node3, node4, and node5 contains a cycle, so the hasCycle function will return true. If you remove the line node5.next = node2;, the linked list will not contain a cycle, and the function will return false.