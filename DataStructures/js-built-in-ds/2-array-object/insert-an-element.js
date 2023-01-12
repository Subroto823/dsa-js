const insertElementAt = (arr, element, pos) => {
    for(let i = arr.length; i > pos-1; i--) {
        arr[i] = arr[i-1];
    }
    arr[pos-1] = element;
}

let arr = [1, 2, 3, 4, 7, 5,];

insertElementAt(arr, 8, 3);
console.log(arr);

