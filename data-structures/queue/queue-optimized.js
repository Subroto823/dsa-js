/**
 * Queue
 * 
 * Time Complexity:
 * - enqueue: O(1)
 * - dequeue: O(1)
 */

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) { 
        this.items[this.rear++] = element;
    }

    dequeue() {
        if(!this.isEmpty()) {
            const item =  this.items[this.front];
            delete this.items[this.front++];
            if (this.isEmpty()) this.clear();
            return item;
        }
        return "Queue is empty!!";
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front];
        }
        return "Queue is empty!!";;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    clear() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    print() {
        let data = ''
        for (let i = this.front; i < this.rear; i++) {
            data += this.items[i] +' '
        }
        console.log(data);
    }
}


function main() {
    const queue = new Queue();

    queue.enqueue(20);
    queue.enqueue(10);
    queue.enqueue(30);

    console.log(queue.size());
    queue.print();

    console.log(queue.dequeue());
    console.log(queue.peek());
    queue.print();
}

if (require.main === module) main();


module.exports = Queue;