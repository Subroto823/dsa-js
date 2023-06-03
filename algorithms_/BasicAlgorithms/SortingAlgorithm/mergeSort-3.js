/**
 @Merge Sort

    Time Complexity - O(nlogn)
    Space Complexity - O(n)
 */
const { randomArray } = require("./helper/randomNumbers");

const merge = (arr, left, mid, right) => {

    let leftSize = mid - left + 1;
    let rightSize = right - mid;

    const L = new Array(leftSize).fill(0);
    const R = new Array(rightSize).fill(0);

    for(let i = 0; i < leftSize; i++) {
        L[i] = arr[left + i];
    }
    
    for(let i = 0; i < rightSize; i++) {
        R[i] = arr[mid + 1 + i];
    }

    let indexL = 0, indexR = 0;
    
    for(let i = left; i <= right; i++) {
        if(indexL + left > mid) {
            arr[i] = R[indexR++];
        } 
        else if (indexR + mid === right) {
            arr[i] = L[indexL++];
        }
        else if(L[indexL] < R[indexR]) {
            arr[i] = L[indexL++];
        }
        else {
            arr[i] = R[indexR++];
        } 
    }
}

const mergeSort = (arr, low = 0, high = arr.length - 1) => {
    if (low >= high) return;

    let mid = low + ((high - low) >> 1);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

}

let arr = randomArray(1000000);
console.time();
mergeSort(arr);
console.timeEnd();