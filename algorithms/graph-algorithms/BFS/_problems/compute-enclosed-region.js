/**
 @Compute Enclosed Regions

    Problem Statement:

    Let A be a 2D array whose entries are either W or B. Write a program that takes A, and replaces all Ws that cannot reach the boundary with a B
 */

function fillSurroundedRegions(board) {
    if(!board.length) return;

    const rows = board.length, cols = board[0].length;
    let visited = new Array(rows)
        .fill()
        .map(() => new Array(cols).fill(false));

    for(let i = 0; i < rows; i++) {
        if(board[i][0] === "W" && !visited[i][0]) {
            markBoundaryRegion(board, visited,i, 0);
        }
        if(board[i][rows-1] === "W" && !visited[i][rows-1]) {
            markBoundaryRegion(board, visited,i, rows-1);
        }
    }

    for(let i = 0; i < cols-1; i++) {
        if(board[0][i] === "W" && !visited[0][i]) {
            markBoundaryRegion(board, visited, 0, i);
        }
        if(board[rows-1][i] === "W" && !visited[rows-1][i]) {
            markBoundaryRegion(board, visited, rows-1, i);
        }
    }

    for(let i = 1; i < rows - 1; i++) {
        for(let j = 1; j < rows-1; j++) {
            if(board[i][j] === 'W' && !visited[i][j]) {
                board[i][j] = 'B';
            }
        }
    }
    return board;
}

function markBoundaryRegion(board, visited, x, y) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = true;
    let currentPosition, neighbor;

    while(queue.length) {
        currentPosition = queue.shift();

        for(let direction of directions) {
            neighbor = [x + direction[0], y + direction[1]];
            if(isFeasible(board, visited, neighbor)) {
                visited[neighbor[0]][neighbor[1]] = true;
                queue.push(neighbor);
            }
        }
    }
}

function isFeasible(board, visited, neighbor) {
    let x = neighbor[0];
    let y = neighbor[1];

    return x >= 0 && x < board.length && y >= 0 && y < board[x].length && !visited[x][y] && board[x][y] === 'W';
}

var board = [
    ['B','B','B','B'],
    ['W','B','W','B'],
    ['B','W','W','B'],
    ['B','B','B','B']
];

fillSurroundedRegions(board);
console.table(board);

board = [
    ['B','B','W','B'],
    ['W','B','W','W'],
    ['B','W','B','B'],
    ['B','B','W','B']
];

fillSurroundedRegions(board);
console.table(board);
/*
Time Complexity: O(mn) */