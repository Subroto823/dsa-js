/*
Circular LinkedList - Optimized Implementation with tail pointer

Time complexity: 
    # prepend O(1)
    # append O(1)
    # removeFromFront O(1)
    # removeFromEnd O(n)
*/

const { Node } = require('./Node');
const { CircularLinkedList } = require('./CircularLinkedList');

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

    insert(index, value) {
        if (index < 0 || index > this.getSize() || value === undefined) return;

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.getSize()) {
            this.append(value);
        } else {
            const node = new Node(value);
            let curr = this.head;
            let count = index - 1;

            while (count) {
                curr = curr.next;
                count--;
            }
            node.next = curr.next;
            curr.next = node;

            this.size++;
        }
    }

    removeFromFront() {
        if (!this.head) return null;

        let removeNode = this.head;

        if (this.getSize() === 1) {
            this.head = null;
        } else {
            this.head = removeNode.next;
            this.tail.next = this.head;
        }
        this.size--;
        return removeNode;
    }

    removeFromEnd() {
        if (!this.head) return null;

        let removeNode = this.head;

        if (this.getSize() === 1) {
            this.head = null;
        } else {
            let curr = this.head;

            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = this.tail.next;
            this.tail = curr;
        }
        this.size--;
        return removeNode;
    }

    remove(value) {
        if (!this.head || value === undefined) return null;

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
            this.size--;
        }

        return removeNode;
    }

    removeFrom(index) {
        if (!this.head || index < 0 || index >= this.getSize() || index === undefined) return null;

        if (index === 0) {
            return this.removeFromFront();
        } else if (index === this.getSize() - 1) {
            return this.removeFromEnd();
        }

        let removeNode = null;

        let curr = this.head;
        let count = index - 1;

        while (curr.next.value !== this.head.value && count) {
            curr = curr.next;
            count--;
        }

        removeNode = curr.next;
        curr.next = removeNode.next;
        this.size--;

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

module.exports = {
    LinkedList
}

// const list = new LinkedList();

// list.append(5);
// list.append(6);
// list.append(7);
// list.append(8);

// list.printList();

// list.reverse();
// list.printList();