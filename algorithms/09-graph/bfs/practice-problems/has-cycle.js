/*
Detect Cycle (Directed graph)

Topological Sorting Approach
- Topological Sorting is not possible if there is a cycle in the graph.

*/

const hasCycle = function (graph) {
    const n = graph.length;
    const indegrees = new Array(n).fill(0);
    const queue = [];

    for (let u = 0; u < n; u++) {
        for (const v of graph[u]) {
            indegrees[v]++;
        }
    }

    indegrees.forEach((indegree, node) => {
        if (indegree === 0) queue.push(node);
    })

    let count = 0;

    while (queue.length) {
        let curNode = queue.shift();
        count++;

        for (let neighbor of graph[curNode]) {
            if (--indegrees[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return count !== n;
}


function main() {
    let graph = [
        [1],
        [0]
    ]
    console.log(hasCycle(graph));

    graph = [
        [2],
        [2],
        [3, 4, 5],
        [5],
        [5],
        []
    ];
    console.log(hasCycle(graph));

    graph = [
        [1],
        [2],
        [3, 4],
        [5],
        [5],
        []
    ];
    console.log(hasCycle(graph)); // false

    graph = [
        [1],
        [2],
        [3],
        [1, 4],
        []
    ]
    console.log(hasCycle(graph)); // true
}

if (require.main === module) {
    main();
}