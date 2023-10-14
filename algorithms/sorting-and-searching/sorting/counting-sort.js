/**
 * Counting Sort
 * Time Complexity: O(n + k) where 'k' is the range of input values
 *
 * - Calculates the frequency of each element in the input array.
 * - Creates a cumulative frequency array to determine the final positions of elements.
 * - Builds the sorted output array based on the cumulative frequency.
 *
 * Note: This implementation will only work for positive numbers.
 */

const countSort = function (nums) {
    const sorted = [];
    const max = Math.max(...nums);
    const count = new Array(max + 1).fill(0);
    let  n = nums.length;

    for (const num of nums) {
        count[num]++;
    }

    let i = 0;
    while(n > 0) {
        if(count[i] === 0) i++;
        else {
            sorted.push(i);
            count[i]--;
            n--;
        }
    }

    return sorted;
}


function main() {
    let nums = [4, 6, 3, 12, 7, 8, 12, 5, 2, 1, 8, 11, 10, 0, 5, 2];

    let sortedNums = countSort(nums);
    console.log(sortedNums);
}

if (require.main === module) main();


module.exports = {
    countSort
}