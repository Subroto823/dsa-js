/**
@BucketSort

    Time Complexity: O(n + k)
    Space Complexity: O(n + k)
*/
const { getMax } = require("./helper/maxMinInArray");
const { randomNumbers } = require("./helper/randomNumbers");

function bucketSort(nums) {
    let sortedArray = []
    let n = nums.length;
    let buckets = new Array(n).fill().map(() => []);

    for(let i = 0; i < n; i++) {
        let bucketIndex = Math.floor(nums[i]) * n;
        console.log(bucketIndex);
        buckets[bucketIndex].push(nums[i]);
    }
    console.log(buckets);
}

let arr = randomNumbers(20, 20);
// arr = [3, 4, 3, 12, 2, 6]

console.time();
let res = bucketSort(arr);
console.timeEnd();
// console.log(arr);
