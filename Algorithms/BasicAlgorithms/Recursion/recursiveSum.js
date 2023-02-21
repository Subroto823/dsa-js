// O(n^2)
const slowSum = (array) => {
    if(array.length === 0) return 0;
    const rest = array.slice(1);
    return array[0] + slowSum(rest);
}

// O(n)
const sum = (array) => {
    return recursiveSum(array, 0);
}

function recursiveSum(array, start) {
    if(start === array.length) return 0;
    return array[start] + recursiveSum(array, start + 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(slowSum(arr));
console.log(sum(arr));