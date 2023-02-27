/**
*
* @BFS - Breadth First Search (in Adjacency Matrix)
*
* @Time Complexity: O(N^2)
* @Auxiliary Space: O(N^2)
*
*/

function bfs(adjMatrix, start) {
    const visited = new Array(adjMatrix.length).fill(false);
    const traversal = [];

    let queue = [];

    // Mark the starting node/vertex as visited and put it into the queue
    queue.push(start);
    visited[start] = true;

    while (queue.length != 0) {
        let curr = queue.shift();
        traversal.push(curr);

        // go to the adjacent vertices
        for (let i = 0; i < adjMatrix[curr].length; i++) {
            if (adjMatrix[curr][i] === 1 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
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

console.log(bfs(adjMatrix, 1));