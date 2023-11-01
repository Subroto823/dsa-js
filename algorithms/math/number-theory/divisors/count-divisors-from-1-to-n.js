/**
 * Count divisors in range from 1 to n
 * 
 * Naive approach
 * Time Complexity: O(n*sqrt(n))
 */
var countDivisorsInRange = function (n) {
    let divisors = []
    for (let i = 1; i <= n; i++) {
        divisors.push(countDivisors(i))
    }
    return divisors;
}

var countDivisors = function(number) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (number / i === i) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }

    return count;
}

console.log(countDivisorsInRange(10));

/*
The downside of this approach is that it is inefficient for large values of n. The main reason for this inefficiency is the repeated calculation of divisors for each number from 1 to n.

In the countDivisorsInRange function, it calls the countDivisors function for each number in the range from 1 to n, resulting in multiple calculations for the same numbers. This leads to unnecessary redundant computations and significantly increases the time complexity. */


/**
 * Efficient approach
 * Time Complexity: O(nlogn)
 */
 var countDivisorsInRange = function(n) {
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
