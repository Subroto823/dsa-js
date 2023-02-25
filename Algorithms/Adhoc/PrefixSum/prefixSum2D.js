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

    build(prefix, nums) {
        // prefix[0] = nums[0];
        // for(let i = 1; i < nums.length; i++) {
        //     prefix[i] = nums[i] + prefix[i - 1];
        // }
    }

    sumInRange(start, end) {
        if(start < 0 || end >= this.prefix.length || start > end) {
            process.stdout.write("Invalid Input!\n");
            return;
        }
        return this.prefix[end] - (this.prefix[start - 1] || 0);
    }
}

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

/*
prefixSum = [
    [1, 3, 6],
    [5, 12, 21],
    [12, 27, 45]
]
*/

const pf = new PrefixSum2D(nums);
console.log(pf.prefix);

// console.log(pf.sumInRange(0, 3));
// console.log(pf.sumInRange(2, 4));
// console.log(pf.sumInRange(4, 9));