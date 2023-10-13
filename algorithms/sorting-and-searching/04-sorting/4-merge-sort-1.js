/**
 # Merge Sort
 
    Time Complexity - O(nlogn)
    Space Complexity - O(n)

    # The best-case time complexity for comparison-based sorting algorithms, where elements are compared to determine their relative order, is O(n log n). 
 */

const merge = (leftArr, rightArr) => {
    const sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

let res = mergeSort(arr);
console.log(res);

