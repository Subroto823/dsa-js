function randomArray(length, max = length) {
    return Array.from({ length: length }, () => {
        return Math.floor(Math.random() * max);
    })
}

function randomNumbers(length, min = 0, max = length) {
    return Array.from({ length: length }, () => {
        return randomRange(min, max);
    });
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    randomArray,
    randomNumbers,
    randomRange
}
