/**
@BFS - Breadth First Search (in Adjacency Matrix)

    Time Complexity: O(N^2)
    Auxiliary Space: O(N^2)
*/

function breadthFirstSearch(adjMatrix, source) {
    const visited = new Array(adjMatrix.length).fill(false);
    const traversal = [];
    let queue = [];

    // Mark the sourceing node/vertex as visited and put it into the queue
    queue.push(source);
    visited[source] = true;

    while (queue.length != 0) {
        let currentVertex = queue.shift();
        traversal.push(currentVertex);

        // go to the adjacent vertices
        for (let i = 0; i < adjMatrix[currentVertex].length; i++) {
            if (adjMatrix[currentVertex][i] === 1 && !visited[i]) {
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

console.log(breadthFirstSearch(adjMatrix, 1));