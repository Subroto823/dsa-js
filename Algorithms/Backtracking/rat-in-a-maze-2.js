/**
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). 
Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'D'(down) and 'R' (right). **/

function findPath(maze) {
    let n = maze.length;
    let visited = new Array(n)
        .fill()
        .map(() => new Array(n).fill(false));

    let possiblePaths = [];
    let path = "";

    function helper(row, col) {
        if (row === n - 1 && col === n - 1) {
            possiblePaths.push(path);
            return;
        }
        visited[row][col] = true;
    
        if (isFeasible(row + 1, col, maze, n, visited)) {
            path += 'D';
            helper(row + 1, col);
            path = path.slice(0, path.length - 1);
        }

        if(isFeasible(row, col + 1, maze, n, visited)) {
            path += "R";
            helper(row, col + 1);
            path = path.slice(0, path.length - 1);
        }

        if(isFeasible(row, col - 1, maze, n, visited)) {
            path += "L";
            helper(row, col - 1);
            path = path.slice(0, path.length - 1);
        }

        if(isFeasible(row - 1, col, maze, n, visited)) {
            path += "U";
            helper(row - 1, col);
            path = path.slice(0, path.length - 1);
        }
        visited[row][col] = false;
    }

    helper(0, 0);
    return possiblePaths;
}

function isFeasible(row, col, maze, n, visited) {
    return (row > -1 && row < n && col > -1 && col < n && maze[row][col] === 1 && !visited[row][col]);
}

let maze = [
    [1, 1, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1]
]
console.log(findPath(maze));

maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1]
]
console.log(findPath(maze));

maze = [
    [1, 1, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1]
]
console.log(findPath(maze));
