function sumOfArray(nums) {
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum;
}

function maxSumAfterKNegations(arr, k) {
    arr.sort((a, b) => a - b);
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(k === 0 || arr[i] > 0) break;
        arr[i] = -arr[i]
        k--;
    }

    // If k is odd then we have to done single operation and it must be done on the smallest positive element
    if(k & 1) {
        let minIndx = 0;

        for(let i = 1; i < n; i++) {
            if(arr[i] < arr[minIndx]) {
                minIndx = i;
            }
        }
        arr[minIndx] = -arr[minIndx];
    }
    return sumOfArray(arr);
}

console.log(maxSumAfterKNegations([2,-3,-1,5,-4], 2));