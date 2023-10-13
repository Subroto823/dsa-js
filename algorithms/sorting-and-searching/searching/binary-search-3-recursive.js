/**
 * Binary Search (Recursive)
 * Time complexity O(logn)
 */

const recursiveBinarySearch = function (arr, target) {
    const search = function (l, r) {
        if (l > r) return -1;

        let mid = l + ((r - l) >> 1)

        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            return search(l, mid - 1);
        } else {
            return search(mid + 1, r);
        }
    }

    return search(0, arr.length - 1);
}


let nums = [-5, 2, 4, 6, 10], target = 6;
console.log(recursiveBinarySearch(nums, target));
