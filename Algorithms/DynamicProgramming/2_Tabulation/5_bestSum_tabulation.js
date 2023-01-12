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
const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(let num of numbers) {
                const combination = [...table[i], num];
                
                // it this current combination is shorter than what is already stored
                if(!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(100, [1, 25, 5, 10]));


/*
m = target sum
n = numbers.length

bestSum tabulation complexity
    time: O(n * m^2)
    space: O(m^2)
*/
