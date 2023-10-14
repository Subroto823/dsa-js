/**
 * Shell Sort
 * Variation of Insertion Sort with better performance.
 * 
 * Time Complexity: O(n log n) to O(n^2)
 *
 * - Divides the array into smaller subarrays by using a gap sequence.
 * - Sorts the subarrays using Insertion Sort, with smaller gaps.
 * - Gradually reduces the gap size and repeats the process until the entire array is sorted.
 *
 */

const shellSort = function(nums) {
    let n = nums.length;

    for (let gap = n >> 1; gap > 0; gap >>= 1) {
        // insertion sort of the gap size
        for (let i = gap; i < n; i++) {
            let numberToInsert = nums[i];
            let j = i;

            while (j >= gap && nums[j - gap] > numberToInsert) {
                nums[j] = nums[j - gap];
                j -= gap;
            }

            nums[j] = numberToInsert;
        }
    }

    return nums;
}


function main() {
    let nums = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    shellSort(nums);
    console.log(nums);
}

if (require.main === module) main();


module.exports = {
    shellSort
}
