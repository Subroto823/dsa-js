/* 
heapSort - ascending order (using maxHeap)

    Time Complexity: O(nlogn)
    Space Complexity: O(1)

*/

function swap (arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function buildMaxHeap(arr, size) {
    for(let i = Math.floor(size/2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }
}

function heapify(arr, size, i) {
    let largest = i;
    let l = (2 * i) + 1;
    let r = (2 * i) + 2;

    if(l < size && arr[l] > arr[largest]) {
        largest = l
    }

    if(r < size && arr[r] > arr[largest]) {
        largest = r;
    }

    if(largest != i) {
        swap(arr, i, largest);
        heapify(arr, size, largest);
    }
}

function heapSort(arr) {
    let len = arr.length;

    // build MaxHeap
    buildMaxHeap(arr, len);

    // heapSort
    for(let i = len - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapify(arr, i, 0);
    }
}

let arr = [4, 6, 3, 7, 9, 12, 5, 2, 1, 8, 11, 10];
heapSort(arr);
console.log(arr);
