function floydWarshall(matrix) {
    const N = matrix.length;

    for(let k = 0; k < N; k++) {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if((matrix[i][k] + matrix[k][j]) < matrix[i][j]) {
                    matrix[i][j] = matrix[i][k] + matrix[k][j];
                }
            }
        }
    }
    return matrix;
}

let matrix = [
    [0, 3, Infinity, Infinity],
    [2, 0, 2, Infinity],
    [Infinity, 5, 0, Infinity],
    [20, Infinity, 8, 0]
]

console.log(floydWarshall(matrix))