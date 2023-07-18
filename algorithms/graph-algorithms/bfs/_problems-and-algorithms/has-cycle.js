/*
# Topological sorting is not possible if there is a cycle in the graph.

*/

function topSortCycle(G, N) {
    const indegrees = new Array(N).fill(0),
        queue = [];

    G.forEach(row => {
        row.forEach(node => {
            indegrees[node]++;
        })
    });

    indegrees.forEach((indegree, node) => {
        if(indegree === 0) queue.push(node);
    })

    let count = 0;

    while(queue.length) {
        let currentNode = queue.shift();
        count++;

        for(let neighbor of G[currentNode]) {
            indegrees[neighbor]--;

            if(indegrees[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return count === N;
}

// Adjacency List
let graph = [
    [1],
    [0]
]
console.log(topSortCycle(graph, 2));

graph = [
    [2],
    [2],
    [3, 4, 5],
    [5],
    [5],
    []
];
console.log(topSortCycle(graph, 6));