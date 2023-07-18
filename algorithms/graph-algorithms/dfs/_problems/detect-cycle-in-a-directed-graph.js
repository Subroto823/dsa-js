const hasCycle = (G) => {
    const N = G.length,
        visited = new Array(N).fill(false),
        dfsVisited = new Array(N).fill(false);

    for(let i = 0; i < N; i++) {
        if(!visited[i]) {
            if(detectCycle(G, i, visited, dfsVisited)) {
                return true;
            }
        }
    }
    return false;
}

function detectCycle(G, node, visited, inStack) {
    visited[node] = true;
    inStack[node] = true;

    for(let neighbor of G[node]) {
        if(!visited[neighbor]) {
            if(detectCycle(G, neighbor, visited, inStack)) return true;
        } else if (inStack[neighbor]) {
            return true;
        }
    }
    inStack[node] = false;
    return false;
}

let graph = [
    [1],
    [2],
    [3, 4],
    [5],
    [5],
    []
];
console.log(hasCycle(graph)); // false

graph = [
    [1],
    [2],
    [3],
    [1, 4],
    []
]
console.log(hasCycle(graph)); // true
