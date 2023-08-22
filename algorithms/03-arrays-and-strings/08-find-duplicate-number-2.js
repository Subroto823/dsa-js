/*
# Find the Duplicate Number
    # Using Sorting
    # Time Complexity: O(nlogn)
*/

function findDuplicateNumber(nums) {
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) return nums[i];
    }
}

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicateNumber(nums));

nums = [3, 1, 3, 4, 2]
console.log(findDuplicateNumber(nums));