/**
 * 
 * @prefixSum2D
 * 
 */

class PrefixSum2D {
    constructor(matrix) {
        this.prefix = new Array(matrix.length)
            .fill()
            .map(() => new Array(matrix[0].length).fill(0));

        this.build(this.prefix, nums);
    }

    /**
     @build prefixSum array for matrix(2d array)

        @determine prefix sum of 1st row
        @determine prefix sum of 1st column
        @then , populate other row and columns with following...

            prefix[i][j] = prefix[i][j] + prefix[i][j-1] + prefix[i-1][j] - prefix[i-1][j-1];
     */

    build(prefix, matrix) {
        let rows = matrix.length;
        let columns = matrix[0].length;

        prefix[0][0] = matrix[0][0];

        // prefix sum of 1st row
        for(let i = 1; i < columns; i++) {
            prefix[0][i] = nums[0][i] + prefix[0][i - 1];
        }

        // prefix sum of 1st column
        for(let i = 1; i < rows; i++) {
            prefix[i][0] = nums[i][0] + prefix[i - 1][0];
        }

        // for other rows and columns
        for(let i = 1; i < rows; i++) {
            for(let j = 1; j < columns; j++) {
                prefix[i][j] = matrix[i][j] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1];
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        const pre = this.prefix;
        let sum = pre[row2][col2] - (pre?.[row1-1]?.[col2] || 0) - (pre[row2]?.[col1-1] || 0) + (pre?.[row1-1]?.[col1-1] || 0);

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
console.log(pf.sumRegion(1, 1, 2, 2));

