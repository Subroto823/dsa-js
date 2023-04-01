/*
Priority Queue(Min Heap Implementation)

    It can be implemented using other Data Structures but is commonly implemented using a Heap.
    Each node contains a priority. When we enqueue a node to the queue, it’s “bubbled up” to its place in the queue.

    Time Complexity:
        enqueue() - O()
        dequeue() - O()
*/
class Task {
    constructor(task, priority) {
        this.task = task;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(capacity) {
        this.length = 0;
        this.capacity = capacity ? capacity : Infinity;
        this.heap = [];
    }

    isEmpty() {
        return this.length === 0;
    }

    isFull() {
        return this.length === this.capacity;
    }

    parentIndex (index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        let task = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = task;
    }

    heapifyUp(index) {
        let heap = this.heap;

        let currentIndex = index;
        let parentIndex = this.parentIndex(index);

        while(currentIndex > 0 && heap[currentIndex].priority < heap[parentIndex].priority) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.parentIndex(parentIndex);
        }
    }

    enQueue(item, priority) {
        if(this.isFull()) {
            process.stdout.write("Queue is full!\n");
        } else {
            const newNode = new Task(item, priority);
            this.heap.push(newNode);
            this.heapifyUp(++this.length - 1);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let l = (2 * i) + 1;
        let r = (2 * i) + 2;

        if(l < this.length && this.heap[l].priority < this.heap[smallest].priority) {
            smallest = l;
        }

        if(r < this.length && this.heap[r].priority < this.heap[smallest].priority) {
            smallest = r;
        }

        if(smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    deQueue() {
        let deleteTask = null;
        let heap = this.heap;

        if (!this.isEmpty()) {
            deleteTask = heap[0];
            heap[0] = heap.pop();
            --this.length;

            this.heapifyDown(0);
        }
        return deleteTask;
    }

    front() {
        if (!this.isEmpty()) return this.heap[0];
    }

    printQueue() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is empty!");
        } else {
            for (let i = 0; i < this.length; i++) {
                process.stdout.write((i + 1) + " " + this.heap[i].task + " (priority " + this.heap[i].priority + ")\n");
            }
        }
        process.stdout.write("\n");
    }
}

const queue = new PriorityQueue();
queue.enQueue("Coding", 3);
queue.enQueue("Sleeping", 2);
queue.enQueue("Music", 1);
queue.enQueue("Being sad for no reason for a while", 7);
queue.enQueue("Tv Series", 5);

queue.deQueue();
queue.printQueue();