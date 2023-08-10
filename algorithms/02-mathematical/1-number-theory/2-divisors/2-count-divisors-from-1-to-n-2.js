/*
# Count divisors in range from 1 to n
    # Efficient approach
    # Time Complexity: O(n*sqrt(n))
*/
function countDivisorsInRange(n) {
    const divisorsCount = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            divisorsCount[j]++;
        }
    }

    return divisorsCount;
}

const divisorsCountArray = countDivisorsInRange(10);
console.log(divisorsCountArray);
  
/*
In this implementation, we create an array divisorsCount of length n + 1 and initialize all elements to 0. Then, we iterate from 1 to n. For each number i, we update the count of divisors for all multiples of i by incrementing the corresponding elements in the divisorsCount array. */
