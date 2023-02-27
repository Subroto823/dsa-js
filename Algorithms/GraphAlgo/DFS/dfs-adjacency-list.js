/**
* 
* @DFS - Depth First Search (in adjacency List)
*
* @Time Complexity: O(V+E)
* @Space Complexity: O(V+E)
*
*/
const { AdjacencyList } = require("../graph-adjacency-list-i");

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

const graph = new AdjacencyList();
graph.addVertex(1, 2, 3, 4);
console.log(graph.adjacencyList);