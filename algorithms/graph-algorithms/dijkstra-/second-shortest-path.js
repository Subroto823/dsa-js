/**
 @Dijkstra (Adjacency List)

    Time Complexity: O(ElogV)
    Space Complexity: O(V)
*/

function dijkstra(graph, source) {
    const V = graph.length;
    const distance = new Array(V).fill(Infinity);

    const Queue = [ source ];
    distance[source] = 0;

    while(Queue.length) {
        let currentVertex = Queue.shift();

        for(let [neighbor, weight] of graph[currentVertex]) {
            let newDistance = (distance[currentVertex] + weight);

            if(newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance
                Queue.push(neighbor);
            }
        }
    }
    return distance;
}

// adjacent node of vertex i -> [[node, weight], ...]
let graph = [
    [[1, 2], [2, 7], [3, 10]],
    [[0, 2], [3, 2]],
    [[0, 7], [3, 1]],
    [[0, 10], [1, 2], [2, 1]]
]
console.log(dijkstra(graph, 0));