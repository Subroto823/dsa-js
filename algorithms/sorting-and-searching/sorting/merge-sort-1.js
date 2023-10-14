/**
 * Merge Sort
 * Time Complexity: O(n log n)
 * 
 * - Divides the array into two halves.
 * - Recursively sorts each half.
 * - Merges the sorted halves to create a single sorted array.
 *
 * O(n log n) is the best-achievable time complexity for comparison-based sorting algorithms.
 */

var mergeSort = function (arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

var merge = function (left, right) {
    const sortedArr = [];
    let l = 0, r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            sortedArr.push(left[l++]);
        } else {
            sortedArr.push(right[r++]);
        }
    }

    return [...sortedArr, ...left.slice(l), ...right.slice(r)];
}

let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
let res = mergeSort(arr);
console.log(res);


/**
 * Merge Sort
 * Implementation II
 */

var mergeSort = function (arr, low = 0, high = arr.length - 1) {
    if (low >= high) return;
    let mid = low + Math.floor((high - low) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

var merge = function (arr, low, mid, high) {
    const merged = new Array(high - low + 1);

    let i = low, j = mid + 1;
    let k = 0;

    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            merged[k++] = arr[i++];
        } else {
            merged[k++] = arr[j++];
        }
    }

    while (i <= mid) merged[k++] = arr[i++];
    while (j <= high) merged[k++] = arr[j++];

    k = 0;
    for (let i = low; i <= high; i++) {
        arr[i] = merged[k++];
    }
}

arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
mergeSort(arr);
console.log(arr);