const { randomRange, swap } = require('../../../helpers/randomNumbers.js')
function buildCase(N) {
    let graph = [];

    for(let i = 0; i < N; i++) {
        let newRow = [];
        for(let j = 0; j < N; j++) {
            if(i === j) continue;
            newRow.push(j)
        }
        graph.push(newRow);
    }
    
    graph.forEach((neighbors, i) => {
        let x = neighbors.map((node) => [node, randomRange(1, 20)]);
        console.log(x);
        graph[i] = finalArray;
    })

    return graph;
}

function suffleArray(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        swap(arr, randomRange(i, n), randomRange(i, n));
    }
}

console.log(buildCase(4));