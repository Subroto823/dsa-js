/**
 * Merge Sort
 * Implementation III
 */

const sortArray = function (nums) {
    const mergeSort = function(l, r) {
        if (l >= r) return;
        let mid = l + ((r - l) >> 1);
    
        mergeSort(l, mid);
        mergeSort(mid + 1, r);
        merge(l, mid, r);
    }
    
    const merge = function(l, mid, r) {
        let i = l, j = mid + 1;
    
        for (let k = l; k <= r; k++) {
            if (i > mid) merged[k] = nums[j++];
            else if (j > r) merged[k] = nums[i++];
            else if (nums[j] < nums[i]) merged[k] = nums[j++];
            else merged[k] = nums[i++];
        }
    
        for (let k = l; k <= r; k++) {
            nums[k] = merged[k];
        }
    }

    const merged = new Array(nums.length).fill(0);
    mergeSort(0, nums.length - 1);
}


/**
 * Merge Sort (bottom-up)
 * Implementation IV
 */

const mergeSort = function(nums) {
    const n = nums.length;
    const merged = new Array(n).fill(0);

    for (let i = 1; i < n; i *= 2) {
        for (let lo = 0; lo < n - i; lo += (i * 2)) {
            let mid = lo + i - 1;
            let hi = Math.min(lo + (2 * i) - 1, n - 1);
            merge(nums, merged, lo, mid, hi);
        }
    }
}

var merge = function(nums, merged, lo, mid, high) {
    let i = lo, j = mid + 1;

    for (let k = lo; k <= high; k++) {
        if (i > mid) merged[k] = nums[j++];
        else if (j > high) merged[k] = nums[i++];
        else if (nums[j] < nums[i]) merged[k] = nums[j++];
        else merged[k] = nums[i++];
    }

    for (let k = lo; k <= high; k++) {
        nums[k] = merged[k];
    }
}


function main () {
    let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    sortArray(arr);
    console.log(arr);

    arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    mergeSort(arr);
    console.log(arr);
}

if (require.main === module) main();

module.exports = {
    sortArray,
    mergeSort
}