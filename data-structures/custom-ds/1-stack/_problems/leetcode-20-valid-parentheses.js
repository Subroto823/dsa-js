/*
Problem Statement:
Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

An input string is considered valid if:
    * Open brackets must be closed by the same type of brackets.
    * Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Examples:

    Input: "()", Output: true
    Input: "()[]{}", Output: true
    Input: "(]", Output: false
    Input: "([)]", Output: false
    Input: "{[]}", Output: true
*/
const Stack = require('../stack');

const validParentheses = function (s) {
    const stack = new Stack();

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
            continue;
        }

        if (stack.isEmpty()) return false;

        let check_start = stack.pop();

        switch (c) {
            case ')':
                if (check_start !== '(') {
                    return false;
                }

            case '}':
                if (check_start !== '{') {
                    return false;
                }

            case ']':
                if (check_start !== '[') {
                    return false;
                }
        }
    }

    return true;
}

console.log(validParentheses("()[]{}"))
console.log(validParentheses(""));
console.log(validParentheses("[({})]"));
console.log(validParentheses("[][[]](){}"));
console.log(validParentheses("[(}]"));
console.log(validParentheses("(]"));

