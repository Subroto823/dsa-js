/**
@Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N)

    N -> number of elements in the array
    k -> Range(Max number)
*/
const { randomArray } = require("./helper/randomNumbers");

function countingSort (nums) {
    let count = {};
    let sortedArray = [];
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        count[nums[i]] = ++count[nums[i]] || 1;
    }

    let i = 0;

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

let arr = randomArray(20, 40);
let res = countingSort(arr);
console.log(res);