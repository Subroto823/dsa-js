/* 
Given a directed graph, find out if a vertex j is reachable from another vertex i for all vertex pairs (i, j) in the given graph.

    graph[i][j] = 1, if there is a direct edge from i to j
    graph[i][j] = 0, if there is no edge
*/

function floydWarshall(matrix) {
    const N = matrix.length;

    for(let k = 0; k < N; k++) {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                matrix[i][j] = matrix[i][j] || (matrix[i][k] && matrix[k][j]);
            }
        }
    }
    return matrix;
}

let graph = [
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
];
console.table(floydWarshall(graph));

graph = [
    [1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1]
];
console.table(floydWarshall(graph));