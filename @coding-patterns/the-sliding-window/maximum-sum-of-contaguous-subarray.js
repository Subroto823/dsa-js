/**
 * 
 * @Maximum sum of a contiguous subarray of size k
 * 
 */

function findMaxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let currRunningSum = 0;

    for(let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if(i >= k - 1) {
            maxSum = Math.max(maxSum, currRunningSum);
            currRunningSum -= arr[i - (k - 1)];
        }
    }
    return maxSum;
}

console.log(findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));