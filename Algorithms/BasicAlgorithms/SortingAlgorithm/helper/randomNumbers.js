function randomArray(length, max = length) {
    // ~~ is a faster substitute for Math.floor() for positive numbers
    return Array.from({ length: length }, () => ~~(Math.random() * max));
}

function randomNumbers(length, min = 0, max = length) {
    return Array.from({ length: length }, () => {
        let maxNum = ~~(Math.random() * max);
        let minNum = Math.floor(Math.random() * min);
        return maxNum & 1 ? minNum : maxNum;
    }
    );
}

module.exports = {
    randomArray,
    randomNumbers
}
