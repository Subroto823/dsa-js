/**
# Quick Sort
 
    Time complexity 
        # Worst case - O(n^2) - This happens when the array is already sorted
        # Avg case - O(nlogn)
    Space Complexity - O(n)

It is popular algorithm for it's average time complexity of O(nlogn).
We recursively divide the array into smaller array which is logn and we also have a for loop which is O(n)

For worst case complexity even though is quadratic, The average case complexity is what matters with this algorithm.

# It is also possible to implement the same algorithm without taking extra space.

*/ 

const { randomArray } = require("./_helper-functions/random-numbers-array");

const quickSort = (arr) => {
    if(arr.length < 2) return arr;

    let pivot = arr[arr.length - 1]; // pick last element as pivot
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let nums = randomArray(20, 40);
console.log(quickSort(nums));