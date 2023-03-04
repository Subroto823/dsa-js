function getMax(array) {
    let max = array[0]

    for (let i = 1; i < array.length; i++) {
        max = Math.max(max, array[i]);
    }
    return max;
}

function getMin(array) {
    let min = array[0]

    for (let i = 1; i < array.length; i++) {
        max = Math.min(min, array[i]);
    }
    return min;
}

module.exports = {
    getMax,
    getMin
}