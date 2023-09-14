/* Priority Queue(Min Heap Implementation) */

class priorityNode {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(capacity) {
        this.capacity = capacity ? capacity : Infinity;
        this.heap = [];
    }

    isEmpty() {
        return this.length === 0;
    }

    get length() {
        return this.heap.length;
    }

    isFull() {
        return this.length === this.capacity;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        let heap = this.heap;

        let task = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = task;
    }

    heapifyUp(index) {
        let heap = this.heap;

        let currentIndex = index;
        let parentIndex = this.parentIndex(index);

        while (currentIndex > 0 && heap[currentIndex].priority < heap[parentIndex].priority) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.parentIndex(parentIndex);
        }
    }

    enQueue(element, priority) {
        if (this.isFull()) {
            process.stdout.write("Queue is full!\n");
        } else {
            const newElement = new priorityNode(element, priority);
            this.heap.push(newElement);
            this.heapifyUp(this.length - 1);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let l = (2 * i) + 1;
        let r = (2 * i) + 2;

        if (l < this.length && this.heap[l].priority < this.heap[smallest].priority) {
            smallest = l;
        }

        if (r < this.length && this.heap[r].priority < this.heap[smallest].priority) {
            smallest = r;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    deQueue() {
        if (this.isEmpty()) return null;

        let heap = this.heap;

        let deleteEle = heap[0];
        heap[0] = heap[this.length - 1];
        heap.pop();
        this.heapifyDown(0);

        return deleteEle;
    }
}

module.exports = {
    PriorityQueue
}