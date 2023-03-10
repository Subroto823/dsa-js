function randomArray(length, max = 100) {
    // ~~ is a faster substitute for Math.floor() for positive numbers
    return Array.from({length: length}, () => ~~(Math.random() * max));
}

console.log(randomArray(40, 50));

