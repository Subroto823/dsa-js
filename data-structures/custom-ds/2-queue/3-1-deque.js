/*
Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the this.front or the this.rear. 
Thus, it does not follow FIFO rule (First In First Out).

Not optimized enough!!!

Time Complexity of

    removeFromFront() - O(n)
    insertFront() - O(n)
    removeFromRear() - O(1)
    insertRear() - O(1)
*/

class Deque {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
    }

    size() {
        return this.rear + 1;
    }

    isFull() {
        return (this.size() === this.capacity);
    }

    isEmpty() {
        return (this.front === -1);
    }

    insertFront(value) {
        if (this.isFull()) {
            process.stdout.write("No space left!");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        }
        else {
            for (let i = this.rear + 1; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.rear++;
        }
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
            this.rear++;
        }
        this.items[this.rear] = value;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = this.items[this.front];

        // queue has only one element
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {

            for (let i = 0; i < this.size() - 1; i++) {
                this.items[i] = this.items[i + 1];
            }
            this.items[this.rear--] = 0;
        }
        return elem;
    }

    removeFromRear() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = this.items[this.rear];

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.rear--;
        }
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
            for (i = this.front; i < this.rear; i++) {
                process.stdout.write(this.items[i] + "  ");
            }
            process.stdout.write(this.items[i] + "\n");
        }
    }
}

module.exports = {
    Deque
}

// const dq = new Deque(5);

// dq.insertRear(12);
// dq.insertRear(14);
// dq.insertRear(10);
// dq.print();

// dq.insertFront(7);
// dq.insertFront(8);
// dq.print();