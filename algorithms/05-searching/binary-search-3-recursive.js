/*
# Binary Search (Recursive)
    # Time complexity O(logn)
*/ 

const recursiveBinarySearch = (arr, target) => {
    const search = (start, end) => {
        if(start > end) return -1;

        let mid = Math.floor((start + end) / 2);  

        if(target === arr[mid]) {
            return mid;
        }
        else if(target < arr[mid]) {
           return search(start, mid - 1);
        } else {
           return search(mid + 1, end);
        }
    }

    return search(0, arr.length - 1);
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 4));