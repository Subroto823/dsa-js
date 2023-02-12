/*
Circular LinkedList - Basic Implementation

Time complexity: 
    # prepend O(n)
    # append O(n)
    # removeFromFront(n)
    # removeFromEnd(n)

        # it is possible to append or prepend a new node in constant time, but that involves maintaining a tail pointer that always point at the last node in the list

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value, prependFlag = false) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            node.next = this.head;
        } else {
            let curr = this.head;

            while (curr.next.value !== this.head.value) {
                curr = curr.next;
            }
            curr.next = node;
            node.next = this.head;

            /* if the prepend flag is true, then make the new node as head node (to make the append method work as prepend)
            */
            if (prependFlag) this.head = node;
        }
        this.size++;
        return node;
    }

    prepend(value) {
        this.append(value, true);
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.prepend(value);
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
        }
        this.size++;
    }

    remove(value) {
        if (this.isEmpty() || value === undefined) return null;

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

        if (this.head.value === value) {
            this.head = this.getSize() !== 0 ? removeNode.next : null;
        }
        return removeNode;
    }

    removeFrom(index) {
        if (this.isEmpty() || index < 0 || index >= this.getSize() || index === undefined) return null;

        let removeNode = null;

        if (index === 0) {
            removeNode = this.remove(this.head.value);
        } else {
            let curr = this.head;
            let count = index - 1;

            while (curr.next.value !== this.head.value && count) {
                curr = curr.next;
                count--;
            }

            removeNode = curr.next;
            curr.next = removeNode.next;
            this.size--;
        }
        return removeNode;
    }

    get(index) {
        if (this.isEmpty() || index < 0 || index >= this.getSize() || index === undefined) return;

        let curr = this.head;
        let count = index;

        while (count) {
            curr = curr.next;
            count--;
        }
        return curr.value;
    }

    search(value) {
        if (value === undefined || this.isEmpty()) return -1;

        let i = 0;
        let len = this.getSize();
        let cur = this.head;

        while (i < len) {
            if (cur.value === value) {
                return i;
            }
            cur = cur.next;
            i++;
        }
        return -1;
    }

    reverse() {

    }

    printList() {
        if (!this.head) {
            process.stdout.write("List is empty!\n");
            return;
        }

        let curr = this.head;
        let data = '';
        while (curr.next.value !== this.head.value) {
            data += curr.value + " ";
            curr = curr.next;
        }
        data += curr.value;
        process.stdout.write(data + "\n");
    }
}

const list = new CircularLinkedList();
list.append(5);
list.append(8);
list.append(10);
list.prepend(3);
list.insert(2, 7);

list.printList();
list.printList();