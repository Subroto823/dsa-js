/**
*
* @Time Complexity: O(N * M)
* @Auxiliary Space: O(N * M)
*
*/

function bfs(graph, start) {
    const visited = new Array(graph.length).fill(false);
    const traversal = [];

    let queue = [];

    // Mark the starting node/vertex as visited and put it into the queue
    queue.push(start);
    visited[start] = true;

    while (queue.length != 0) {
        let curr = queue.shift();
        traversal.push(curr);

        // go to the adjacent vertices
        for (let i = 0; i < graph[curr].length; i++) {
            if (graph[curr][i] === 1 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
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

console.log(bfs(graph, 1));