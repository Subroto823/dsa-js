/**
@BucketSort

    Time Complexity :
        Average : O(n+k)
        Worst: O(n^2)

	Space Complexity : O(n+k)
    
    @Stable
*/
const { getMinMax } = require("./helper/maxMinInArray");
const { randomNumbers } = require("./helper/randomNumbers");

function bucketSort(nums, bucketSize = 40) {
    const { min, max } = getMinMax(nums);

    let bucketCount = ~~((max - min) / bucketSize) + 1;
    let buckets = new Array(bucketCount)
        .fill()
        .map(() => []);
    
    for(let num of nums) {
        buckets[~~((num - min) / bucketSize)].push(num);
    }

    let k = 0;
    buckets.forEach( bucket => {
        bucket.sort((a, b) => a - b);
        bucket.forEach( num => {
            nums[k++] = num;
        })
    })
    return nums;
}

let arr = randomNumbers(20, 40);
arr = [0.4, 0.35, 0.42, 0.41, 0.40, 0.36];
bucketSort(arr);
console.log(arr);
