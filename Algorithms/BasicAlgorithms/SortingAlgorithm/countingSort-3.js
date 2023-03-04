/**
@Counting Sort (for both negative & positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(k)

    N -> number of elements in the array
    k -> Range(Max - Min)
*/

const { randomNumbers } = require("./helper/randomNumbers");

function countingSort (nums) {
    let count = {};
    let sortedArray = [];
    let n = nums.length;
    let min = nums.reduce((num, acc) => Math.min(num, acc), Infinity);
    
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

let arr = randomNumbers(1000000);

console.time();
let res = countingSort(arr);
console.timeEnd();
console.log(res);