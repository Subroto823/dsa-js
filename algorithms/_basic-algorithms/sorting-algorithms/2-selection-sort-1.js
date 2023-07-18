/**
 # Selection Sort
 *
 * Time Complexity O(n^2)
 * Unstable Algorithm
 * 
 */

const { swap } = require("./_helper-functions/swap");

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

selectionSort(arr);
console.log(arr);