/**
@Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N + k)

    N -> number of elements in the array
    k -> Range(Max number)
*/
const { randomNumbers } = require("./helper/randomNumbers");

function countSort(array) {
    let output = [];
    let n = array.length, max = -Infinity;
    let count;

    // Find the largest element of the array
    for (let i = 0; i < n; i++) {
        max = Math.max(max, array[i]);
    }

    count = new Array(max + 1).fill(0);

    // Store the count of each element
    for (let i = 0; i < n; i++) {
        count[array[i]]++;
    }

    
    let i = 0;
    while(n > 0) {
        if(count[i] === 0) {
            i++;
        } else {
            output.push(i);
            count[i]--;
            n--;
        }
    }
    return output;
}

let arr = randomNumbers(20);
let res = countSort(arr);
console.log(res);