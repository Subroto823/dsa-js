/* 
heapSort - descending order (using minHeap)

    Time Complexity: O(nlogn)
    Space Complexity: O(1)

*/
const { swap } = require("./swap");

function buildMinHeap(arr, size) {
    for(let i = Math.floor(size/2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }
}

function heapify(arr, size, i) {
    let smallest = i;
    let l = (2 * i) + 1;
    let r = (2 * i) + 2;

    if(l < size && arr[l] < arr[smallest]) {
        smallest = l
    }

    if(r < size && arr[r] < arr[smallest]) {
        smallest = r;
    }

    if(smallest != i) {
        swap(arr, i, smallest);
        heapify(arr, size, smallest);
    }
}

function heapSort(arr) {
    let len = arr.length;

    // build MaxHeap
    buildMinHeap(arr, len);

    // heapSort
    for(let i = len - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapify(arr, i, 0);
    }
}

let arr = [4, 6, 3, 7, 9, 12, 5, 2, 1, 8, 11, 10];
heapSort(arr);
console.log(arr);
