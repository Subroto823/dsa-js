/**
 @Merge Sort (Top Down)

    Time Complexity - O(nlogn)
        # This is the best time complexity we can get while sorting
    Space Complexity - O(n)

    # This implementation is more optimal than the previous implementations
 */

const { randomArray } = require("./helper/randomNumbers");

function sortArray(nums) {
    let merged = new Array(nums.length).fill(0);
    mergeSort(nums, merged, 0, nums.length - 1);
}

function mergeSort(arr, merged, lo, hi) {
    if (lo >= hi) return;
    let mid = lo + ((hi - lo) >> 1);

    mergeSort(arr, merged, lo, mid);
    mergeSort(arr, merged, mid + 1, hi);

    merge(arr, merged, lo, mid, hi);
}

function merge(nums, merged, lo, mid, high) {
    let i = lo, j = mid + 1;

    for (let k = lo; k <= high; k++) {
        if (i > mid) {
            merged[k] = nums[j++];
        }
        else if (j > high) {
            merged[k] = nums[i++];
        }
        else if (nums[j] < nums[i]) {
            merged[k] = nums[j++];
        }
        else merged[k] = nums[i++];
    }

    for (let k = lo; k <= high; k++) {
        nums[k] = merged[k];
    }
}

let arr = randomArray(20, 40);
sortArray(arr);
console.log(arr);