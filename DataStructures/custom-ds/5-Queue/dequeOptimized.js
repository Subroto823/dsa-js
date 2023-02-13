/*
Optimized Deque - Circular Deque

Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the front or the rear. 
Thus, it does not follow FIFO rule (First In First Out).

Time complexity of

    removeFromFront() - O(1)
    insertFront() - O(1)
    removeFromRear() - O(1)
    insertRear() - O(1)
*/

class DequeOptimized {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity).fill(0);
        this.front = -1;
        this.rear = -1;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isFull() {
        return (this.size() === this.capacity);
    }

    isEmpty() {
        return this.size() === 0;
    }

    insertFront(value) {
        if (this.isFull()) {
            process.stdout.write("No space left!\n");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        }
        else {
            this.front = (this.front !== 0) ? --this.front : this.capacity - 1;
        }
        this._size++;
        this.items[this.front] = value;
    }

    insertRear(value) {
        if (this.isFull()) {
            process.stdout.write("No space left!\n");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = ++this.rear % this.capacity;
        }
        this._size++;
        this.items[this.rear] = value;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = this.items[this.front];
        this.items[this.front] = 0;

        // Deque has only one element
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = ++this.front % this.capacity;
        }
        this._size--;
        return elem;
    }

    removeFromRear() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = this.items[this.rear];
        this.items[this.rear] = 0;

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.rear = (this.rear !== 0) ? --this.rear : this.capacity - 1;
        }
        this._size--;
        return elem;
    }

    getFront() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }
        return this.items[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }
        return this.items[this.rear];
    }

    print() {
        let i;
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
        } else {
            for (i = this.front; i != this.rear; i = ++i % this.capacity) {
                process.stdout.write(this.items[i] + "  ");
            }
            process.stdout.write(this.items[i] + "\n");
        }
    }
}

module.exports = {
    DequeOptimized
}

// const dq = new DequeOptimized(5);

// dq.insertRear(5);
// dq.insertRear(7);
// dq.insertRear(8);
// dq.insertFront(2);
// dq.print();

// dq.removeFromFront();
// dq.print();