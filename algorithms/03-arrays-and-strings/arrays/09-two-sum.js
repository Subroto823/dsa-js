/*
Problem Statement:

Given an array of integers nums and an integer target, return the indices of the two numbers that add up to the target.

Assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Input: nums = [2, 7, 11, 15]; target = 9;
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the indices 0 and 1 are returned.

*/

function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

let nums = [2, 7, 11, 15]; target = 9;
console.log(twoSum(nums, target));

nums = [2, 7, 11, 15, 8]; target = 15;
console.log(twoSum(nums, target));


/*
As we iterate through the array, we keep track of the numbers we've seen so far using a hash map (object). For each number, we calculate its complement by subtracting it from the target. If the complement is already in the hash map, we've found a pair that sums to the target.
*/