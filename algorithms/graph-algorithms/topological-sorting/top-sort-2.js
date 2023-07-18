/*
Topological Sorting (bfs based)

*/

function topSort(G) {
    const topOrder = [],
        indegree = {},
        queue = [];

    for(let node in G) {
        indegree[node] = 0;
    }

    for(let node in G) {
        for(let neighbor of G[node]) {
            indegree[neighbor]++;
        }
    }

    for(let node in G) {
        if(indegree[node] === 0) queue.push(node);
    }

    while(queue.length) {
        let currentNode = queue.shift();
        topOrder.push(currentNode);

        for(let neighbor of G[currentNode]) {
            indegree[neighbor]--;

            if(indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return topOrder;
}

// Adjacency List
let graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: ['E'],
    E: []
}
console.log(topSort(graph)); // [A, B, C, D, E]