/**
 * Dijkstra (Adjacency List)
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 * 
*/

var dijkstra = function (graph, source) {
    const V = graph.length;
    const distance = new Array(V).fill(Infinity);

    const queue = [ source ];
    distance[source] = 0;

    while(queue.length) {
        let currentVertex = queue.shift();

        for(let [neighbor, weight] of graph[currentVertex]) {
            let newDistance = (distance[currentVertex] + weight);

            if(newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance
                queue.push(neighbor);
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
console.log(dijkstra(graph, 2));