/**
 @Merge Sort (Top Down)

    Time Complexity - O(nlogn)
        # This is the best time complexity we can get while sorting
    Space Complexity - O(n)
 */

const { randomArray } = require("./helper/randomNumbers");

function sortArray(nums) {
    let aux = new Array(arr.length).fill(0);
    mergeSort(nums, aux, 0, arr.length - 1);
}

function mergeSort(arr, aux, lo, hi) {
    if (lo < hi) {
        let mid = (lo + hi) >> 1;
        mergeSort(arr, aux, lo, mid);
        mergeSort(arr, aux, mid + 1, hi);
        merge(arr, aux, lo, mid, hi);
    }
}

function merge(arr, aux, lo, mid, high) {
    for (let k = lo; k <= high; k++) {
        aux[k] = arr[k];
    }

    let i = lo, j = mid + 1;
    for (let k = lo; k <= high; k++) {
        if (i > mid) arr[k] = aux[j++];
        else if (j > high) arr[k] = aux[i++];
        else if (aux[j] < aux[i]) arr[k] = aux[j++];
        else arr[k] = aux[i++];
    }
}

let arr = randomArray(20, 40);
sortArray(arr);
console.log(arr);