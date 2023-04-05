/*
Topological Sorting (bfs based)

*/

function topSort(G) {
    /*
    // L - empty list will contain sorted elements
    // S - Set of all nodes with zero indegree

    while S is not empty

    remove a node u from s
    L.add(u)

    for each adjacent node v of u do
        remove edge(u, v) from the graph
        if v has no other incoming edges
        S.add(v)

    */
   // return L;
}

// Adjacency List
let graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: ['E'],
    E: []
}
console.log(topSort(graph)); // [A, B, C, D, E] or [A, C, B, D, E]