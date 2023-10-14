/**
 * Bucket Sort
 * Time Complexity: Best - O(n+k), Worst - O(n^2)
 *
 * - Divides the array into a number of buckets.
 * - Distributes the elements into the buckets based on their values.
 * - Sorts each bucket (using a different sorting algorithm) and combines the sorted buckets to obtain the final sorted array.
 */

const { getMinMax } = require("../../../../__helpers/max-and-min-in-a-array");


const bucketSort = function(nums, bucketSize = 40) {
    const { min, max } = getMinMax(nums);

    const numBuckets = Math.floor((max - min) / bucketSize) + 1;
    const buckets = new Array(numBuckets)
        .fill()
        .map(() => []);
    
    for(let num of nums) {
        const bucketIndex= Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    }

    let k = 0;
    buckets.forEach( bucket => {
        bucket.sort((a, b) => a - b);
        bucket.forEach( num => {
            nums[k++] = num;
        })
    })
}


function main() {
    let nums = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    bucketSort(nums);
    console.log(nums);
}

if (require.main === module) main();


module.exports = {
    bucketSort
}
