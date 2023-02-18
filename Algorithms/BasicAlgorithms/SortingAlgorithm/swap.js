const swap = (arr, index1, index2) => {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

module.exports = {
    swap
}