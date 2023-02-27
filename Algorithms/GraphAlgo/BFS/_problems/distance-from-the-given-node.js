/**
 * 
 * How far away every node is from the given root node?
 * 
 */

function bfs(graph, root) {
    const distance = {};

    for(let i = 0; i < graph.length; i++) {
        distance[i] = Infinity;
    }
    distance[root] = 0;

    let queue = [root];
    let curr;

    while(queue.length != 0) {
        curr = queue.shift();

        let currConnected = graph[curr];
        let neighborIdx = [];
        var idx = currConnected.indexOf(1);

        while(idx !== -1) {
            neighborIdx.push(idx);
            idx = currConnected.indexOf(1, idx + 1);
        }

        for(let i = 0; i < neighborIdx.length; i++) {
            if(distance[neighborIdx[i]] === Infinity) {
                distance[neighborIdx[i]] = distance[curr] + 1;
                queue.push(neighborIdx[i]);
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