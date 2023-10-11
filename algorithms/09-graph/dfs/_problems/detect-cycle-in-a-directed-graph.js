const hasCycle = function (G) {
    const N = G.length;
    const seen = new Array(N).fill(false);
    const recStack = new Array(N).fill(false);

    for (let i = 0; i < N; i++) {
        if (!seen[i]) {
            if (detectCycle(G, i, seen, recStack)) {
                return true;
            }
        }
    }

    return false;
}

const detectCycle = function (G, node, seen, recStack) {
    seen[node] = true;
    recStack[node] = true;

    for (let neighbor of G[node]) {
        if (!seen[neighbor]) {
            if (detectCycle(G, neighbor, seen, recStack)) return true;
        } else if (recStack[neighbor]) {
            return true;
        }
    }

    recStack[node] = false;
    return false;
}


function main() {
    let graph = [
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

if (require.main === moudle) {
    main();
}

