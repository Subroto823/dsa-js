/**
 @Merge Sort (bottom up)

    Time Complexity - O(nlogn)
        # This is the best time complexity we can get while sorting
    Space Complexity - O(n)

    # This implementation is more optimal than the previous two
 */

    const { randomArray } = require("./helper/randomNumbers");

    function sortArray(nums) {
        let merged = new Array(arr.length).fill(0);
        mergeSort(nums, merged, 0, arr.length - 1);
    }
    
    function mergeSort(arr, merged, lo, hi) {
        if (lo < hi) {
            let mid = (lo + hi) >> 1;
            mergeSort(arr, merged, lo, mid);
            mergeSort(arr, merged, mid + 1, hi);
            merge(arr, merged, lo, mid, hi);
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
    sortArray(arr);
    console.log(arr);