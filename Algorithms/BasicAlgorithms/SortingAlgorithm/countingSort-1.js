/**
@Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(k)

    N -> number of elements in the array
    k -> Range(Max number)
*/

const { randomArray } = require("./helper/randomNumbers");

function countingSort (nums, range = nums.length) {
    let count = {};
    let sortedArray = [];

    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }

    for(let i = 0; i < range; i++) {
        count[nums[i]]++;
    }

    let i = 0;
    let n = nums.length;

    while(n > 0) {
        if(count[i] === 0) {
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
let res = countingSort(arr, 40);
console.log(res);