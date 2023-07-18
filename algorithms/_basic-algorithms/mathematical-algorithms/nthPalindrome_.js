// nth palindrome number of k digits
// optimized
// time: O(k)
// space: O(1)

const nthPalindrome = (n, k) => {
    // if (k & 1) === 1, then k is odd(bitwise)
    let temp = (k & 1) ? parseInt(k / 2) : parseInt(k / 2) - 1;

    // determine the first half digits
    let palindrome = parseInt(10 ** temp);
    palindrome += n - 1;

    // determine the last half and concat
    temp = palindrome;

    // if k is n digits, truncate the last digit
    if (k & 1) temp = parseInt(temp / 10);

    while (temp) {
        palindrome += String(temp % 10);
        temp = parseInt(temp / 10);
    }

    return Number(palindrome);
}

console.time();
console.log(nthPalindrome(9000, 15));
console.timeEnd();