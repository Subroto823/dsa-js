/*
Problem: Count And Say

The count-and-say sequence is a sequence of integers where each integer is represented as the count of adjacent repeating digits, followed by the digit itself. The sequence starts with the digit '1', and the subsequent numbers are generated by reading the previous number and "saying" it out loud.

For example, the first few terms of the count-and-say sequence are:

    1
    11 (one 1)
    21 (two 1s)
    1211 (one 2, one 1)
    111221 (one 1, one 2, two 1s)


Constraints:
    1 <= n <= 30
*/

var countAndSay = function(n) {
    let result = '1';

    while(n-- > 1) {
        result = generateNextState(result);
    }

    return result;
};

function generateNextState(s) {
    let count = 1;
    let next = '';

    for(let i = 0; i < s.length; i++) {
        if(i < s.length - 1 && s[i] === s[i+1]) {
            count++
        } else {
            next += count + s[i];
            count = 1;
        }
    }

    return next;
}

let n = 2;
console.log(countAndSay(n));

n = 4;
console.log(countAndSay(n));