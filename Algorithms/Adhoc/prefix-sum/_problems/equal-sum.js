/**
 * 
 * @Check if we can partition the array into two sub-arrays with equal sum.
 * 
 */

function findArraySum(nums) {
    let total = 0;
    for(let num of nums) {
        total += num;
    }
    return total;
}

function equalSumPartition(nums) {
    let totalSum = findArraySum(nums);
    let prefixSum = 0, suffixSum = 0;

    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        suffixSum = totalSum - prefixSum;

        if(suffixSum === prefixSum) {
            return true;
        }
    }
    return false;
}

let nums = [1, 2, 3, 4];
console.log(equalSumPartition(nums));

nums = [1, 2, 3, 4, 10];
console.log(equalSumPartition(nums));