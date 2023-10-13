/**
 # BubbleSort
 * 
 * Time Complexity - O(n^2)
 * Quadratic time complexity isn't great for sorting
 * 
 * Stable algorithm
 */

const { swap } = require("../04-sorting/_helper-functions/swap");

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
bubbleSort(arr);
console.log(arr);

/*
The above function always runs O(n^2) time, even if the array is sorted.
We can optimize this by stopping the algorithm, if inner loop didn't cause any swap. */