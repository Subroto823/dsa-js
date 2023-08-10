/*
Problem Statement:

Given a sorted array of integers, remove the duplicate elements in place, such that each element appears only once and the relative order of the elements is maintained. Return the new length of the modified array.

Example:
    Input: [1, 1, 2, 2, 3, 4, 4, 4, 5]
    Output: [1, 2, 3, 4, 5]

    Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    Output: [0, 1, 2, 3, 4]

Constraints:

    0 <= nums.length <= 3 * 10^4
    -10^4 <= nums[i] <= 10^4
    nums is sorted in non-decreasing order.
*/

function removeDuplicates(arr) {
    if(arr.length === 0) return;
    let uniqueElement = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[uniqueElement] === arr[i]) continue;
        arr[++uniqueElement] = arr[i];
    }
    return uniqueElement + 1;
}

let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5]
console.log(removeDuplicates(arr)); 
console.log(arr);

/*
    1. Check if the array is empty. If so, return.
    2. Initialize uniqueElement to 0 to keep track of the last unique element's index.
    3. Loop through the array:
        * If the current element is the same as the element at uniqueElement, skip it.
        * Otherwise, move the uniqueElement pointer forward and set the element at that index to the current element.
    4. Return uniqueElement + 1, which represents the length of the modified array with duplicates removed.
*/