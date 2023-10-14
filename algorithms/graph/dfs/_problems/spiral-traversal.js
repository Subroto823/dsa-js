var spiralOrder = function (matrix) {
    const visited = new Array(matrix.length)
        .fill()
        .map(() => new Array(matrix[0].length).fill(false));

    const traversal = [];
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0];
    let i = 0;

    const dfs = function (x, y) {
        if(!isValid(matrix, x, y, visited)) return;

        traversal.push(matrix[x][y]);
        visited[x][y] = true;

        let nx = x + dx[i], ny = y + dy[i];

        dfs(nx, ny);

        i = (i + 1) % 4;
        nx = x + dx[i], ny = y + dy[i];

        dfs(nx, ny);
    }

    dfs(0, 0);
    return traversal;
};

const isValid = function (matrix, x, y, visited) {
    return (x < matrix.length && x > -1 && y < matrix[0].length && y > -1 && !visited[x][y]);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(spiralOrder(matrix));

matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
console.log(spiralOrder(matrix));