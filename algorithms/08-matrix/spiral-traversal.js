function isValid(x, y, row, col, visited) {
    return (x < row && x >= 0 && y < col && y >= 0 && !visited[x][y]);
}

var spiralOrder = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    const visited = new Array(row)
        .fill()
        .map(() => new Array(col).fill(false));

    const traversal = [];
    let x = 0, y = 0, di = 0;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    for(let i = 0; i < row * col; i++) {
        visited[x][y] = true;
        traversal.push(matrix[x][y]);

        let next_x = x + dx[di];
        let next_y = y + dy[di];

        if(isValid(next_x, next_y, row, col, visited)) {
            x = next_x;
            y = next_y;
        } else {
            di = (di + 1) % 4;
            x = x + dx[di];
            y = y + dy[di];
        }
    }
    return traversal;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(spiralOrder(matrix));