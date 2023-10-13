/**
 * Jump Search
 * Time Complexity: O(sqrt(n))
 */

const jumpSearch = function (arr, target) {
    const n = arr.length;
    const jumpSize = Math.floor(Math.sqrt(n));
    let left = 0;
    let right = 0;

    while (right < n && arr[right] < target) {
        left = right;
        right = Math.min(right + jumpSize, n - 1);
    }

    for (let i = left; i <= right; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const arr = [1, 3, 5, 7, 9, 10, 12, 15, 17, 18];
const target = 12;
console.log(jumpSearch(arr, target));