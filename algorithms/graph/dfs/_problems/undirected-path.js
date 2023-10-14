/*
Problem Statement

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB 

*/

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

function buildGraph (edges) {
    const graph = {};

    for(let edge of edges) {
        let [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function hasPath(graph, src, dest, visited) {
    if(src === dest) return true;

    if(visited.has(src)) return;
    visited.add(src);

    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dest, visited)) {
            return true;
        }
    }
    return false;
}

let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

console.log(undirectedPath(edges, 'j', 'm'));