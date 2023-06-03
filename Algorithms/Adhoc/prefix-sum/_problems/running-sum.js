/**
 * 
 * @Given an integer array 'a', return the prefix sum/running sum(cumulative sum), without creating a new array
 * 
 */

function makePrefixSum(arr) {
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i-1];
    }
    return arr;
}

const nums = [1, 2, 3, 4];
console.log(makePrefixSum(nums));