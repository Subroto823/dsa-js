/**
 * @Selection Sort
 * Time Complexity O(n^2)
 * @Stable
 */

const { swap } = require("./swap");

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // we can move the element at current i, instead of swapping, to make the algorithm stable
        let key = arr[minIndex];
        while(minIndex > i) {
            arr[minIndex] = arr[--minIndex];
        }
        arr[i] = key;
    }
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

selectionSort(arr);
console.log(arr);