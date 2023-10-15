/**
 * Queue
 * 
 * Time Complexity:
 * - enqueue: O(1)
 * - dequeue: O(1)
 */
const { LinkedList } = require("../linked-list/linked-list-with-tail-pointer");

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.list.removeFromFront().value;
        }
        return 'Queue is Empty :('
    }

    peek() {
        if (!this.isEmpty()) {
            return this.list.head.value;
        }
        return 'Queue is Empty :('
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    clear() {
        this.list.clear();
    }

    print() {
        return this.list.print();
    }
}


function main() {
    const queue = new LinkedListQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);


    queue.print();

    console.log(queue.dequeue());
    queue.print();

    console.log(queue.getSize());
    console.log(queue.peek());
}

if (require.main === module) main();


module.exports = LinkedListQueue;