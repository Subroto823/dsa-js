const { randomRange } = require('../../../helpers/randomNumbers.js');
const { swap } = require('../../../helpers/swap.js');

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

    graph.forEach((item, i) => {
        graph[i] = item.slice(randomRange(0, N-2))
    })

    graph.forEach((neighbors, i) => {
        let finalArray = neighbors.map((node) => [node, randomRange(1, 50)]);
        suffleArray(finalArray);
        graph[i] = finalArray;
    })
    return graph;
}

function suffleArray(arr) {
    let n = arr.length;
    for(let i = 0; i < ~~(n / 2); i++) {
        swap(arr, randomRange(i, n-1), randomRange(i, n-1));
    }
}

console.log(buildCase(75));