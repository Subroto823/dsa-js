const { DisjointSet } = require('../../_/disjoint-set');

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

function buildEdgesArray(matrix, N) {
    const edges = [];

    matrix.forEach((neighbors, i) => {
        neighbors.forEach((weight, j) => {
            if(weight !== 0) {
                edges.push(new Edge(i, j, weight));
            }
        })
    });
    return edges;
}

function kruskalsMST(matrix) {
    const N = matrix.length,
        E = buildEdgesArray(matrix, N);

    E.sort((a, b) => a.weight - b.weight);
    const ds = new DisjointSet(N);
    let minCost = 0;

    for(let edge of E) {
        let { node1: u, node2: v, weight } = edge;

        if(ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            minCost += weight;
        }
    }
    return minCost;
}

let graph = [
    [0, 4, 2, 0],
    [4, 0, 1, 3],
    [2, 1, 0, 2],
    [0, 3, 2, 0]
];

console.log(kruskalsMST(graph));