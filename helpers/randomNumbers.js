function randomArray(length, max = length) {
    // ~~ is a faster substitute for Math.floor() for positive numbers
    return Array.from({ length: length }, () => ~~(Math.random() * max));
}

function randomNumbers(length, min = 0, max = length) {
    if(arguments.length === 2) {
        if(min > 0) {
            max = min;
            min = 0;
        }
    }

    return Array.from({ length: length }, () => {
        return randomRange(min, max);
    });
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumbers(10, 10));

module.exports = {
    randomArray,
    randomNumbers
}

