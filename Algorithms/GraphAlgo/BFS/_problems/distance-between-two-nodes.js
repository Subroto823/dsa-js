// Shortest path/distance
function bfs(graph, source, destination) {
    const visited = new Array(graph.length).fill(false);

    const queue = [[source, 0]];
    visited[source] = true;

    while (queue.length) {
        const [node, distance] = queue.shift();

        if (node === destination) return distance;

        graph[node].forEach((hasEdge, neighbor) => {
            if (!visited[neighbor] && hasEdge === 1) {
                queue.push([neighbor, distance + 1]);
                visited[neighbor] = true;
            }
        })
    }
    return -1;
}

let grid = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0]
]

console.log(bfs(grid, 1, 4));