/**
 # Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N + N)

    N -> number of elements in the array
    k -> Range(Max number)
*/
const { randomArray } = require("./_helper-functions/random-numbers-array");

function countingSort (nums) {
    const count = {},
        sortedArray = [];
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        count[nums[i]] = ++count[nums[i]] || 1;
    }

    let i = 0;
    while(n > 0) {
        if(!count[i]) i++
        else {
            sortedArray.push(i);
            count[i]--;
            n--;
        }
    }
    return sortedArray;
}

let arr = randomArray(20, 40);
let res = countingSort(arr);
console.log(res);