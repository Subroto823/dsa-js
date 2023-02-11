function swap (arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

// max Heap
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
        swap(i, largest);
        heapify(arr, size, largest);
    }
}