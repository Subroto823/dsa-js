/*
Problem : Add Binary Strings

You are given two binary strings, a and b, representing two binary numbers. Your task is to add these two binary numbers and return their sum as a binary string.


Example:

    Input: a = "11", b = "1"
    Output: "100"

    Input: a = "1010", b = "1011"
    Output: "10101"

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

*/

var addBinary = function(a, b) {
    let carry = 0;
    let result = [];

    const max_length = Math.max(a.length, b.length);
    a = a.padStart(max_length, '0');
    b = b.padStart(max_length, '0');
    
    for (let i = max_length - 1; i >= 0; i--) {
        const sum = Number(a[i]) + Number(b[i]) + carry;
        result.push((sum % 2));
        carry = Math.floor(sum / 2);
    }

    if (carry) {
        result.push(carry);
    }

    return result.reverse().join('');
};

a = "11", b = "1";
console.log(addBinary(a, b))

a = "1010", b = "1011";
console.log(addBinary(a, b))