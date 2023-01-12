/*
 *
 * Time Complexity - O(n^2)
 * Quadratic time complexity isn't great for sorting
 */
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}

const res = bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);

console.log(res);