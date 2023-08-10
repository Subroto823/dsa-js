/*
Problem Statement: Count Occurrences

You are given an array of integers and a target integer. Write a function to count the number of occurrences of the target integer in the array.

Input:
    * An array of integers arr (1 ≤ arr.length ≤ 10^5) containing elements where (-10^9 ≤ arr[i] ≤ 10^9).
    * An integer target (-10^9 ≤ target ≤ 10^9).
    
Example:
    Input: nums = [1, 2, 3, 4, 4, 4, 5], target = 4
    Output: 3
    Input: nums = [-1, 0, 1, 0, -1], target = -1
    Output: 2
*/

function countOccurrences(arr, target) {
    let count = 0;

    for(let elem of arr) {
        if(elem === target) count++;
    }
    return count;
}

let nums = [1, 2, 3, 4, 4, 4, 5], target = 4;
console.log(countOccurrences(nums, target));

nums = [-1, 0, 1, 0, -1], target = -1
console.log(countOccurrences(nums, target));