/*
Minimum Spanning Tree
    Kruskal's Algorithm

*/
const { DisjointSet } = require('../../_/disjoint-set');

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

// Edges array from adjacency list
function buildEdgesArray(graph) {
    const edges = [];

    graph.forEach((neighbors, i) => {
        neighbors.forEach(neighbor => {
            let [neighborNode, weight] = neighbor;
            edges.push(new Edge(i, neighborNode, weight))
        })
    });
    return edges;
}

function kruskalsMST(graph) {
    const E = buildEdgesArray(graph);
    
    const ds = new DisjointSet(graph.length);
    E.sort((a, b) => a.weight - b.weight);
    let mstCost = 0;

    for(let edge of E) {
        const {node1: u, node2: v, weight} = edge;

        if(ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            mstCost += weight;
        }
    }
    return mstCost;
}


// Adjacency list - vertex i [[neighbor, weight], ...]
let graph = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(kruskalsMST(graph));

graph = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
]
console.log(kruskalsMST(graph));
