/**
# Strongly Connected Component
    # A strongly connected component is the portion of a directed graph in which there is a path from each vertex to another vertex. 
    # It is applicable only on a directed graph

    (Implementation of Kosaraju’s algorithm)
*/

const COLOR = {
    WHITE: 0,
    GRAY: -1,
    BLACK: 1
}

function findSCC(graph)  {
    const N = graph.length,
        stack = [];
    let colors = new Array(N).fill(COLOR.WHITE);

    for(let i = 0; i < N; i++) {
        if(colors[i] === COLOR.WHITE) {
            dfs(graph, colors, i, stack);
        }
    }

    const reversedGraph = reverseEdges(graph, N);
    let scc = [];

    while(stack.length) {
        let currentNode = stack.pop();

        if(colors[currentNode] === COLOR.GRAY) {
            let components = [];
            dfsII(reversedGraph, colors, currentNode, components);
            scc.push(components);
        }
    }
    return scc;
}

function dfs(graph, colors, node, stack) {
    colors[node] = COLOR.GRAY;

    for(let neighbor of graph[node]) {
        if(colors[neighbor] === COLOR.WHITE) {
            dfs(graph, colors, neighbor, stack);
        }
    }
    stack.push(node);
}

function reverseEdges (graph, N) {
    const reversedEdges = new Array(N).fill()
        .map(() => []);

    for(let i = 0; i < N; i++) {
        for(let neighbor of graph[i]) {
            reversedEdges[neighbor].push(i);
        }
    }
    return reversedEdges;
}

function dfsII(graph, colors, node, components) {
    colors[node] = COLOR.BLACK;
    components.push(node);

    for(let neighbor of graph[node]) {
        if(colors[neighbor] === COLOR.GRAY) {
            dfsII(graph, colors, neighbor, components);
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