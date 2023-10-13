/**
 # Merge Sort (Top Down)

    Time Complexity - O(nlogn)
        # This is the best time complexity we can get while sorting (for comparison based sorting algorithm)
    Space Complexity - O(n)

    # This implementation is more optimal than the previous implementations
 */
const { randomArray } = require("./_helper-functions/random-numbers-array");
const { isSorted } = require("./_helper-functions/is-sorted");

function sortArray(nums) {
    let merged = new Array(nums.length).fill(0);

    function mergeSort(array, lo, hi) {
        if (lo >= hi) return;
        let mid = lo + ((hi - lo) >> 1);
    
        mergeSort(array, lo, mid);
        mergeSort(array, mid + 1, hi);
        merge(array, lo, mid, hi);
    }
    
    function merge(nums, lo, mid, high) {
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

    mergeSort(nums, 0, nums.length - 1);
}

let arr = randomArray(1000000);

console.time();
sortArray(arr);
console.timeEnd();

console.log(isSorted(arr));