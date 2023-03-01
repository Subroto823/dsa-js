function randomArray(length, max = 100) {
    // ~~ is a faster substitute for Math.floor() for positive numbers
    return Array.from({length: length}, () => ~~(Math.random() * max));
}

// console.log(randomArrayTwo(40, 50));
module.exports = {
    randomArray
}
