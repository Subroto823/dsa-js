/*
# nth palindrome number of k digits - iterative solution
time: O(10^k)
space: O()
*/

const isPalindrome = (num) => {
    let tempNum = num;
    let rem, reversedNum = 0;

    while (tempNum > 0) {
        rem = tempNum % 10;
        reversedNum = reversedNum * 10 + rem;
        tempNum = parseInt(tempNum / 10);
    }

    return num === reversedNum;
}

const nthPalindrome = (n, k) => {
    let num = 10 ** (k - 1);
    let count = n;
    let lastKDigitNum = 10 ** k - 1;

    while (num <= lastKDigitNum) {
        if (isPalindrome(num)) count--;
        if (count === 0) break;

        num++;
    }

    if (num > lastKDigitNum) return `There's no ${n}th palindrom number in ${k} digits!`
    return num;
}

console.time();
console.log(nthPalindrome(90, 7)); // 111
console.timeEnd();

