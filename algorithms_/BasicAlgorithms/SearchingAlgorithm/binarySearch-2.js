/**
 * @Binary Search
 * Time complexity O(logn)
 * (only works for sorted array)
 * (This implementation uses fewer number of comparisons than the previous one)
 */ 

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;


    while(end - start > 1) {
        let mid = (start + end) >> 1;
        
        if(target <= arr[mid]) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if(arr[start] === target) return start;
    else if(arr[end] === target) return end;
    else return -1;
}


console.log(binarySearch([-5, 2, 4, 6, 20], 6));