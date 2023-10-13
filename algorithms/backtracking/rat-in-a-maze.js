/**
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). 
Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'D'(down) and 'R' (right). 
*/

const findPath = function (maze) {
    const n = maze.length;
    const possiblePaths = [];
    let path = "";

    const backtrack = function (row, col) {
        if (row === n - 1 && col === n - 1) {
            possiblePaths.push(path);
            return;
        }

        if (isFeasible(row, col, maze, n)) {
            path += 'D';
            backtrack(row + 1, col);
            path = path.slice(0, path.length - 1);

            path += "R";
            backtrack(row, col + 1);
            path = path.slice(0, path.length - 1);
        }
    }

    backtrack(0, 0);
    return possiblePaths;
}

const isFeasible = function (row, col, maze, n) {
    return (row > -1 && row < n && col > -1 && col < n && maze[row][col] === 1);
}


let maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1]
];

console.log(findPath(maze));
