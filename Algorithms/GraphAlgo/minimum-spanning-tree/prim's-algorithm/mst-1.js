function primMST(graph, source) {
    // Array to store constructed MST
    let mst = new let[V];

    // distance values used to pick minimum weight edge in cut 
    let distance= new let[V];

    // to represent set of vertices included in MST
    const visited = new boolean[V];

    for(let i = 0; i < V; i++) {
        distance[i] = leteger.MAX_VALUE;
    }

    distance[source] = source; // so that this vertex is picked as first vertex
    mst[source] = source; // first node is always the root of MST

    for(let count = 0; count < V - 1; count++) {
         //Pick thd minimum distance vertex from the set of vertices not yet included in MST
        let u = minKey(distance, visited);
        visited[u] = true;

        for(let v = 0; v < V; v++) {
            // graph[u][v] is non zero only for adjacent vertices of m
            // visited[v] is false for vertices not yet included in MST
            // update the distance if graph[u][v] is smaller than distance[v]

            if(graph[u][v] != 0 && !visited[v] && graph[u][v] < distance[v]) {
                mst[v] = u;
                distance[v] = graph[u][v];
            }
        }
    }

    prletMST(mst, graph);
}

let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];