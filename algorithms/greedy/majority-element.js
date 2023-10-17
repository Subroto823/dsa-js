/*
Problem Discussion

Given an array of integers of length N. Majority element occurs with > [N/2] frequency. Find the majority element.

Input: [3, 2, 2, 4, 2, 2]
Output: 2

Explantion: The frequency of 2 is 4 > [6/2] = 3

Constraints:
1 <= N <= 1e6

*/

/**
 * Naive Approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var majorityElement = function (A) {
    const elementMap = new Map();
    const n = A.length;

    for (let element of A) {
        let count = (elementMap.get(element) || 0) + 1;
        elementMap.set(element, count);

        if (count > Math.floor(n / 2)) {
            return parseInt(element);
        }
    }

    return null;
}

console.log(majorityElement([3, 2, 2, 4, 2, 2]));


/**
 * Space Optimized Solution
 * Time Complexity: O(log(w)*n)
 * Space Complexity: O(1)
 * 
 * 
 * Note: We can also efficiently solve this problem using Boyer-Moore's algorithm in O(n) time complexity and utilizing O(1) space.
 */

var majorityElement = function (A) {
    const n = A.length;
    let ans = 0;

    for (let i = 0; i < 32; i++) {
        let ones = 0;

        for (let num of A) {
            if (num & (1 << i)) {
                ones += 1;
            }
        }

        if (ones > (n >> 1)) ans |= (1 << i);
    }

    return ans;
}

console.log(majorityElement([3, 2, 2, 4, 2, 2]));

