/* Priority Queue(Min Heap Implementation) */

class MinPriorityQueue {
    constructor(capacity) {
        this.capacity = capacity ? capacity : Infinity;
        this.heap = [];
    }

    get length() {
        return this.heap.length;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    isFull() {
        return this.length === this.capacity;
    }

    enqueue(element, priority = element) {
        if (this.isFull()) {
            process.stdout.write("Queue is full!\n");
        } else {
            const newElement = { element, priority };
            this.heap.push(newElement);
            this.heapifyUp(this.length - 1);
        }
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

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        let heap = this.heap;

        let task = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = task;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        let heap = this.heap;

        let deleteEle = heap[0];
        heap[0] = heap[this.length - 1];
        heap.pop();
        this.heapifyDown(0);

        return deleteEle;
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
}

module.exports = {
    MinPriorityQueue
}