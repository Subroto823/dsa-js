function randomArray(length, max = length) {
    // ~~ is a faster substitute for Math.floor() for positive numbers
    return Array.from({length: length}, () => ~~(Math.random() * max));
}

module.exports = {
    randomArray 
}
