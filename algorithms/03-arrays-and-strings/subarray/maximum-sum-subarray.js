// Kadane's Algorithm

function maxSubArray(nums) {
    let currMax = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        max = Math.max(max, currMax);
    }

    return max;
}

let nums = [1, -3, 5, -4];
console.log(maxSubArray(nums));

nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

nums = [1]
console.log(maxSubArray(nums));