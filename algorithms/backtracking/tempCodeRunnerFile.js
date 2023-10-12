function solveNQueens(n) {
    const column = new Array(n).fill(false);
    const diagonal1 = new Array(n * 2).fill(false);
    const diagonal2 = new Array(n * 2).fill(false);
    const board = Array.from({length: n}, () => Array(n).fill('.'));
    const result = [];

    const backtrack = function (row) {
        if (row === n) {
            const solution = board.map((r) => r.join(''));
            result.push(solution);
            return;
        }

        for (let c = 0; c < n; c++) {
            if (column[c] || diagonal1[c + row] || diagonal2[n + row - c]) continue;

            column[c] = true
            diagonal1[c + row] = true;
            diagonal2[n + row - c] = true;
            board[row][c] = 'Q';

            backtrack(row + 1);

            column[c] = false;
            diagonal1[c + row] = false;
            diagonal2[n + row - c] = false;
            board[row][c] = '.';
        }
    }

    backtrack(0);
    return result;
}

console.table(solveNQueens(4))
const n = 13;
console.time();
solveNQueens(n);
console.timeEnd();