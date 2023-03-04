/**
@Counting Sort (for both negative & positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N + N)

    N -> number of elements in the array
    k -> Range(Max - Min)
*/

const { getMin } = require("./helper/maxMinInArray");
const { randomNumbers } = require("./helper/randomNumbers");

function countingSort (nums) {
    let count = {};
    let sortedArray = [];
    let n = nums.length;

    let min = getMin(nums);
    
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

let arr = randomNumbers(20, -10, 10);
let res = countingSort(arr);
console.log(res);