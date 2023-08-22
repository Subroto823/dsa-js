/*
Problem Statement: Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.
 

Example:

    Input: nums = [1, 3, 4, 2, 2]
    Output: 2

    Input: nums = [3, 1, 3, 4, 2]
    Output: 3
 

Constraints:

    1 <= n <= 10^5
    nums.length == n + 1
    1 <= nums[i] <= n
    There is only one duplicate number in the array, and it may appear more than once.

# Brute Force Approach
# Time Complexity: O(n^2)
*/

function findDuplicateNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[j];
            }
        }
    }
}

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicateNumber(nums));

nums = [3, 1, 3, 4, 2]
console.log(findDuplicateNumber(nums));

/*
This is a straightforward approach to solving the "Find Duplicate Number" problem using a nested loop to compare each element with all subsequent elements. 

While this approach works, it has a time complexity of O(n^2), where n is the length of the input array. This means that the execution time can become very long for larger arrays, making it less efficient. */