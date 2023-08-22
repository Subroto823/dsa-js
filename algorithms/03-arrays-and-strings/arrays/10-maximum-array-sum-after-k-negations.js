/*
Problem Statement:

Given an array of integers nums and an integer k, you are allowed to negate (change the sign of) exactly k elements in the array. Your task is to find the maximum possible sum of the array after performing these negations.
    
    # Choose an index i and replace nums[i] with -nums[i]


Example:

    Input: nums = [4, 2, 3], k = 1
    Output: 5
    Explanation: Choose index 1 and nums becomes [4,-2,3].

    Input: nums = [3, -1, 0, 2], k = 3
    Output: 6
    Explanation: Choose indices (1, 2, 2) and nums becomes [3, 1, 0, 2].


    Input: nums = [2, -3, -1, 5, -4], k = 2
    Output: 13
    Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
    

Constraints:

    1 <= nums.length <= 10^4
    -100 <= nums[i] <= 100
    1 <= k <= 10^4

*/

function maxSumAfterKNegations(nums, k) {
    nums.sort((a, b) => a - b);

    let i = 0;
    while(k !== 0 && nums[i] < 0) {
        nums[i] = -nums[i];
        k--, i++;
    }

    if (k % 2 === 1) {
        let minIndex = nums.reduce((index, cur, curIndex, arr) => {
            return cur < arr[index] ? curIndex : index;
        }, 0);

        nums[minIndex] = -nums[minIndex];
    }
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(maxSumAfterKNegations([2, -3, -1, 5, -4], 2));