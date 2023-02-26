/**
 * 
 * @Maximum sum subarray
 * 
 * Time Complexity : O(n)
 * Space Complexity : O(n) (We can also solve the problem with O(1) space complexity)
 * 
 */

function maxSubArray(nums) {
    let len = nums.length;

    let minPrefixSum = 0;
    let result = -Infinity;
    let prefixSum = new Array(len).fill(0);

    prefixSum[0] = nums[0];
    for(let i = 1; i < len; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    for(let i = 0; i < len; i++) {
        result = Math.max(result, prefixSum[i] - minPrefixSum);
        minPrefixSum = Math.min(minPrefixSum, prefixSum[i]);
    }
    return result;
}

let nums = [1, -3, 5, -4];
console.log(maxSubArray(nums));

nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

nums = [1]
console.log(maxSubArray(nums));
