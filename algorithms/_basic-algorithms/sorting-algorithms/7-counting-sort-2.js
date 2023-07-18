/**
# Counting Sort (for positive number)

    Time Complexity: O(N + k) 
    Space Complexity: O(N + k)

    N -> number of elements in the array
    k -> Range(Max number)
*/
const { randomArray } = require("./_helper-functions/random-numbers-array");
const { getMax } = require("./_helper-functions/max-and-min-in-a-array");

function countSort(array) {
    const sortedArray = [],
        max = getMax(array),
        count = new Array(max + 1).fill(0);
    let  n = array.length;

    // Store the count of each element
    for (let i = 0; i < n; i++) {
        count[array[i]]++;
    }

    let i = 0;
    while(n > 0) {
        if(count[i] === 0) i++;
        else {
            sortedArray.push(i);
            count[i]--;
            n--;
        }
    }
    return sortedArray;
}

let arr = randomArray(20);
let res = countSort(arr);
console.log(res);