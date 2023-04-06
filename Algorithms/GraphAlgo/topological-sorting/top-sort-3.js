/**
?????????????????????
Topological Sorting (bfs based)

*/

function topSort(G) {
    const topOrder = [],
        indegree = new Map(),
        queue = [],
        N = Object.keys(G).length;

    for(let node in G) {
        indegree.set(node, 0);
    }

    for(let node in G) {
        for(let neighbor of G[node]) {
            indegree.set(neighbor, indegree.get(neighbor) + 1);
        }
    }

    for(let node in G) {
        if(indegree.get(node) === 0) queue.push(node);
    }
    let count = 0;

    while(queue.length) {
        let currentNode = queue.shift();
        topOrder.push(currentNode);

        for(let neighbor of G[currentNode]) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);

            if(indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
            count++;
        }
    }

    if(count !== N) {
        console.log("There is a cycle in the graph!");
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