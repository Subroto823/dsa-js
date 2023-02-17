/**
 * @TODO coordinate compression
 * 
 * */

function compress(arr) {
    // arr.sort((a, b) => a - b);

    let indx = 0, c = 0;
    let map = new Map();
    let compressed = new Array(arr.length).fill(0);

    for(num of arr) {
        if(!map.has(num)) {
            map.set(num, indx);
            indx++;
        }
        compressed[c++] = map.get(num);
    }
    console.log(compressed);
}

let arr = [1, 10, 10 ** 8, 10 ** 5, 10 ** 2, 10 ** 8, 10 ** 5, 5, 10];

console.log(compress(arr));