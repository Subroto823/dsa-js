/**
 * Deque
 * 
 * Time Complexity:
 * - pop(): O(1)
 * - popleft(): O(1)
 * - append(): O(1)
 * - appendleft(): O(1)
 * 
 * A Deque, short for "Double-Ended Queue," is a data structure that allows you to insert and remove elements from both ends with efficient time complexity. 
 * It combines the features of both a stack (Last-In, First-Out) and a queue (First-In, First-Out).
 * 
 */

const { DoublyLinkedList } = require('../linked-list/doubly-linked-list');


class Deque {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    getSize() {
        return this.items.getSize();
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    appendleft(value) {
        this.items.prepend(value);
    }

    append(value) {
        this.items.append(value);
    }

    popleft() {
        if (this.isEmpty()) {
            process.stdout.write("Deque is empty :(\n");
            return null;
        }

        return this.items.removeFromFront().value;
    }

    pop() {
        if (this.isEmpty()) {
            process.stdout.write("Deque is Empty :(\n");
            return null;
        }

        return this.items.removeFromEnd().value;
    }

    clear() {
        this.items.clear();
    }

    peekFront() {
        if (this.isEmpty()) {
            process.stdout.write("Deque is Empty! :(");
            return null;
        }

        return this.items.head.value;
    }

    peekRear() {
        if (this.isEmpty()) {
            process.stdout.write("Deque is Empty :(\n");
            return null;
        }

        return this.items.tail.value;
    }

    print() {
        if (this.isEmpty()) {
            process.stdout.write("Deque is Empty :(\n");
            return;
        }

        this.items.print();
    }
}


function main() {
    const dq = new Deque();

    dq.append(5);
    dq.append(7);
    dq.append(8);

    dq.print();

    dq.appendleft(2)
    dq.print();

    dq.pop();
    dq.print();
}

if (require.main === module) main();


module.exports = Deque;