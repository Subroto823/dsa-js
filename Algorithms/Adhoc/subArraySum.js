/**
 * 
 * @Sum of all subarray
 * 
 * @Efficient approach
 * @Time complexity: O(n)
 * @Space complexity: O(1)
 * 
 */

function subArraySum(arr) {
    let n = arr.length;
    let result = 0;

    for(let i = 0; i < n; i++) {
        result += arr[i] * (n - i) * (i + 1);
    }
    return result;
}

let nums = [1, 2, 3];
console.log(subArraySum(nums));

/**
@All the subarrays of [1, 2, 3] :

   [1], [1, 2], [1, 2, 3], [2], [2, 3], [3]

    @if we take a close look at all the subarrays and observe, we can see a pattern here, that is,
        @Each element in the array (of length n), appears (n - i) * (i + 1) time
*/