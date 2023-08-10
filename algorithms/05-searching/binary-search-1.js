/**
 # Binary Search 
    # Time complexity O(logn)
    # Note: only works for sorted array.
 */ 

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length;

    while(start < end) {
        let mid = start + ((end - start) >> 1);

        if(target === arr[mid]) return mid;
        if(target < arr[mid]) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
}


console.log(binarySearch([-5, 2, 4, 6, 20], 20));