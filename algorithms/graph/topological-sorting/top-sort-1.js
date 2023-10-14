/*
Topological Sorting (bfs based)

*/

function topSort(G) {
    const N = G.length,
        topOrder = [],
        indegrees = new Array(N).fill(0),
        queue = [];

    G.forEach(row => {
        row.forEach(node => {
            indegrees[node]++;
        })
    })

    indegrees.forEach((indegree, i) => {
        if(indegree === 0) queue.push(i);
    })

    while(queue.length) {
        let currentNode = queue.shift();
        topOrder.push(currentNode);

        for(let neighbor of graph[currentNode]) {
            indegrees[neighbor]--;

            if(indegrees[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
   return topOrder;
}

// Adjacency List
let graph = [
    [2],
    [2],
    [3, 4, 5],
    [5],
    [5],
    []
]
console.log(topSort(graph)); // [0, 1, 2, 3, 4, 5]