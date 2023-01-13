/*
 * The time complexity of deque() method is linear - O(n) , Because we have used shift() inside the dequeue. We can optimize the Big-O to Constant complexity of O(1) - using object instead of array as the list.
 *
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


const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());