/**
 # Merge Sort (bottom up)

    Time Complexity - O(nlogn)
    Space Complexity - O(n)
*/
const { isSorted } = require("./_helper-functions/is-sorted");
const { randomArray } = require("./_helper-functions/random-numbers-array");

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

let arr = randomArray(1000000);

console.time();
mergeSort(arr);
console.timeEnd();

console.log(isSorted(arr));