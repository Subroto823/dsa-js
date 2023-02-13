/*
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
        items = new int[capacity];
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    size() {
        return this.size;
    }

    isFull() {
        return (this.size() === capacity);
    }

    isEmpty() {
        return this.size() == 0;
    }

    insertFront(value) {
        if (this.isFull()) {
            process.stdout.write("No space left!\n");
            return;
        }

        if (front == -1) {
            front = 0;
            rear = 0;
        }
        else {
            front = (front != 0) ? --front : capacity - 1;
        }
        size++;
        items[front] = value;
    }

    insertRear(value) {
        if (isFull()) {
            process.stdout.write("No space left!\n");
            return;
        }

        if (front == -1) {
            front = 0;
            rear = 0;
        } else {
            rear = ++rear % capacity;
        }
        size++;
        items[rear] = value;
    }

    removeFromFront() {
        if (isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = items[front];
        items[front] = 0;

        // Deque has only one element
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = ++front % capacity;
        }
        size--;
        return elem;
    }

    removeFromRear() {
        if (isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }

        let elem = items[rear];
        items[rear] = 0;

        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            rear = (rear != 0) ? --rear : capacity - 1;
        }
        size--;
        return elem;
    }

    int getFront() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }
        return items[front];
    }

    int getRear() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
            return -1;
        }
        return items[rear];
    }

    print() {
        let i;
        if (this.isEmpty()) {
            process.stdout.write("Queue is Empty!\n");
        } else {
            for (i = front; i != rear; i = ++i % capacity) {
                process.stdout.write(items[i] + "  ");
            }
            process.stdout.write(items[i] + "\n");
        }
    }
}
        const dq = new DequeOptimized(5);

        dq.insertRear(12);
        dq.insertRear(14);
        dq.insertRear(10);
        dq.print();

        // dq.removeFromRear();
        // dq.print();

        dq.removeFromFront();
        dq.insertFront(4);
        dq.insertRear(15);
        dq.insertFront(2);
        dq.print();