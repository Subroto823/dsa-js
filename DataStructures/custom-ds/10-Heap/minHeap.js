class minHeap {
    constructor() {
        this.heap = new Array();
    }

    get length() {
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

        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    heapify(i) {
        let smallest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let length = this.size();

        if (l < length && this.heap[l] < this.heap[smallest]) {
            smallest = l;
        }

        if (r < length && this.heap[r] < this.heap[smallest]) {
            smallest = r;
        }

        if (smallest != i) {
            this.swap(i, smallest);
            this.heapify(smallest);
        }
    }

    remove() {
        let max = this.heap[0];
        let last = this.heap.pop();
        this.heap[0] = this.heap[];
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

        // Build Min Heap
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

const heap = new minHeap();
heap.insert(5);
heap.insert(7);
heap.insert(9);
heap.insert(11);
heap.insert(13);
heap.insert(16);
heap.insert(18);
heap.insert(15);
heap.removeValue(5);
heap.removeValue(7);

heap.printHeap();