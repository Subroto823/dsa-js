/**
@Todo (Not completed Yet)
# Topological Sort / Order

*/

function topSort(G, source) {
    const N = G.length,
       visited = new Array(N).fill(false),
       reversedTopOrder = [];

    function dfs(G, source) {
        visited[source] = true;

        for(let neighbor of G[source]) {
            if(visited[neighbor] === false) {
                dfs(G, neighbor);
            }
        }
        reversedTopOrder.push(source);
    }
    
    dfs(G, source);
    return reversedTopOrder.reverse();
}

let graph = [
    [3],
    [0, 2],
    [3],
    []
];
console.log(topSort(graph, 1));