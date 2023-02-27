/**
*
* @Time Complexity: O(N * M)
* @Auxiliary Space: O(N * M)
*
*/

function dfs(graph, start) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    
    return dfsHelper(graph, start, visited, n);
}

function dfsHelper(graph, start, visited, n, traversal=[]) {
    traversal.push(start);
    visited[start] = true;

    for(let i = 0; i < n; i++) {
        if(graph[start][i] === 1 && !visited[i]) {
            dfsHelper(graph, i, visited, n, traversal);
        }
    }
    return traversal;
}

const graph = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]
]

console.log(dfs(graph, 1));