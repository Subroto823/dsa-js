/**
 * @BubbleSort
 * @Time Complexity - O(n^2)
 * @Quadratic time complexity isn't great for sorting
 * @Stable algorithm
 */

const { swap } = require("./swap");

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

bubbleSort(arr);
console.log(arr);

/*
The above function always runs O(n^2) time, even if the array is sorted.

We can optimize this by stopping the algorithm, if inner loop didn't cause any swap */