/**
 * @Insertion Sort
 *
 * @Time Complexity - O(n^2)
 * @stable algorithm.
 * 
 */

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

insertionSort(arr);
console.log(arr);