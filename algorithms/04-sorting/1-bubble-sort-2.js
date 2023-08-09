/**
 # Bubble Sort
 *
 * Time Complexity - O(n^2)
 * Little optimized than the previous implementation but still the time complexity is quadratic
 * 
 * Stable Algorithm
 */

const { swap } = require("./_helper-functions/swap");

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

bubbleSort(arr);
console.log(arr);