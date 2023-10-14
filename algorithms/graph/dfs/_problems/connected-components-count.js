/*
Problem Statement

Write a function, connectedComponentCount, that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph. 
*/

const connectedComponentsCount = function(graph) {
    const seen = new Set();
    let count = 0;

    for (let node in graph) {
        if (dfs(graph, node, seen)) {
            count++;
        }
    }

    return count;
}

const dfs = function(graph, source, seen) {
    if (seen.has(String(source))) return false;
    seen.add(String(source));

    for (let neighbor of graph[source]) {
        dfs(graph, neighbor, seen);
    }

    return true;
}

let graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

console.log(connectedComponentsCount(graph));