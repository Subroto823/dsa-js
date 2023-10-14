/**

@RadixSort (using counting sort as internal sort)

    Time Complexity: O(n + k)
    Space Complexity: O(n + k)
*/


var mergeSort = function (arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

var merge = function (left, right) {
    const sortedArr = [];
    let l = 0, r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            sortedArr.push(left[l++]);
        } else {
            sortedArr.push(right[r++]);
        }
    }

    return [...sortedArr, ...left.slice(l), ...right.slice(r)];

}


var mergeSortII = function (arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return mergeII(mergeSortII(leftArr), mergeSortII(rightArr));
}

var mergeII = function (left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left.slice(), ...right.slice()];
}

const { randomArray } = require('../../../__helpers/random-numbers-array')
const {isSorted} = require('../../../__helpers/is-sorted')

let nums = randomArray(100000);

console.time();
let sor2 = mergeSortII(nums)
console.log(isSorted(sor2))
console.timeEnd();

console.time();
let sor = mergeSort(nums)
console.log(isSorted(sor))
console.timeEnd();


