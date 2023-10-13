/**
 * Bubble Sort
 * Time Complexity: O(n^2)
 *
 * - Compares adjacent elements and swaps them if they're in the wrong order.
 * - Repeats until the entire array is sorted.
 *
 * Note: Bubble Sort is rarely used in real-world applications, mainly for educational purposes.
 */

const { swap } = require("../../../__helpers/swap");

var bubbleSort = function (arr) {
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


/**
 * The above function always runs O(n^2) time, even if the array is sorted.
 * We can optimize this by stopping the algorithm, if inner loop didn't cause any swap. 
 * But still the worst-case time complexity remains O(n^2).
*/

var bubbleSort = function (arr){
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

arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
bubbleSort(arr);
console.log(arr);