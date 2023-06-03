/*
# Discovery time
# Finishing time

*/

const COLOR = {
    WHITE: 0,
    GREY: -1,
    BLACK: 1
}

function discAndFinish(G, source) {
    const N = G.length,
       color = new Array(N).fill(COLOR.WHITE);
       disc = new Array(N).fill(0),
       fin = new Array(N).fill(0),
       topOrder = [];

    let time = 0;

    function dfs(G, source) {
        time++;
        disc[source] = time;
        color[source] = COLOR.GREY;

        for(let neighbor of G[source]) {
            if(color[neighbor] === COLOR.WHITE) {
                dfs(G, neighbor);
            }
        }
        
        color[source] = COLOR.BLACK;
        time++;
        fin[source] = time;
    }
    
    dfs(G, source);
    console.log(disc)
    console.log(fin)
}

let graph = [
    [3],
    [0, 2],
    [3],
    []
];
console.log(discAndFinish(graph, 1));