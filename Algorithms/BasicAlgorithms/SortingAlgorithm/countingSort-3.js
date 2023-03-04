/**
@Counting Sort (for both negative & positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(k)

    N -> number of elements in the array
    k -> Range(Max - Min)
*/

const { randomArray } = require("./helper/randomNumbers");

function countingSort (nums) {
    let count = {};
    let sortedArray = [];
    let n = nums.length;
    let min = Math.min.apply(undefined, nums);

    for(let i = 0; i < n; i++) {
        count[nums[i]] = ++count[nums[i]] || 1;
    }

    let i = min;

    while(n > 0) {
        if(!count[i]) {
            i++
        } else {
            sortedArray.push(i);
            count[i]--;
            n--;
        }
    }
    return sortedArray;
}

// let arr = randomArray(10000000);
arr = [-1, 4, 3, -4, 5, 8, 9, -7, -2, 10, 2, -8]
// arr = [3, 5, 1, 2, 6, 2, 5, 6, 8, 6, 7];
console.time();
let res = countingSort(arr);
console.timeEnd();
console.log(res);