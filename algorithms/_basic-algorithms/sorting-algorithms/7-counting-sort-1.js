/**
# Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N + k)

    N -> number of elements in the array
    k -> Range(Max number)
*/
const { randomArray } = require("./_helper-functions/random-numbers-array");

function countingSort (nums, range = nums.length) {
    const count = {},
        sortedArray = [];
    let n = nums.length;

    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }

    for(let i = 0; i < n; i++) {
        count[nums[i]]++;
    }

    let i = 0;

    while(n > 0) {
        if(count[i] === 0) i++;
        else {
            sortedArray.push(i);
            count[i]--;
            n--;
        }
    }
    return sortedArray;
}

let arr = randomArray(20, 40);
console.log(arr);
let res = countingSort(arr, 40);
console.log(res);