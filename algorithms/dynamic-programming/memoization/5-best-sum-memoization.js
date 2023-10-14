/*
Write a function `besSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments 

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum. 
If there is no combination that adds up to the targetSum, then return null.

If there  is a tie for the shortest combination, you may return any one of hte shortest.

bestSum(7, [5, 3, 4, 7]) 
    # possible combinations [3, 4], [7] 
    # answer [7]
      
bestSum(8, [2, 3, 5]) 
    # possible combinations [3, 5], [2, 2, 2, 2], [2, 3, 3]
    # answer [3, 5]

bestSum(7, [2, 4]) 
    # answer null
*/
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];

            // if the combination is shorter than the courrent "shortest", update it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(100, [1, 2, 5, 25]));

/*
m = target sum
n = numbers.length

brute force approach complexity
    time: O(n^m * m)
    space: O(m^2)

bestSum memoized complexity
    time: O(n * m^2)
    space: O(m^2)
*/
