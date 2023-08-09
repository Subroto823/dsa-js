// rotate array - in place

function reverse(arr, start, end) {
    while(start < end) {
        console.log("Hello");
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

var rotate = function (arr, k) {
    let n = arr.length;
    k = k % n;
    
    if(k === 0) return;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

let arr = [1, 2, 3, 4, 5];
rotate(arr, 10);
console.log(arr);