/**
 * Maximum sum of a contiguous subarray of size k
 */

var findMaxSumSubarray = function(nums, k) {
    let maxSum = -Infinity;
    let currSum = 0;

    for(let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        if(i >= k - 1) {
            maxSum = Math.max(maxSum, currSum);
            currSum -= nums[i - (k - 1)];
        }
    }

    return maxSum;
}

console.log(findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));