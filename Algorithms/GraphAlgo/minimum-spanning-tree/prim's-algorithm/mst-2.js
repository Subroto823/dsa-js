/*
Minimum Spanning Tree
    Prim's Algorithm (with normal queue and sorting)

*/
function primMST(graph, source) {
    const N = graph.length;
    const cost = new Array(N).fill(Infinity);
    const visited = new Array(N).fill(false);
    const queue = [];

    cost[source] = 0;
    queue.push([source, 0]);
    let ans = 0;

    while(queue.length) {
        let current = queue.shift();
        let [currentNode, currentNodeCost] = current;

        if(visited[currentNode]) continue;
        
        visited[currentNode] = true;
        ans += currentNodeCost;

        for(let [neighbor, weight] of graph[currentNode]) {
            if(visited[neighbor]) continue;

            if(weight < cost[neighbor]) {
                queue.push([neighbor, weight]);
                cost[neighbor] = weight;
            }
        }
        queue.sort((a, b) => a[1] - b[1]);
    }
    console.log(cost);
    return ans;
}

let graph = [
    [[1, 2], [2, 4]],
    [[0, 2], [2, 1], [3, 3]],
    [[0, 4], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primMST(graph, 0));

graph = [
    [[1, 4], [2, 2]],
    [[0, 4], [2, 1], [3, 3]],
    [[0, 2], [1, 1], [3, 2]],
    [[1, 3], [2, 2]]
];
console.log(primMST(graph, 0));

graph = [
    [[1, 2], [2, 3]],
    [[3, 4], [0, 2]],
    [[0, 3], [3, 1], [4, 3]],
    [[1, 4], [2, 1], [4, 2]],
    [[3, 2], [2, 3]]
]
console.log(primMST(graph, 0));