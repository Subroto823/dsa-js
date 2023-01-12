/*
*
* Time Complexity: O(N * M)
* Auxiliary Space: O(N * M)
*
*/

const ROW = 4;
const COL = 4;

// direction vectors
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// Function to check if a cell
// is be visited or not
function isValid(visited, row, col) {
    // If cell lies out of bounds
    if (row < 0 || col < 0 || row >= ROW || col >= COL) return false;

    // If cell is already visited
    if (visited[row][col]) return false;

    // Otherwise
    return true;
}

function BFS(grid, visited, row, col) {
    // store indices of the matrix cells
    let queue = [];

    // Mark the starting cell as visited and put it into the queue
    queue.push([row, col]);
    visited[row][col] = true;

    while (queue.length != 0) {
        let cell = queue[0];
        let x = cell[0];
        let y = cell[1];

        process.stdout.write(grid[x][y] + " ");

        queue.shift();

        // go to the adjacent cells
        for (let i = 0; i < 4; i++) {
            let adjx = x + dx[i];
            let adjy = y + dy[i];

            if (isValid(visited, adjx, adjy)) {
                queue.push([adjx, adjy]);
                visited[adjx][adjy] = true;
            }
        }
    }
}

// input matrix
const grid = [[1, 2, 3, 4 ],
              [5, 6, 7, 8 ],
              [9, 10, 11, 12 ],
              [13, 14, 15, 16 ] ];

// declare the visited array
let visited = Array.from(Array(ROW), () => Array(COL).fill(false));

BFS(grid, visited, 0, 0);