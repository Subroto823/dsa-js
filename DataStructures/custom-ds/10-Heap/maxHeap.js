class MaxHeap {
    constructor() {
        this.heap = new Array();
    }

    size() {
        return this.heap.length;
    }

    parent = (index) => {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        const elem = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = elem;
    }

    insert = (element) => {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp = (index) => {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    heapify(i) {
        let large = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let length = this.size();

        if (l < length && this.heap[l] > this.heap[large]) {
            large = l;
        }

        if (r < length && this.heap[r] > this.heap[large]) {
            large = r;
        }

        if (large != i) {
            this.swap(i, large);
            this.heapify(large);
        }
    }

    remove() {
        let max = this.heap[0];
        let last = this.heap.pop();
        this.heap[0] = last;
        this.heapify(0);
        return max;
    }


    removeValue(value) {
        if (!value) return;

        let i;
        let size = this.size();

        for (i = 0; i < size; i++) {
            if (value === this.heap[i]) break;
        }

        this.swap(i, size - 1);
        this.heap.length--;

        // Build Max Heap
        for (let j = Math.floor(size / 2) - 1; j >= 0; j--) {
            this.heapify(j);
        }
    }

    printHeap() {
        let txt = "";
        for (let i = 0; i < this.size(); i++) {
            txt += this.heap[i] + " ";
        }
        process.stdout.write(txt + "\n");
    }
};

const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(9);
maxHeap.insert(11);
maxHeap.insert(13);
maxHeap.insert(16);
maxHeap.insert(18);
maxHeap.insert(15);
maxHeap.removeValue(18);

maxHeap.printHeap();