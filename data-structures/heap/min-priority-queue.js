/**
 * Min Priority Queue (MinHeap)
 * 
 * Time Complexity:
 * - enqueue (Push): O(log n)
 * - dequeue (Pop): O(log n)
 * - peek: O(1)
 * 
 * Priority Queues, often implemented using a binary heap, provide efficient insertion and removal of elements based on priority.
 */

class Task {
    constructor(task, priority) {
        this.task = task;
        this.priority = priority;
    }
}

class MinPriorityQueue {
    constructor(capacity) {
        this.capacity = capacity ? capacity : Infinity;
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.capacity;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        let task = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = task;
    }

    heapifyUp(index) {
        const heap = this.heap;

        let currentIndex = index;
        let parentIndex = this.parentIndex(index);

        while (currentIndex > 0 && heap[currentIndex].priority < heap[parentIndex].priority) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.parentIndex(parentIndex);
        }
    }

    enqueue(item, priority = item) {
        if (this.isFull()) {
            process.stdout.write("Queue is full! :(\n");
        } else {
            const priorityNode = new Task(item, priority);
            this.heap.push(priorityNode);
            this.heapifyUp(this.size() - 1);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let l = (2 * i) + 1;
        let r = (2 * i) + 2;

        if (l < this.size() && this.heap[l].priority < this.heap[smallest].priority) {
            smallest = l;
        }

        if (r < this.size() && this.heap[r].priority < this.heap[smallest].priority) {
            smallest = r;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;

        let deleteTask = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapifyDown(0);

        return deleteTask;
    }

    peek() {
        if (!this.isEmpty()) return this.heap[0];
        return null;
    }

    print() {
        if (this.isEmpty()) {
            process.stdout.write("Queue is empty :(");
            return;
        }

        for (let i = 0; i < this.size(); i++) {
            process.stdout.write((i + 1) + " " + this.heap[i].task + " (priority " + this.heap[i].priority + ")\n");
        }

        process.stdout.write("\n");
    }
}


function main() {
    const queue = new MinPriorityQueue();

    queue.enqueue("Coding", 3);
    queue.enqueue("Sleeping", 1);
    queue.enqueue("Music", 2);
    queue.enqueue("Being Sad for no reason :(", 7);
    queue.enqueue("Movie and Tv Series", 5);
    queue.enqueue("Watching Football", 4);

    console.log(queue.dequeue());
    queue.print();
}

if (require.main === module) main();


module.exports = MinPriorityQueue;