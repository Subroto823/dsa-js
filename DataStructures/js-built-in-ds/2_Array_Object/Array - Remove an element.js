const removeElementAt= (arr, pos) => {

    for(let i = pos-1; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
}

let arr = [1, 2, 3, 4, 7, 5,];

removeElementAt(arr, 5)
console.log(arr);

