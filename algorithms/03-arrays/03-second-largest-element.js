/*
Problem Statement: Second Largest Element

You are given an array of integers. Your task is to find the second largest element present in the array.

Input:

    An array arr of length n (2 ≤ n ≤ 10^5), where each element arr[i] (-10^9 ≤ arr[i] ≤ 10^9) is an integer.

Output:

    Return an integer representing the second largest element in the array.

Example:

    Input: [4, 2, 7, 5, 1]
    Output: 5

    Input: [9, 9, 9, 8, 8]
    Output: 8

Note:
    * It is guaranteed that the array will contain at least two distinct elements.
    * The second largest element refers to the element that is smaller than the largest element but larger than all other elements in the array.
*/

function findSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = -Infinity;

    for(let num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }

    return secondLargest
}

let nums = [4, 2, 7, 5, 1];
console.log(findSecondLargest(nums));

nums = [9, 9, 9, 8, 8];
console.log(findSecondLargest(nums));