let queen = new Array(20).fill(0);
let column = new Array(20).fill(0);
let diagonal1 = new Array(40).fill(0);
let diagonal2 = new Array(40).fill(0);

const board = [];

function solveNQueens(at, n) {
    if(at === n + 1) {
        console.log(`row column `);
        let res;
        for(let i = 1; i <= n; i++) {
            console.log(""+ i, "" + queen[i]);
            res = '.'.repeat(queen[i] - 1) + 'Q' + '.'.repeat(n - queen[i]);
            board.push(res);
        }
        console.log();
        return;
    }

    for(let i = 1; i <= n; i++) {
        if(column[i] || diagonal1[i + at] || diagonal2[n + i - at]) continue;

        queen[at] = i;

        column[i] = 1
        diagonal1[i + at] = 1;
        diagonal2[n + i - at] = 1;

        solveNQueens(at + 1, n);

        column[i] = 0
        diagonal1[i + at] = 0
        diagonal2[n + i - at] = 0
    }
}

solveNQueens(1, 4);
console.log(board);