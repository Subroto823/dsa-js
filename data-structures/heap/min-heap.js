/**
 * MinHeap
 * 
 * Time Complexity:
 * - enqueue (Push): O(log n)
 * - dequeue (Pop): O(log n)
 * - peek: O(1)
 */

class MinHeap {
    constructor() {
        this.heap = new Array();
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

        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    pop() {
        const minValue = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapify(0);

        return minValue;
    }


    heapify(i) {
        let smallest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < this.size() && this.heap[l] < this.heap[smallest]) {
            smallest = l;
        }

        if (r < this.size() && this.heap[r] < this.heap[smallest]) {
            smallest = r;
        }

        if (smallest != i) {
            this.swap(i, smallest);
            this.heapify(smallest);
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


function main() {
    const heap = new MinHeap();

    heap.push(5);
    heap.push(9);
    heap.push(12);
    heap.push(18);
    heap.push(16);
    heap.push(15);
    heap.push(7);

    console.log(heap.pop());
    console.log(heap.pop());
    heap.printHeap();
}

if (require.main === module) main();


module.exports = MinHeap;