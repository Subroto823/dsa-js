/*
Bicoloring / Bipartite Graph

A graph is said to be Bicolorable if it can be properly colored using 2 colors, condition is no two adjacent vertices can have the same color.

A graph is bicolorable if and only if it has no odd cycle. 
A bipartite graph is 2-colorable.
*/

const COLOR = {
    WHITE: -1,
    RED: 0,
    BLUE: 1
}

function bicoloring(graph, source) {
    const n = graph.length;
    const color = new Array(n).fill(COLOR.WHITE);

    let queue = [source];
    color[source] = COLOR.RED;

    while (queue.length) {
        let currentNode = queue.shift();

        for (let neighbor of graph[currentNode]) {
            if (color[neighbor] === COLOR.WHITE) {
                color[neighbor] = color[currentNode] === COLOR.RED 
                    ? COLOR.BLUE 
                    : COLOR.RED;
                queue.push(neighbor);
            }
            
            if (color[currentNode] === color[neighbor]) {
                return false;
            }
        }
    }
    return true;
}

let graph = [
    [1],
    [0, 2, 3],
    [1, 4],
    [1, 4],
    [2, 3, 5],
    [4]
], source = 1;
console.log(bicoloring(graph, source)); // true

graph = [
    [1],
    [0, 2, 5],
    [3, 4],
    [2, 4],
    [2, 3],
    [1]
], source = 1;
console.log(bicoloring(graph, 0)); // false