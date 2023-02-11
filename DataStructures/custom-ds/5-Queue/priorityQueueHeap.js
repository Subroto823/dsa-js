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
        this.size = 0;
        this.capacity = capacity;
        this.heap = new Array(capacity);
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
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
        let currentIndex = index;
        let children = this.heap[index];
        let parent = this.heap[this.parentIndex(index)];

        while(currentIndex < this.size && children.priority < parent.priority) {

        }
    }

    enqueue(item, priority) {
        if(this.isFull()) {
            process.stdout.write("Queue is full!");
        } else {
            const newTask = new Task(item, priority);
            this.heap[this.size++] = newTask;
            heapifyUp(this.size - 1);
        }
    }

    dequeue() {
        if (!this.isEmpty()) return this.collection.shift()[0];
    }

    front() {
        if (!this.isEmpty()) return this.collection[0][0];
    }

    printQueue() {
        if (isEmpty()) {
            process.stdout.write("Queue is empty!");
        } else {
            for (let i = 0; i < heapSize; i++) {
                process.stdout.write((i + 1) + " " + heap[i].task + " (priority " + heap[i].priority + ")\n");
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

queue.printQueue();