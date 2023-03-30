function solveNQueens(n) {
    let queen = new Array(n).fill(0);
    let column = new Array(20).fill(0);
    let diagonal1 = new Array(40).fill(0);
    let diagonal2 = new Array(40).fill(0);

    const board = [];

    function solve(at) {
        if (at === n + 1) {
            let solution = []
            console.log(queen)
            for (let i = 1; i <= n; i++) {
                let newRow = '.'.repeat(queen[i] - 1) + 'Q' + '.'.repeat(n - queen[i]);
                solution.push(newRow);
            }
            board.push(solution);
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (column[i] || diagonal1[i + at] || diagonal2[n + i - at]) continue;

            queen[at] = i;

            column[i] = 1
            diagonal1[i + at] = 1;
            diagonal2[n + i - at] = 1;

            solve(at + 1);

            column[i] = 0
            diagonal1[i + at] = 0
            diagonal2[n + i - at] = 0
        }
    }

    solve(1);
    return board;
}

console.log(solveNQueens(4));