function missingNumber(nums) {
    let expectedSum = 0,
        sum = 0;

    for (let i = 0; i < nums.length; i++) {
        expectedSum += i + 1
        sum += nums[i];
    }
    
    return expectedSum - sum;
}

let nums = [0, 2, 1, 4];
console.log(missingNumber(nums));

nums = [6, 3, 2, 9, 4, 5, 0, 7, 1];
console.log(missingNumber(nums));
