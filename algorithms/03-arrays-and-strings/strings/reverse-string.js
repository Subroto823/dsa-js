/*
Reverse String

You are given a string as input. Your task is to write a function that returns the reverse of the input string.

Example:
    Input: "hello"
    Output: "olleh"

Constraints:
    The length of the input string is at most 10^5 characters.

Note:
    Do not use any built-in functions to reverse the string.
    You should aim for an optimal solution with a linear time complexity. 
*/

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

let str = "Hello, World!"
console.log(reverseString(str));
