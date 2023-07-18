/**
 * 
 * Smallest subarray size
 * 
 */

function smallestSubarray(arr, targetSum) {
    let minWindowSize = Infinity;
    let currWindowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currWindowSum += arr[windowEnd];

        while(currWindowSum >= targetSum) {
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
            currWindowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return minWindowSize;
}

console.log(smallestSubarray([4, 2, 2, 7, 8, 1, 2, 8, 1, 0], 8));
