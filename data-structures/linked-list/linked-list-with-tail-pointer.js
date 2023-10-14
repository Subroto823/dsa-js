/**
 * LinkedList  - Optimized Implementation with Tail Pointer
 *
 * Time Complexity:
 * - prepend: O(1)
 * - append: O(1)
 * - removeFromFront: O(1)
 * - removeFromEnd: O(n)
 *
 * - This implementation optimizes the append operation by maintaining a tail pointer, allowing constant time complexity for appending new nodes.
 */

const { Node } = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) return null;

        const removeNode = this.head;
        this.head = this.head.next;
        removeNode.next = null;
        this.size--;

        return removeNode;
    }

    removeFromEnd() {
        if (this.isEmpty()) return null;

        const removeNode = this.tail;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;

            while (prev.next !== this.tail) {
                prev = prev.next;
            }

            prev.next = null;
            this.tail = prev;
        }

        this.size--;
        return removeNode;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let removeNode = null;

        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else if (index === this.size - 1) {
            return this.removeFromEnd();
        } else {
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            removeNode = prev.next;
            prev.next = removeNode.next;
            removeNode.next = null;
        }

        this.size--;
        return removeNode;
    }

    removeValue(value) {
        if (this.isEmpty()) return null;
        let removeNode;

        if (this.head.value === value) {
            removeNode = this.head
            this.head = this.head.next;
            this.size--;
            return removeNode;
        } else {
            let prev = this.head;
            let i = 1;

            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
                i++;
            }

            if (prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;

                if (i === this.size) this.tail = prev;
                removeNode.next = null;
                return removeNode;
            }

            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) return -1;

        let i = 0;
        let curr = this.head;

        while (curr) {
            if (curr.value === value) return i;
            curr = curr.next;
            i++;
        }

        return -1;
    }

    get(index) {
        if (this.isEmpty() || index < 0 || index >= this.size) {
            return null;
        }

        let i = 0;
        let curr = this.head;

        while (i < index) {
            curr = curr.next;
            i++;
        }

        return curr;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = curr;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;

        }

        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log("The list is empty!");
        } else {
            let curr = this.head;
            let listValues = '';

            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }
}


function main() {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);

    list.print();

    console.log(list.removeValue(40));
    list.print();

    console.log(list.removeValue(50))
    list.print();
}

if (require.main === module) main();


module.exports = {
    LinkedList
}
