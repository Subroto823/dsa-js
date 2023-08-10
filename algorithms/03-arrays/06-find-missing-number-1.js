/*
Problem Statement: Missing Number

Given an array containing integers from 0 to n with one missing integer. Write a function to find and return the missing integer.

Example:
    Input: nums = [0, 2, 1, 4]
    Output: 3

    Input: nums = [0, 1, 3]
    Output: 2


    Input: nums = [6, 3, 2, 9, 4, 5, 0, 7, 1]
    Output: 8

Constraints:

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.
*/

function missingNumber(nums) {
    let n = nums.length,
        expectedSum = n * (n + 1) / 2,
        sum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - sum;
}

let nums = [0, 2, 1, 4];
console.log(missingNumber(nums));

nums = [6, 3, 2, 9, 4, 5, 0, 7, 1];
console.log(missingNumber(nums));

/*
This algorithm uses the property that the difference between the expected sum of consecutive integers and the actual sum of the array elements will reveal the missing number.

The sum of consecutive integers from 1 to n can be calculated using the formula (n * (n + 1)) / 2.
    
    1 + 2 + 3 + 4 + ... n = n * (n + 1) / 2

For example,
    consider a array [0, 2, 1, 4]
    n = 4, since array has 4 element
        
    Expected Sum = 4 * (4 + 1) / 2 
                 = 10
    Actual Array Sum = 0 + 2 + 1 + 4 = 7
    Missing Number: 10 - 7 = 3

*/