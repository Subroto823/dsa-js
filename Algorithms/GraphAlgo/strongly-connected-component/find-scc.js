/**
# Strongly Connected Component
    # A strongly connected component is the portion of a directed graph in which there is a path from each vertex to another vertex. 
    # It is applicable only on a directed graph

    (Implementation of Kosaraju’s algorithm)
*/

function findSCC(graph)  {
    const N = graph.length,
        stack = [];
    let visited = new Array(N).fill(false);

    for(let i = 0; i < N; i++) {
        if(!visited[i]) {
            dfs(graph, visited, i, stack);
        }
    }

    const reversedGraph = reverseGraph(graph, N);
    visited = new Array(N).fill(false);
    let totalSCC = 0;

    while(stack.length) {
        let currentNode = stack.pop();

        if(!visited[currentNode]) {
            totalSCC++;
            dfsII(reversedGraph, visited, currentNode);
        }
    }
    return totalSCC;
}

function dfs(graph, visited, node, stack) {
    visited[node] = true;

    for(let neighbor of graph[node]) {
        if(!visited[neighbor]) {
            dfs(graph, visited, neighbor, stack);
        }
    }
    stack.push(node);
}

function reverseGraph (graph, N) {
    const reversedGraph = new Array(N).fill()
        .map(() => []);

    for(let i = 0; i < N; i++) {
        for(let neighbor of graph[i]) {
            reversedGraph[neighbor].push(i);
        }
    }
    return reversedGraph;
}

function dfsII(graph, visited, node) {
    visited[node] = true;

    for(let neighbor of graph[node]) {
        if(!visited[neighbor]) {
            dfsII(graph, visited, neighbor);
        }
    }
}

let graph = [
    [1],
    [2],
    [0, 3],
    [4],
    [5],
    [6],
    [4]
];
console.log(findSCC(graph));