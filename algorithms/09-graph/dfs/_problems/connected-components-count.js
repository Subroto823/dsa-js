/*
Problem Statement

Write a function, connectedComponentCount, that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph. */

function connectedComponentsCount(graph) {
    const visited = new Set();
    let count = 0;

    for(let node in graph) {
        if(dfs(graph, node, visited)) {
            count++;
        }
    }
    return count;
}

function dfs (graph, source, visited) {
    if(visited.has(String(source))) return false;
    
    visited.add(String(source));

    for(let neighbor of graph[source]) {
        dfs(graph, neighbor, visited);
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