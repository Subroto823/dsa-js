/*
Problem Statement

    Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dest). 
    The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

*/

function hasPath(graph, src, dest) {
    if(src === dest) return true;

    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dest)) {
            return true;
        }
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    k: []
}

console.log(hasPath(graph, 'f', 'k'));