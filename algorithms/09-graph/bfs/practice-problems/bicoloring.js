/*
Bicoloring (Bipartite Graph)

A graph is said to be Bicolorable if it can be properly colored using 2 colors, condition is no two adjacent vertices can have the same color.

    - A graph is bicolorable if and only if it has no odd cycle. 
    - A bipartite graph is 2-colorable.
*/

const COLOR = {
    WHITE: -1,
    RED: 0,
    BLUE: 1
}

const bicoloring = function(graph) {
    const bfs = function(u) {
        const queue = [u];
        colors[u] = COLOR.RED;

        while (queue.length) {
            const curNode = queue.shift();

            for (const neighbor of graph[curNode]) {
                if (colors[neighbor] === COLOR.WHITE) {
                    colors[neighbor] = colors[curNode] === COLOR.RED ? COLOR.BLUE : COLOR.RED;
                    queue.push(neighbor);
                }
                
                if (colors[curNode] === colors[neighbor]) {
                    return false;
                }
            }
        }

        return true;
    }

    const n = graph.length;
    const colors = new Array(n).fill(COLOR.WHITE);

    for (let u = 0; u < n; u++) {
        if (colors[u] === COLOR.WHITE && !bfs(u)) {
            return false;
        }
    }

    return true;
}

function main() {
    let graph = [
        [1],
        [0, 2, 3],
        [1, 4],
        [1, 4],
        [2, 3, 5],
        [4]
    ]
    console.log(bicoloring(graph)); // true
    
    graph = [
        [1],
        [0, 2, 5],
        [3, 4],
        [2, 4],
        [2, 3],
        [1]
    ]
    console.log(bicoloring(graph)); // false
}

if (require.main === module) {
    main();
}