/**
 * Binary Search 
 * Time Complexity O(logn)
 * Note: Only Works For Sorted Array.
 */

const binarySearch = function (arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + ((right - left) >> 1);

        if (target === arr[mid]) return mid;
        if (target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
}


let nums = [-5, 2, 4, 6, 20], target = 20;
console.log(binarySearch(nums, target));