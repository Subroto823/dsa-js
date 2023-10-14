/* 
Prim's Algorithm (basic implementation)
Time Complexity: O(V^2)
*/

var primsMST = function(graph) {
    const N = graph.length;
    const cost = new Array(N).fill(Infinity);
    const seen = new Array(N).fill(false);

    cost[0] = 0;

    for (let count = 0; count < N - 1; count++) {
        const node = minVertex(N, seen, cost);

        if (node === -1) {
            console.log("No MST :(");
            return 0;
        }

        seen[node] = true;

        for (const [neighbor, weight] of graph[node]) {
            if(seen[neighbor]) continue;
            if (weight < cost[neighbor]) {
                cost[neighbor] = weight;
            }
        }
    }

    const mstWeight = cost.reduce((sum, weight) => sum + weight, 0);
    return mstWeight;
}


var minVertex = function(N, seen, cost) {
    let minCost = Infinity;
    let vertex = -1;

    for (let v = 0; v < N; v++) {
        if (!seen[v] && cost[v] < minCost) {
            minCost = cost[v];
            vertex = v;
        }
    }

    return vertex;
}

/*
Input: 
    Weighted adjacency list

    [
        [[neighbor(index), weight], ...],
        [[neighbor, weight], ...]
        ...
    ]
*/

let graph = [
    [[1, 2], [2, 4]],
    [[0, 2], [2, 1], [3, 3]],
    [[0, 4], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primsMST(graph));

graph = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primsMST(graph));

graph = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
]
console.log(primsMST(graph));

graph = [
    [[1, 2]],
    [[0, 2]],
    [[3, 4]],
    [[2, 4]]
]
console.log(primsMST(graph));