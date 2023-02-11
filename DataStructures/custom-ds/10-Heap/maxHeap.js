const MaxHeap = function () {
    this.heap = [];
    this.parent = (index) => {
        return Math.floor((index - 1) / 2);
    }

    this.insert = (element) => {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    this.heapifyUp = index => {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    this.swap = (index1, index2) => {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    this.remove = () => {
        let max = this.heap[0];
        let last = this.heap.pop();
        this.heap[0] = last;
        this.heapify(0);
        return max;
    }

    this.heapify = (i) => {
        let large = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let length = this.heap.length - 1;

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

    this.print = () => {
        return this.heap;
    }

};

const maxHeap = new MaxHeap();
// maxHeap.insert(5);
// maxHeap.insert(7);
// maxHeap.insert(9);
// maxHeap.insert(11);
// maxHeap.insert(13);
// maxHeap.insert(16);
// maxHeap.insert(18);
// maxHeap.remove();

console.log(maxHeap.print());