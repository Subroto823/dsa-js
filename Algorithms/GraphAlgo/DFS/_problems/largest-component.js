/*
Problem Statement

Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

function largestComponent(graph) {
    const visited = new Set();
    let largest = 0;

    for(let node in graph) {
        largest= Math.max(largest, dfs(graph, node, visited));
    }
    return largest;
}

function dfs(graph, node, visited) {
    if(visited.has(String(node))) return 0;

    visited.add(String(node));
    let size = 1

    for(let neighbor of graph[node]) {
        size += dfs(graph, neighbor, visited);
    }
    return size;
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

console.log(largestComponent(graph));