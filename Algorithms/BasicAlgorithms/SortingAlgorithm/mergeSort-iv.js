/**
 @Merge Sort (bottom up)

    Time Complexity - O(nlogn)
        # This is the best time complexity we can get while sorting
    Space Complexity - O(n)

    # This implementation is more optimal than the previous two
 */

const { randomArray } = require("./helper/randomNumbers");

function mergeSort(nums) {
    const n = nums.length;
    const merged = new Array(n).fill(0);

    for (let i = 1; i < n; i *= 2) {
        for (let lo = 0; lo < n - i; lo += (i * 2)) {
            let mid = lo + i - 1;
            let hi = Math.min(lo + (2 * i) - 1, n - 1);
            merge(nums, merged, lo, mid, hi);
        }
    }
}

function merge(nums, merged, lo, mid, high) {

    let i = lo, j = mid + 1;
    for (let k = lo; k <= high; k++) {
        if (i > mid) merged[k] = nums[j++];
        else if (j > high) merged[k] = nums[i++];
        else if (nums[j] < nums[i]) merged[k] = nums[j++];
        else merged[k] = nums[i++];
    }

    for (let k = lo; k <= high; k++) {
        nums[k] = merged[k];
    }
}

let arr = randomArray(20, 40);
mergeSort(arr);
console.log(arr);