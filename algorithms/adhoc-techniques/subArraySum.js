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


Observation:
In this approach, we're going to take advantage of the fact that each element of the array appears in all possible subarrays exactly i * (n - i + 1) times, where i is the index of the element.

Example:
Consider the array [1, 2, 3]. Let's break down the contributions of each element to the sum of all subarrays:

    The element 1 appears in all subarrays: [1], [1, 2], [1, 2, 3].
    The element 2 appears in all subarrays: [2], [2, 3].
    The element 3 appears in all subarrays: [3].

Explanation:

    Element 1 appears as the first element in 3 subarrays: [1], [1, 2], [1, 2, 3].
        Total contribution to sum: 1 * 3 = 3.

    Element 2 appears as the first element in 2 subarrays: [2], [2, 3].
        Total contribution to sum: 2 * 2 = 4.

    Element 3 appears as the first element in 1 subarray: [3].
        Total contribution to sum: 3 * 1 = 3.

Total sum of contributions: 3 + 4 + 3 = 10.

General Formula:
For each element at index i:

    It appears as the first element in i + 1 subarrays.
    It appears as the last element in n - i subarrays.

So, the total contribution of an element at index i is: arr[i] * (i + 1) * (n - i).

Algorithm:

    Initialize totalSum as 0.
    Iterate through the array from index 0 to n-1.
        For each element at index i, add arr[i] * (i + 1) * (n - i) to totalSum.
    Return totalSum.

Implementation:

javascript

function sumOfAllSubarrays(arr) {
    const n = arr.length;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += arr[i] * (i + 1) * (n - i);
    }

    return totalSum;
}

const arr = [1, 2, 3];
console.log(sumOfAllSubarrays(arr)); // Output: 10

This approach eliminates the need for nested loops and directly calculates the sum of all subarrays in an efficient O(n) manner by leveraging the pattern of element contributions to the subarrays.