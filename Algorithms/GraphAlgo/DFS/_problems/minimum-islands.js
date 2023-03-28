/*
Problem Statement

Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

*/

const minimumIsland = (grid) => {
    let minSize = Infinity;

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            let size = dfs(grid, r, c);

            if(size > 0) {
                minSize = Math.min(minSize, size);
            }
        }
    }
    return minSize;
}

function dfs (grid, row, col) {
    if(!isValid(grid, row, col)) return 0;

    grid[row][col] = 'W';

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let size = 1;

    for(let direction of directions) {
        size += dfs(grid, row + direction[0], col + direction[1]);
    }
    return size;
}

function isValid(grid, row, col) {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;

    return rowInbound && colInbound && grid[row][col] === 'L';
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));