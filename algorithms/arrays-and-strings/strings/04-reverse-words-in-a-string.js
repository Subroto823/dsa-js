/*
Problem Statement:
You are given a string containing words separated by spaces. Your task is to reverse the order of words in the string while keeping the individual words unchanged.

Write a function reverse_words that takes a single string as input and returns a new string with the order of words reversed.

Example:
    Input: "Hello World, how are you?"
    Output: "you? are how World, Hello" 
*/

// Approach 1
var reverseWords = function(s) {
    let reversed = '';
    let word = '';

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word;
        } else if (word !== '') {
            reversed += word + ' ';
            word = '';
        }
    }

    reversed += word;
    return reversed.trimEnd();
};

let s = "  a good   example  "
console.log(reverseWords(s));

s = "Hello World, how are you?"
console.log(reverseWords(s));


// Approach 2
var reverseWordsII = function(s) {
    let words = s.trim().split(/\s+/);
    return words.reverse().join(" ");
};

s = "  a good   example  "
console.log(reverseWordsII(s));

s = "  hello world  "
console.log(reverseWordsII(s));