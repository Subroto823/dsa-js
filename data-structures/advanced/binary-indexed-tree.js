/**
BIT - Binary Indexed Tree
Also Known as Fenwick Tree
 
A Binary Indexed Tree (BIT), also known as a Fenwick Tree, is a data structure that provides efficient methods for querying and updating prefix sums of an array. 
It is particularly useful when we need to perform dynamic range queries and updates on an array of values.
*/

// Using 1-based indexing

class BIT {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n + 1).fill(0);
        this.build(arr, this.n);
    }

    build(arr, n) {
        for(let i = 0; i < n; i++) {
            this.updateQuery(i, arr[i]);
        }
    }

    // Least Significant Bit
    LSB(i) {
        return (i & -i)
    }

    updateQuery(idx, newvalue) {
        ++idx;
        while(idx <= this.n) {
            this.tree[idx] += newvalue;
            idx += this.LSB(idx);
        }
    }

    // Get the prefix sum from 0 to idx
    prefixSum(idx) {
        let sum = 0;
        ++idx;

        while(idx > 0) {
            sum += this.tree[idx];
            idx -= this.LSB(idx);
        }

        return sum;
    }

    rangeSumQuery(L, R) {
        return this.prefixSum(R) - this.prefixSum(L - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const bit = new BIT(arr);

console.log(bit.prefixSum(2))
console.log(bit.rangeSumQuery(1, 3));

bit.updateQuery(1, 2);
console.log(bit.prefixSum(2))
console.log(bit.rangeSumQuery(1, 3));


/*
Time Complexity:
    build: O(nlogn)
    sumQuery: O(logn)
    updateQuery: O(logn)
*/