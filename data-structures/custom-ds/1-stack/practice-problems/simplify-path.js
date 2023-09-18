/*
Problem Statement:

Given a string representing an absolute file path in Unix-style notation, simplify it. 
In Unix-style, a period '.' refers to the current directory, a double period '..' refers to the parent directory, and multiple consecutive slashes '/' are treated as a single slash. 
The absolute path must start with '/' and may contain only the characters '/', '.', and alphanumeric characters.

Return the simplified canonical path.

Examples:

    Input: "/home/", Output: "/home"
    Input: "/../", Output: "/"
    Input: "/home//foo/", Output: "/home/foo"
    Input: "/a/./b/../../c/", Output: "/c"
    Input: "/a/../../b/../c//.//", Output: "/c"
*/
const Stack = require('../stack');

const simplifyPath = function(path) {
    const stack = new Stack();
    const arr = path.split('/');

    for(let item of arr) {
        if(item === '' || item === '.') continue;
        if(item === '..') stack.pop();
        else stack.push(item);
    }
    
    return "/" + stack.join("/");
}

const res1 = simplifyPath("../hello//world");
const res2 = simplifyPath("/../abc/./def/");
const res3 = simplifyPath("/a/./b/../../c/");

console.log(res1);
console.log(res2);
console.log(res3);
