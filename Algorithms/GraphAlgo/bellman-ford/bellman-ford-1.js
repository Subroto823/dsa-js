/*
Belman Ford (Single source shortest path)

    Time Complexity:  O(V * E) 

    Note:
    Negative Cycle: A negative cycle is a cycle whose edges are such that the sum of their weights is a negative value.
*/

function bellmanFord(G, source, N) {
    const distance = new Array(N).fill(Infinity);
    distance[source] = 0;

    for(let i = 0; i < N; i++) {
        for(let [currentNode, neighbor, weight] of G) {
            let newDistance = distance[currentNode] + weight;

            if(newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
            }
        }
    }

    // For negative cycle
    for(let [currentNode, neighbor, weight] of G) {
        if(distance[currentNode] + weight < distance[neighbor]) {
            return "Negative Cycle Detected!";
        }
    }
    return distance;
}

// Edges -> [[u, v, weight], ...], N = Total number of nodes(vertex)
let graph = [
    [0, 2, 2], [0, 3, 4],
    [1, 2, 10],
    [2, 3, 1],
    [3, 4, 7], [3, 5, 5]
], N = 6;
console.log(bellmanFord(graph, 0, N));


graph = [
    [0, 2, 10], [0, 3, 5],
    [1, 0, -15],
    [3, 2, 2], [3, 1, 8]
], N = 4;
console.log(bellmanFord(graph, 0, N));