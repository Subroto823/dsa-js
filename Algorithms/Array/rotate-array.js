// rotate array - in place

var rotate = function (arr, k) {
    let n = arr.length;
    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

let arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr);