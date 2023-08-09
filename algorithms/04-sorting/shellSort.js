/**
 @ShellShort
 
 Shell sort is a generalized version of the @insertionSort algorithm and it is highly efficient.
 
    Time Complexity: 
        Average : O(nlogn)
        Worst : O(n^2)
 
    Space Complexity: O(1)
 */

const { randomNumbers } = require("./helper/randomNumbers");

function shellSort(nums) {
    let n = nums.length;

    for (let interval = ~~(n / 2); interval > 0; interval = ~~(interval / 2)) {

        // insertion sort of the interval size
        for (let i = interval; i < n; i++) {
            let numberToInsert = nums[i];
            let j = i;

            while (j >= interval && nums[j - interval] > numberToInsert) {
                nums[j] = nums[j - interval];
                j -= interval;
            }
            nums[j] = numberToInsert;
        }
    }
    return nums;
}

let nums = randomNumbers(10000000);
shellSort(nums);
console.log(nums);
