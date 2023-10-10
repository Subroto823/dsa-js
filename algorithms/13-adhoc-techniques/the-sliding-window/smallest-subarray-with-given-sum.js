/**
 * Smallest Subarray Size With Given Sum
 */

var smallestSubarray = function(nums, targetSum) {
    let result = Infinity;
    let currWindowSum = 0;
    let windowStart = 0;

    for(let i = 0; i < nums.length; i++) {
        currWindowSum += nums[i];

        while(currWindowSum >= targetSum) {
            result = Math.min(result, i - windowStart + 1);
            currWindowSum -= nums[windowStart++];
        }
    }

    return result;
}

let nums = [4, 2, 2, 7, 8, 1, 2, 8, 1, 0], targetSum = 8;
console.log(smallestSubarray(nums, targetSum));

nums = [4, 2, 2, 7, 1, 8, 1, 2, 8, 1, 0], targetSum = 16;
console.log(smallestSubarray(nums, targetSum));
