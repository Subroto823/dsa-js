/**
*
* @Time Complexity: O(N * M)
* @Auxiliary Space: O(N * M)
*
*/

// Function to check if a cell is be visited/valid or not
function isValid(visited, row, col, ROW, COL) {
    // If cell lies out of bounds or already visited
    return (row >= 0 && col >= 0 && row < ROW && col < COL && !visited[row][col]);
}

function bfs(matrix, row, col) {
    const ROW = matrix.length;
    const COL = matrix[0].length;

    // declare the visited array
    let visited = Array.from(Array(ROW), () => Array(COL).fill(false));

    // direction vectors
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    let queue = [];

    // Mark the starting cell as visited and put it into the queue
    queue.push([row, col]);
    visited[row][col] = true;

    while (queue.length != 0) {
        let cell = queue[0];
        let x = cell[0];
        let y = cell[1];

        process.stdout.write(matrix[x][y] + " ");
        queue.shift();

        // go to the adjacent cells
        for (let i = 0; i < 4; i++) {
            let adjx = x + dx[i];
            let adjy = y + dy[i];

            if (isValid(visited, adjx, adjy, ROW, COL)) {
                queue.push([adjx, adjy]);
                visited[adjx][adjy] = true;
            }
        }
    }
}

// input matrix
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

bfs(matrix, 0, 0);