/**
 * Queue - Basic Implementation With Array
 * 
 * Time Complexity:
 * - enqueue: O(1)
 * - dequeue: O(n)
 * 
 * Using an object-based list can optimize the time complexity for dequeue to O(1) instead of O(n).
 */

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) { 
        this.items.push(element);
    }

    dequeue() {
        if(!this.isEmpty()) {
            return this.items.shift();
        }
        return "Queue is empty!!";
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}


function main() {
    const queue = new Queue();

    console.log(queue.isEmpty());

    queue.enqueue(20);
    queue.enqueue(10);
    queue.enqueue(30);
    console.log(queue.size());
    queue.print();

    console.log(queue.dequeue());
    console.log(queue.peek());
}

if (require.main === module) main();

module.exports = Queue;