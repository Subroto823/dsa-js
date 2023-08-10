/*
Problem Statement:

Given an array of integers. Write a function to move all occurrences of the integer 0 to the end of the array while maintaining the relative order of the other elements.

Note that you must do this in-place without making a copy of the array.

Example:
    Input: nums = [0, 1, 0, 5, 8]
    Output: [1, 5, 8, 0, 0]

    Input: nums = [2, 0, 7, 0, 0]
    Output: [2, 7, 0, 0]

Constraints:

    1 <= nums.length <= 10^4
    -2^31 <= nums[i] <= 2^31 - 1
*/

function moveZeroes(nums) {
    let zeroIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[zeroIndex] !== 0) {
            zeroIndex++
        } else if(nums[i] !== 0) {
            nums[zeroIndex++] = nums[i];
            nums[i] = 0;
        }
    }
}

let nums = [0, 1, 0, 5, 8];
moveZeroes(nums);
console.log(nums);

nums = [2, 0, 7, 0, 0];
moveZeroes(nums);
console.log(nums);

/*
1. Initialize a variable "zeroIndex" to 0. This will keep track of the position of zero where the next non-zero element should be placed.

2. Iterate through each element "num" in the array "arr":
    if "num" at "zeroIndex"is not equal to 0:
      - Increment "zeroIndex" by 1.

    else if "num" is not equal to 0:
      - Place "num" at the "zeroIndex" position.
      - Increment "zeroIndex" by 1.
      - Place 0 at the position of num

    3. After the loop, all non-zero elements have been moved to the beginning of the array up to the "nonZeroIndex" position. */