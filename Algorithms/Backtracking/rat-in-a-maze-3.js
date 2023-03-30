/**
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). 
Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'D'(down) and 'R' (right). **/

function solveMaze(maze) {
    let n = maze.length;
    let solution = new Array(n)
        .fill()
        .map(() => new Array(n).fill(0));

    if(!findPath(maze, 0, 0, n, solution)) {
        console.log("path not found!");
        return;
    }
    return solution;
}

function findPath(maze, x, y, n, solution) {
    if ((x === n - 1 && y === n - 1) && maze[x][y] === 1) {
        solution[x][y] = 1;
        return true;
    }

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    if (isFeasible(maze, x, y, n)) {
        if(solution[x][y] === 1) {
            return false;
        }
        solution[x][y] = 1;

        for(let [dx, dy] of directions) {
            if(findPath(maze, x + dx, y + dy, n, solution)) {
                return true;
            }
        }
        solution[x][y] = 0;
    }
    return false;
}


function isFeasible(maze, row, col, n) {
    return (row > -1 && row < n && col > -1 && col < n && maze[row][col] === 1);
}

let maze = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
]
console.table(solveMaze(maze));
