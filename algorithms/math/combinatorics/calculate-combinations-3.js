/*
Combinations - Using Pascals Triangle

Pascal's Triangle is a triangular array of binomial coefficients. Each element in the triangle represents the value of nCr, where n is the row number, and r is the position of the element within the row. 
Pascal's Triangle can be efficiently constructed using dynamic programming, and it allows us to find nCr without explicitly calculating factorials. 
*/


const nCr = function(n, r, pascalsTriangle) {
    return pascalsTriangle[n][r];
}

const generatePascalsTriangle = function (numRows) {
    const triangle = new Array(numRows)
        .fill()
        .map((_, i) => new Array(i + 1).fill(1));

    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    return triangle;
};


let n = 5;
let triangle = generatePascalsTriangle(n+1);
console.log(nCr(n, 2, triangle));
console.log(nCr(n, 3, triangle));
console.log(nCr(n, 4, triangle));
console.log(nCr(n, 5, triangle));

/*
If we need to find multiple nCr values for the same n, and n is not extremely large, Pascal's Triangle is more efficient. 
Generating the triangle takes O(n^2) time, but subsequent lookups for nCr values are constant time O(1).

If we only need to find a single nCr value or the value of n is very large, the Multiplicative Formula is more efficient. 
It avoids generating and storing Pascal's Triangle and has a faster time complexity of O(r) for calculating a single nCr value.
*/