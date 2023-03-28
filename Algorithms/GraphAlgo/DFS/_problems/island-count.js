/*
Problem Statement

Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

*/

const islandCount = (grid) => {
    let count = 0;

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(dfs(grid, r, c)) {
                count++;
            }
        }
    }
    return count;
}

function dfs(grid, row, col) {
    if(!isValid(grid, row, col)) return false;

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    grid[row][col] = 'W';

    for(let direction of directions) {
        dfs(grid, row + direction[0], col + direction[1]);
    }
    return true;
}

function isValid(grid, row, col) {
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;

    return rowInbounds && colInbounds && grid[row][col] === 'L';
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid));