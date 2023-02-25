/**
 * 
 * @prefixSum2D
 * 
 */

class PrefixSum2D {
    constructor(matrix) {
        // taking extra one row and column for prefix sum matrix
        this.prefix = new Array(matrix.length + 1)
            .fill()
            .map(() => new Array(matrix[0].length + 1).fill(0));

        this.build(this.prefix, nums);
    }

    /**
     @build prefixSum array for matrix(2d array)

        @determine prefix sum of 1st row
        @determine prefix sum of 1st column
        @then , populate other row and columns with following...

            prefix[i][j] = prefix[i][j] + prefix[i][j-1] + prefix[i-1][j] - prefix[i-1][j-1];


     @instead of determining the prefix sum of 1st row and column separately, we can also build the prefix sum matrix this way, by taking extra one row and column for prefix sum matrix. Also in JavaScript, instead of taking extra row and column, we can use optional chaining.
    */

    build(prefix, matrix) {
        let rowLen = matrix.length;
        let columnLen = matrix[0].length;

        // for other rows and columns
        for(let i = 0; i < rowLen; i++) {
            for(let j = 0; j < columnLen; j++) {
                let row = i + 1;
                let col = j + 1;

                prefix[row][col] = matrix[i][j] + prefix[row-1][col] + prefix[row][col-1] - prefix[row-1][col-1];
            }
        }

    }

    sumRegion(row1, col1, row2, col2) {
        const pre = this.prefix;
        let sum = pre[row2 + 1][col2 + 1] - pre[row1][col2+1] - pre[row2+1][col1] + pre[row1][col1];

        return !Number.isNaN(sum) ? sum : -1;
    }
}

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const pf = new PrefixSum2D(nums);

console.table(pf.prefix);
console.log(pf.sumRegion(0, 0, 1, 1));
