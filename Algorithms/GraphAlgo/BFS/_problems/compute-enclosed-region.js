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

}

var board = [
    ['B','B','B','B'],
    ['W','B','W','B'],
    ['B','W','W','B'],
    ['B','B','B','B']
];
fillSurroundedRegions(board);

/*
Time Complexity: O(mn) */