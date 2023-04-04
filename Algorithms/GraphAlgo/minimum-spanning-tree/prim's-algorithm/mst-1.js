/*
Minimum Spanning Tree
    Prim's Algorithm (with normal queue and sorting - for adjacency matrix)

*/
function primsMST(graph, source) {
    const N = graph.length,
       cost = new Array(N).fill(Infinity),
       visited = new Array(N).fill(false),
       queue = [];

    queue.push([source, 0]);
    cost[source] = 0;

    while(queue.length) {
        let [ currentNode ] = queue.shift();

        if(visited[currentNode]) continue;
        visited[currentNode] = true;

        for(let neighbor = 0; neighbor < N; neighbor++) {
            let neighborCost = graph[currentNode][neighbor];

            if(neighborCost === 0 || visited[neighbor]) continue;
            if(neighborCost < cost[neighbor]) {
                queue.push([neighbor, neighborCost]);
                cost[neighbor] = neighborCost;
            }
        }
        queue.sort((a, b) => a[1] - b[1]);
    }
    return cost;
}

let graph = [
    [0, 4, 2, 0],
    [4, 0, 1, 3],
    [2, 1, 0, 2],
    [0, 3, 2, 0]
];

console.log(primsMST(graph, 0))