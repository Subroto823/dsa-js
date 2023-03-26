/*
Problem Discussion

Given an array of integers of length N. Majority element occurs with > [N/2] frequency. Find the majority element.

Input: [3, 2, 2, 4, 2, 2]
Output: 2

    Explantion:
        The frequency of 2 is 4 > [6/2] = 3

Constraints:
1 <= N <= 1e6

*/
function majorityElement(A) {
    const elementMap = new Map();
    const n = Math.floor(A.length / 2)

    for(let element of A) {
        let count = (elementMap.get(element) || 0) + 1;
        elementMap.set(element, count);

        if(count > n) {
            return parseInt(element);
        }
    }
    return null;
}

console.log(majorityElement([3, 2, 2, 4, 2, 2]));



