/**
 * Heap Sort (Descending Order)
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * - Build a min-heap from the array, effectively arranging the elements in ascending order.
 * - Repeatedly extract the minimum element from the min-heap (at the root) and place it at the end of the sorted part of the array.
 * - Continue this process until the entire array is sorted in descending order.
 *
 * Note: The min-heapify operation is used to maintain the min-heap property during the sorting process.
 */

const { swap } = require("../../../../__helpers/swap");

const heapSort = function (arr) {
    buildMinHeap(arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        swap(arr, i, 0);
        minHeapify(arr, i, 0);
    }
}

const buildMinHeap = function (arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
}

const minHeapify = function (arr, size, i) {
    let smallest = i;
    let l = (2 * i) + 1;
    let r = (2 * i) + 2;

    if (l < size && arr[l] < arr[smallest]) {
        smallest = l
    }

    if (r < size && arr[r] < arr[smallest]) {
        smallest = r;
    }

    if (smallest != i) {
        swap(arr, i, smallest);
        minHeapify(arr, size, smallest);
    }
}


let arr = [4, 6, 3, 7, 9, 12, 5, 2, 1, 8, 11, 10];
heapSort(arr);
console.log(arr);
