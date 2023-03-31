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
        this.heap = new Array(capacity).fill(null);
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

        while(currentIndex > 0 && children.priority < parent.priority) {
            this.swap(currentIndex, this.parentIndex(index));

            currentIndex = this.parentIndex(index);
            children = this.heap[currentIndex];
            parent = this.heap[this.parentIndex(children)];
        }
    }

    enQueue(item, priority) {
        if(this.isFull()) {
            process.stdout.write("Queue is full!");
        } else {
            const newTask = new Task(item, priority);
            this.heap[this.size++] = newTask;
            this.heapifyUp(this.size - 1);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let l = (2 * i) + 1;
        let r = (2 * i) + 2;

        if(l < this.size && this.heap[l].priority < this.heap[smallest].priority) {
            smallest = l;
        }

        if(r < this.size && this.heap[r].priority < this.heap[smallest].priority) {
            smallest = r;
        }

        if(smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    deQueue() {
        let task = null;

        if (!this.isEmpty()) {
            task = this.heap[0];
            this.swap(0, --this.size);
            this.heap[this.size] = null;

            this.heapifyDown(0);
        }
        return task;
    }

    front() {
        if (!this.isEmpty()) return this.collection[0][0];
    }

    printQueue() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is empty!");
        } else {
            for (let i = 0; i < this.size; i++) {
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

queue.printQueue();