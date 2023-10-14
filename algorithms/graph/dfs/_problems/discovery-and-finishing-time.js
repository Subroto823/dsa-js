/*
Discovery and Finishing time

In DFS (Depth-First Search), "discovery time" is when a node is first encountered during the traversal, and "finishing time" is when the traversal process for that node is complete. 
*/

const COLOR = {
    WHITE: 0,
    GRAY: -1,
    BLACK: 1
}

const discAndFinish = function (Graph) {
    const N = Graph.length;
    const colors = new Array(N).fill(COLOR.WHITE);
    const discovery = new Array(N).fill(0);
    const finish = new Array(N).fill(0);
    let time = 0;

    const dfs = function (u) {
        discovery[u] = ++time;
        colors[u] = COLOR.GRAY;

        for (let neighbor of Graph[u]) {
            if (colors[neighbor] === COLOR.WHITE) {
                dfs(neighbor);
            }
        }

        colors[u] = COLOR.BLACK;
        finish[u] = ++time;
    }

    for (let u = 0; u < N; u++) {
        if (colors[u] === COLOR.WHITE) {
            dfs(u);
        }
    }
    
    return {
        'discovery time': discovery,
        'finishing time': finish
    }
}


function main() {
    let graph = [
        [3],
        [0, 2],
        [3],
        []
    ];
    console.log(discAndFinish(graph));
}


if (require.main === module) {
    main();
}