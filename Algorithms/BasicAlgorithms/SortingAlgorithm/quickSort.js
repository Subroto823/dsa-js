/**
 # @Quick Sort
 # 
 # pick last element as pivot
 # @Time complexity 
    # Worst case - O(n^2) - This happens when the array is already sorted
    # Avg case - O(nlogn)

 # It is popular algorithm for it's average time complexity of O(nlogn). 
 
 We recursively divide the array into smaller array which is logn and we also have a for loop which is O(n)

 # For worst case complexity even though is quadratic, The average case complexity is what matters with this algorithm
 # It is also possible to implement the same algorithm without taking extra space
 */ 

const quickSort = (arr) => {
    if(arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
const res = quickSort(arr);
console.log(res);