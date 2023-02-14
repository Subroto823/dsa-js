/*
Rotate 90 degree:

   [[1, 2, 3]        [[7, 4, 1]
    [4, 5, 6]   =>    [8, 5, 2]
    [7, 8, 9]]        [9, 6, 3]]

*/

const swap = (matrix, x1, y1, x2, y2) => {
    let temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}

const rotateMatrix = (matrix) => {
    const len = matrix.length;
    const len2 = Math.floor(len / 2);

    /*
    1 2 3      7 8 9
    4 5 6  =>  4 5 6
    7 8 9      1 2 3 */
    for(let i = 0; i < len2; i++) {
        for(let j = 0; j < len; j++) {
            swap(matrix, i, j, len - i - 1, j);
        }
    }

    /* 
    7 8 9      7 4 1
    4 5 6  =>  8 5 2
    1 2 3      9 6 3 */
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            swap(matrix, i, j, j, i);
        }
    }
    return matrix;
}

console.table(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))


