/**
* 
* @DFS - Depth First Search (in adjacency matrix)
*
* @Time Complexity: O(N^2)
* @Auxiliary Space: O(N^2)
*
*/

function dfs(adjMatrix, start) {
    const n = adjMatrix.length;
    const visited = new Array(n).fill(false);

    return dfsHelper(adjMatrix, start, visited, n);
}

function dfsHelper(adjMatrix, start, visited, n, traversal=[]) {
    traversal.push(start);
    visited[start] = true;

    for(let i = 0; i < n; i++) {
        if(adjMatrix[start][i] === 1 && !visited[i]) {
            dfsHelper(adjMatrix, i, visited, n, traversal);
        }
    }
    return traversal;
}

const adjMatrix = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]
]

console.log(dfs(adjMatrix, 1));