var solveNQueens = function(n) {
    let results = [];

    const isValid = (colPlacement) => {
        let rows = colPlacement.length - 1;
        for(let i = 0; i < rows; i++) {
            let diff = Math.abs(colPlacement[i] - colPlacement[rows]);

            if(diff === 0 || diff === rows - i) {
                return false;
            }
        }
        return true;
    }

    const solve = (row, colPlacement = []) => {
        if(row === n) {
            results.push([...colPlacement]);
            return;
        }

        for(let col = 0; col < n; col++) {
            colPlacement.push(col);

            if(isValid(colPlacement)) {
                solve(row + 1, colPlacement);
            }
            colPlacement.pop();
        }
    }

    solve(0)

    results = results.map((result) => {
        return result.map(queenIndex => {
            let newRow = '';
            for(let i = 0; i < n; i++) {
                newRow += (i === queenIndex) ? 'Q' : '.';
            }
            return newRow;
        });
    });
    return results;
}

console.time();
console.log(solveNQueens(9));
console.timeEnd();