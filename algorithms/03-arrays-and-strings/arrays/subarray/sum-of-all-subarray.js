/**
 * 
 * @Sum of all subarray
 * 
 * @Brute force approach
 * @Time complexity: O(n^2)
 * @Space complexity: O(1)
 * 
 * (The efficient approach of this problem is in Adhoc(Algorithms/Adhoc) section)
 */

function subArraySum(arr) {
    let len = arr.length;
    let result = 0;

    for(let i = 0; i < len; i++) {
        let tmp = 0;
        for(let j = i; j < len; j++) {
            tmp += arr[j];
            result += tmp;
        }
    }
    return result;
}

let nums = [1, 2, 3];
console.log(subArraySum(nums));

/*
All the subarrays of [1, 2, 3] :
   [1], [1, 2], [1, 2, 3], [2], [2, 3], [3] 
*/