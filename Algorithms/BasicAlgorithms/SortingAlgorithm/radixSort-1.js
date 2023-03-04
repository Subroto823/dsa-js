/**
@RadixSort (using counting sort as internal sort)

    Time Complexity: O(n + k)
    Space Complexity: O(n + k)
*/
const { getMax } = require("./helper/maxMinInArray");
const { randomNumbers } = require("./helper/randomNumbers");

function radixSort(nums) {
    let max = getMax(nums);
    let radix = parseInt(max.toString().length);
    let sortedArray;

    for (let i = 0; i < radix; i++) {
        sortedArray = countingSort(nums, i, radix);
    }
    return sortedArray;
}

function countingSort(nums, digit, radix) {
    let n = nums.length;
    let sortedArray = new Array(n).fill(0);
    let count = new Array(radix).fill(0);
    
    for (let i = 0; i < n; i++) {
        let digitCount = ~~(nums[i] / (radix ** digit)) % radix;
        count[digitCount]++;
    }
    console.log(count);
    // console.log(sortedArray)

    // for (let i = 0; i < i; i++) {
    //     nums[i] = sortedArray[i];
    // }
}

let arr = randomNumbers(20);
arr = [3, 4, 3, 12, 2, 6]
let res = radixSort(arr);
// console.log(arr);
