/**
 * Circular LinkedList with Tail Pointer
 *
 * Time Complexity:
 * - Prepend: O(1)
 * - Append: O(1)
 * - RemoveFromFront: O(1)
 * - RemoveFromEnd: O(n)
 */

const { Node } = require('./node');
const { CircularLinkedList } = require('./circular-linked-list');

class LinkedList extends CircularLinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    prepend(value) {
        let node = new Node(value);
        this.head = node;

        if (this.getSize() === 0) {
            node.next = this.head;
            this.tail = node;
        } else {
            node.next = this.tail.next;
            this.tail.next = node;
        }

        this.size++;
    }

    append(value) {
        if (!this.head) {
            this.prepend(value);
        } else {
            const node = new Node(value);

            node.next = this.head;
            this.tail.next = node;
            this.tail = node;

            this.size++;
        }
    }

    removeFromFront() {
        if (!this.head) return null;

        let removeNode = this.head;

        if (this.getSize() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removeNode.next;
            this.tail.next = this.head;
        }

        this.size--;
        return removeNode;
    }

    removeFromEnd() {
        if (!this.head) return null;

        let removeNode = null;

        if (this.getSize() === 1) {
            removeNode = this.head
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;

            while (curr.next !== this.tail) {
                curr = curr.next;
            }

            removeNode = this.tail;
            curr.next = removeNode.next;
            removeNode.next = null;
            this.tail = curr;
        }

        this.size--;
        return removeNode;
    }

    remove(value) {
        if (!this.head || value === undefined) {
            return null;
        }

        if (this.head.value === value) {
            return this.removeFromFront();
        } else if (this.tail.value === value) {
            return this.removeFromEnd();
        }

        let removeNode = null;
        let curr = this.head.next;                                             

        while (curr.value !== this.head.value && curr.next.value !== value) {
            curr = curr.next;
        }

        if (curr.next.value === value) {
            removeNode = curr.next;
            curr.next = removeNode.next;
            removeNode.next = null;
            this.size--;
        }

        return removeNode;
    }

    reverse() {
        if (!this.head || this.getSize() === 1) return;

        let cur = this.head;
        let prev = null;

        this.head = this.tail;
        this.tail = cur;

        while (cur.value !== this.head.value) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        
        cur.next = prev;
        this.tail.next = cur;
    }
}


function main() {
    const list = new LinkedList();

    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);
    list.printList();

    list.removeFromEnd();
    list.printList();

    list.reverse();
    list.printList();
}

if (require.main === module) main();


module.exports = {
    LinkedList
}