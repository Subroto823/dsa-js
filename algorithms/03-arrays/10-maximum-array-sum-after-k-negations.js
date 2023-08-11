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

function maxSumAfterKNegations(arr, k) {
    arr.sort((a, b) => a - b);
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(k === 0 || arr[i] > 0) break;
        arr[i] = -arr[i]
        k--;
    }

    // If k is odd then we have to done single operation and it must be done on the smallest positive element
    if(k & 1) {
        let minIndx = 0;

        for(let i = 1; i < n; i++) {
            if(arr[i] < arr[minIndx]) {
                minIndx = i;
            }
        }
        arr[minIndx] = -arr[minIndx];
    }
    return sumOfArray(arr);
}

console.log(maxSumAfterKNegations([2,-3,-1,5,-4], 2));