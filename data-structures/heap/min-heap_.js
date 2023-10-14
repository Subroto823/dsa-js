/**
 * @Todo
 * 
 */
class MinHeap {
    constructor(priority) {
        this._heap = new Array();
        this._priority = priority;
    }

    get length() {
        return this._heap.length;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        const elem = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = elem;
    }

    enqueue(element) {
        console.log(typeof this._priority)
        return;
        this._heap.push(element);
        this.heapifyUp(this.length - 1);
    }

    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this._heap[currentIndex].priority < this._heap[parentIndex].priority) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    heapify(i) {
        let smallest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < this.length && this._heap[l].priority < this._heap[smallest].priority) {
            smallest = l;
        }

        if (r < this.length && this._heap[r].priority < this._heap[smallest].priority) {
            smallest = r;
        }

        if (smallest != i) {
            this.swap(i, smallest);
            this.heapify(smallest);
        }
    }

    dequeue() {
        let min = this._heap[0];
        this._heap[0] = this._heap[this.length - 1];
        this._heap.pop();
        this.heapify(0);

        return min;
    }
}

const priority = {priority: (element) => element};

const minHeap = new MinHeap(priority);
minHeap.enqueue([-10, 3]);
minHeap.enqueue([-10, 5]);
minHeap.enqueue([-10, 2]);

console.log(minHeap);