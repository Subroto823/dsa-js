/*
Minimum Spanning Tree (Kruskal's Algorithm)

Time Complexity: O(Elog(E))

*/
const { DisjointSet } = require('../../../__helpers/disjoint-set');

class Edge {
    constructor(u, v, weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

const getEdges = function(graph) {
    const edges = [];

    graph.forEach((neighbors, u) => {
        neighbors.forEach(([v, weight]) => {
            edges.push(new Edge(u, v, weight));
        })
    });

    return edges;
}

var kruskalsMST = function(graph) {
    const ds = new DisjointSet(graph.length);
    const E = getEdges(graph);

    E.sort((a, b) => a.weight - b.weight);

    let mstCost = 0;
    let count = 0;

    for(let edge of E) {
        const {u, v, weight} = edge;

        if(ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            mstCost += weight;
        }
    }

    return mstCost;
}

const graph1 = [
    [[1, 2], [2, 4]],
    [[0, 2], [2, 1], [3, 3]],
    [[0, 4], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];

const graph2 = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];

const graph3 = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
];

const graph4 = [
    [[1, 4], [2, 13], [3, 7], [4, 7]],
    [[0, 4], [2, 9], [3, 3], [4, 7]],
    [[0, 13], [1, 9], [3, 10], [4, 14]],
    [[0, 7], [1, 3], [2, 10], [4, 4]],
    [[0, 7], [1, 7], [2, 14], [3, 4]]
];


console.log(kruskalsMST(graph1));
console.log(kruskalsMST(graph2));
console.log(kruskalsMST(graph3));
console.log(kruskalsMST(graph4));