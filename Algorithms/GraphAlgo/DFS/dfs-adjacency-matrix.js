/**
@DFS - Depth First Search (in adjacency matrix)

    Time Complexity: O(N^2)
    Auxiliary Space: O(N^2)
*/

function depthFirstSearch(adjMatrix, source) {
    const visited = new Array(adjMatrix.length).fill(false);
    return traverse(adjMatrix, source, visited);
}

function traverse(adjMatrix, source, visited, traversal = []) {
    traversal.push(source);
    visited[source] = true;

    for (let i = 0; i < adjMatrix[source].length; i++) {
        if (adjMatrix[source][i] === 1 && !visited[i]) {
            traverse(adjMatrix, i, visited, traversal);
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

console.log(depthFirstSearch(adjMatrix, 1));