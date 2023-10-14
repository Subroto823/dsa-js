/**
 * LinkedList - Basic Implementation
 *
 * Time Complexity:
 * - prepend: O(1)
 * - append: O(n) 
 *
 * - It is possible to append a new node in constant time, but that involves maintaining a tail pointer that always point at the last node in the list
 */

const { Node } = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
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
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }

        this.size++
    }

    remove(value) {
        if (this.isEmpty()) return null;

        let removeNode = null;

        if (this.head.value === value) {
            removeNode = this.head;
            this.head = this.head.next;
            removeNode.next = null;
            this.size--;
        } else {
            let prev = this.head;

            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }

            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                removeNode.next = null;
                this.size--;
            }
        }

        return removeNode;
    }

    search(value) {
        if (this.isEmpty()) return null;

        let curr = this.head;
        while (curr && curr.value !== value) {
            curr = curr.next;
        }

        return curr;
    }

    reverse() {
        let prev = null;
        let curr = this.head;

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
    list.append(20);
    list.prepend(10);
    list.insertAt(2, 30);
    list.print();

    list.reverse();
    list.print();
}

if (require.main === module) main();

module.exports = {
    LinkedList
}