const countOdd = function (A) {
    let count = 0;
    for (let num of A) {
        count ^= num;
    }

    return count;
}

console.log(countOdd([1, 1, 3, 3, 5]))
console.log(countOdd([1, 1, 2, 4, 5]))