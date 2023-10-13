/**
 * Insertion Sort
 * Time Complexity: O(n^2)
 *
 * - Divides the array into sorted and unsorted parts.
 * - Iterates through the unsorted part, taking one element at a time and placing it in its correct position in the sorted part.
 * - Repeats this process until the entire array is sorted.
 *
 */

const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }

    return arr;
}

let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];

insertionSort(arr);
console.log(arr);