// for undirected graph 
function floydWarshall(matrix) {
    const N = matrix.length;

    for(let k = 0; k < N; k++) {
        for(let i = 0; i < N; i++) {
            if(k === i) continue;

            for(let j = 0; j < N; j++) {
                if(i === j) continue;

                let distance = matrix[i][k] + matrix[k][j];
                if(distance < matrix[i][j] || matrix[i][j] === 0) {
                    matrix[i][j] = matrix[j][i] = distance;
                }
            }
        }
    }
    return matrix;
}

let matrix = [
    [0, 7, 10, 2],
    [7, 0, 1, 0],
    [10, 1, 0, 3],
    [2, 0, 3, 0]
]
console.table(floydWarshall(matrix))