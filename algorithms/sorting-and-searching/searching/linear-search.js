/**
 * Linear Search 
 * Time complexity O(n)
 */

const linearSearch = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }

    return -1;
}

let nums = [4, 5, 8, 3, 2, 0], target = 2;
console.log(linearSearch(nums, target))