/*
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments 

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed

You may assume that all input numbers are nonnegative.

canSum(7, [5, 3, 4, 7]) -> true
    3 + 4 = 7
    7

canSum(7, [2, 4]) -> false
*/
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= targetSum; i++) {
        if(table[i] === true) {
            for(let num of numbers) {
                table[i + num] = true
            }
        }
    }
    return table[targetSum]
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));

/*
# canSum tabulation complexity
    O(m*n) time
    O(m) space */