/**
 * MaxHeap
 * 
 * Time Complexity:
 * - enqueue (Push): O(log n)
 * - dequeue (Pop): O(log n)
 * - peek: O(1)
 */


class MaxHeap {
    constructor() {
        this.heap = new Array();
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.heap.length;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        const elem = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = elem;
    }

    push(element) {
        this.heap.push(element);
        this.heapifyUp(this.size() - 1);
    }

    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    pop() {
        if (this.isEmpty()) return null;

        let maxValue = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapify(0);

        return maxValue;
    }

    heapify(i) {
        let large = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < this.size() && this.heap[l] > this.heap[large]) {
            large = l;
        }

        if (r < this.size() && this.heap[r] > this.heap[large]) {
            large = r;
        }

        if (large != i) {
            this.swap(i, large);
            this.heapify(large);
        }
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.heap[0]
    }

    printHeap() {
        if (this.isEmpty()) {
            process.stdout.write('Heap is Empty :(\n');
            return;
        }

        let txt = "";
        for (let i = 0; i < this.size(); i++) {
            txt += this.heap[i] + " ";
        }
        process.stdout.write(txt + "\n");
    }
};

function main() {
    const heap = new MaxHeap();
    
    heap.push(5);
    heap.push(9);
    heap.push(12);
    heap.push(18);
    heap.push(16);
    heap.push(15);
    heap.push(7);

    console.log(heap.peek());
    heap.printHeap();
}

if (require.main === module) main();


module.exports = MaxHeap;
