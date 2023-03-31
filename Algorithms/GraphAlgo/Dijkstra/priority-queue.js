/* Priority Queue(Min Heap Implementation) */

class PriorityQueue {
    constructor(capacity) {
        this.length = 0;
        this.capacity = capacity;
        this.heap = new Array(capacity).fill(null);
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
        let currentIndex = index;
        let children = this.heap[index];
        let parent = this.heap[this.parentIndex(index)];

        while(currentIndex > 0 && children[1] < parent?.[1]) {
            this.swap(currentIndex, this.parentIndex(index));

            currentIndex = this.parentIndex(index);
            children = this.heap[currentIndex];
            parent = this.heap[this.parentIndex(children)];
        }
    }

    enQueue(element) {
        if(this.isFull()) {
            process.stdout.write("Queue is full!");
        } else {
            this.heap[this.length++] = element;
            this.heapifyUp(this.length - 1);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let l = (2 * i) + 1;
        let r = (2 * i) + 2;

        if(l < this.length && this.heap[l][1] < this.heap[smallest][1]) {
            smallest = l;
        }

        if(r < this.length && this.heap[r][1] < this.heap[smallest][1]) {
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
            this.swap(0, --this.length);
            this.heap[this.length] = null;

            this.heapifyDown(0);
        }
        return task;
    }

    printQueue() {
        console.log(this.heap)
    }
}

module.exports = {
    PriorityQueue
}