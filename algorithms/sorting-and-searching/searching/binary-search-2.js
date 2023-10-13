/**
 * Binary Search
 * Time complexity O(logn)
 * This implementation uses fewer number of comparisons than the previous one
 */

const binarySearch = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;

    while (r - l > 1) {
        let mid = l + ((r - l) >> 1);
        if (target <= arr[mid]) r = mid;
        else l = mid;
    }

    if (arr[l] === target) return l;
    else if (arr[r] === target) return r;
    else return -1;
}


let nums = [-5, 2, 4, 6, 20], target = 6;
console.log(binarySearch(nums, target));
