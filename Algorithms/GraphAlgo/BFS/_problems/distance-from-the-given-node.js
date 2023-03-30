/**
 How far away every node is from the given source node? 
*/

function bfs(graph, source) {
    const distance = {};

    for(let i = 0; i < graph.length; i++) {
        distance[i] = Infinity;
    }
    distance[source] = 0;

    const queue = [source];

    while(queue.length != 0) {
        let currentVertex = queue.shift();
        let neighborIndices = [];

        graph[currentVertex].forEach((element, i) => {
            if(element === 1) {
                neighborIndices.push(i);
            }
        });

        for(let neighbor of neighborIndices) {
            if(distance[neighbor] === Infinity) {
                distance[neighbor] = distance[currentVertex] + 1;
                queue.push(neighbor);
            }
        }
    }
    return distance;
}

var graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
]

console.log(bfs(graph, 1));