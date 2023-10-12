var solveNQueens = function (n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const column = new Array(n).fill(false);
    const diagonal1 = new Array(n * 2).fill(false);
    const diagonal2 = new Array(n * 2).fill(false);
    const result = [];

    const backtrack = function (r) {
        if (r === n) {
            let ans = board.map((row) => row.join(''));
            result.push(ans);
            return;
        }

        for (let c = 0; c < n; c++) {
            if (column[c] || diagonal1[r + c] || diagonal2[r - c]) continue;

            column[c] = true
            diagonal1[r + c] = true;
            diagonal2[r - c] = true;
            board[r][c] = 'Q'

            backtrack(r + 1);

            column[c] = false
            diagonal1[r + c] = false;
            diagonal2[r - c] = false;
            board[r][c] = '.'
        }
    }

    backtrack(0);
    return result;
}


const n = 4;
console.log(solveNQueens(n));