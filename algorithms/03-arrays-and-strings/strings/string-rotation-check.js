/*
Problem: String Rotation Check

Given two strings s1 and s2, your task is to write a function that determines whether s2 is a rotation of s1. A rotation of a string involves moving some characters from the beginning to the end, while maintaining the order of the remaining characters.

Example:
    Input: str1 = "waterbottle", str2 = "erbottlewat";
    Output: true
*/

const isRotation = (s1, s2) => {
    if (s1.length !== s2.length) return false;

    let concatenated = s1 + s1;
    return concatenated.includes(s2);
}

const str1 = "waterbottle";
const str2 = "erbottlewat";
console.log(isRotation(str1, str2));