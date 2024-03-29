/*
Problem Statement:
Given an integer array nums and an integer k, modify the array in the following way:

    choose an index i and replace nums[i] with -nums[i].

You should apply this process exactly k times. You may choose the same index i multiple times. Return the largest possible sum of the array after modifying it in this way.


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

    1 <= nums.length <= 104
    -100 <= nums[i] <= 100
    1 <= k <= 104

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
console.log(maxSumAfterKNegations([2, -3, -2, 1, 5, -4], 4));