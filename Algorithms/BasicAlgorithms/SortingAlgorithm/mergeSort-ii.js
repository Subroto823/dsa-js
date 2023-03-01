/**
 @Merge Sort

    Time Complexity - O(nlogn)
    Space Complexity - O(n)
 */
const { randomArray } = require("./helper/randomNumbers");

const merge = (arr, low, mid, high) => {
    let merged = new Array(high - low + 1).fill(0);
    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            merged[k++] = arr[i++];
        } else {
            merged[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        merged[k++] = arr[i++];
    }

    while (j <= high) {
        merged[k++] = arr[j++];
    }

    for (let i = low; i <= high; i++) {
        arr[i] = merged[i];
    }
}

const mergeSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let mid = (low + high) >> 1;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

let arr = randomArray(20, 40);
mergeSort(arr);
console.log(arr);