/*
Pascal's Triangle is a triangular array of binomial coefficients. Each element in the triangle represents the value of nCr, where n is the row number, and r is the position of the element within the row. Pascal's Triangle can be efficiently constructed using dynamic programming, and it allows us to find nCr without explicitly calculating factorials. */

function generatePascalsTriangle(rows) {
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }

        triangle.push(row);
    }

    return triangle;
}

function nCrUsingPascalsTriangle(n, r) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }

    const pascalsTriangle = generatePascalsTriangle(n + 1);
    return pascalsTriangle[n][r];
}

const n = 5;
const r = 2;
const result = nCrUsingPascalsTriangle(n, r); // 5C2 = 10
console.log(result);

/*

The generatePascalsTriangle function constructs Pascal's Triangle up to the specified number of rows. It uses dynamic programming to fill the triangle row by row.
Each row of the triangle is represented as an array, and the triangle itself is represented as an array of rows.
For each row, the function calculates the binomial coefficients (the elements of the row) based on the values from the previous row.

The nCrUsingPascalsTriangle function calls generatePascalsTriangle to create Pascal's Triangle up to the row n, and then it directly accesses the value of nCr from the triangle.

This implementation is more efficient than calculating factorials explicitly, especially for larger values of n and r, as it avoids repeated calculations and improves the time complexity to O(n^2) for generating Pascal's Triangle and O(1) for finding nCr. 

### The efficiency of the two implementations, Pascal's Triangle and the Multiplicative Formula, depends on the values of n and r.

    # Pascal's Triangle:
        # Pros:
            * Once Pascal's Triangle is constructed, you can efficiently find any nCr value in constant time O(1). This is particularly useful when you need to find multiple nCr values for the same n.
            * The time complexity to generate Pascal's Triangle up to n rows is O(n^2), which is reasonable for small to moderate values of n.
        # Cons:
            * The space complexity to store Pascal's Triangle up to n rows is also O(n^2), which can be memory-intensive for very large n.
            * If we only need to find a single nCr value and do not require the entire Pascal's Triangle, the space overhead may not be justified.

    # Multiplicative Formula:
        # Pros:
            * The time complexity to calculate a single nCr value using the Multiplicative Formula is O(r), which is very efficient, especially for larger values of n and r.
            * The space complexity is constant O(1), as it only involves a few variables for the calculation, regardless of the values of n and r.
        # Cons:
            * The main drawback of the Multiplicative Formula is that it does not provide any advantage if you need to find multiple nCr values for the same n. Each nCr calculation would require iterating through r values, resulting in redundant calculations.

In summary:

    * If we need to find multiple nCr values for the same n, and n is not extremely large, Pascal's Triangle is more efficient. Generating the triangle takes O(n^2) time, but subsequent lookups for nCr values are constant time O(1).
    * If we only need to find a single nCr value or the value of n is very large, the Multiplicative Formula is more efficient. It avoids generating and storing Pascal's Triangle and has a faster time complexity of O(r) for calculating a single nCr value.

In competitive programming and real-world scenarios, both methods are useful, and the choice between them depends on the specific requirements and constraints of the problem you are solving. If memory usage is not a concern, Pascal's Triangle can be an excellent precomputation strategy for multiple nCr queries. However, if memory is limited, or if we need to calculate only a few nCr values, the Multiplicative Formula is a better choice due to its lower time complexity.*/