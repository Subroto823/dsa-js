/**
 @Merge Sort

    Time Complexity - O(nlogn)
    Space Complexity - O(n)
 */
    const { randomArray } = require("./helper/randomNumbers");

    const merge = (arr, left, mid, right) => {
        let merged = [];
        let i = left;
        let j = mid + 1;
    
        for (let k = 0; k <= right - left; k++) {
            if (i > mid) {
                merged[k] = arr[j++];
            }
            else if (j > right) {
                merged[k] = arr[i++];
            }
            else if (arr[i] < arr[j]) {
                merged[k] = arr[i++];
            }
            else {
                merged[k] = arr[j++];
            }
        }
    
        let k = 0;
        for (let i = left; i <= right; i++) {
            arr[i] = merged[k++];
        }
    }
    
    const mergeSort = (arr, low = 0, high = arr.length - 1) => {
        if (low >= high) return;
    
        let mid = low + ((high - low) >> 1);
    
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    
    }
    
    let arr = randomArray(40);
    
    mergeSort(arr);
    console.log(arr);