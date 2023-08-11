function sumOfAllSubarrays(arr) {
    const n = arr.length;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let subarraySum = 0;
            for (let k = i; k <= j; k++) {
                subarraySum += arr[k];
            }
            totalSum += subarraySum;
        }
    }

    return totalSum;
}

const arr = [1, 2, 3];
console.log(sumOfAllSubarrays(arr)); // Correct Output: 24
