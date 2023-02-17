/*
 * @ Binary Indexed Tree
 * Also Known as Fenwick Tree
 */

class BIT {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n + 1).fill(0);
        this.build(arr, this.n);
    }

    build(arr, n) {
        for(let i = 0; i < n; i++) {
            this.update(i, arr[i]);
        }
    }

    // add value to index idx
    update(idx, newvalue) {
        // increasing idx by one to make the tree work as 0-based indexing (binary indexed tree uses -> 1-based indexing)
        idx++;

        while(idx <= this.n) {
            this.tree[idx] += newvalue;
            idx += (idx & (-idx));
        }
    }

    // get the prefix sum from 0 to idx
    prefixSum(idx) {
        idx++;
        let sum = 0;

        while(idx > 0) {
            sum += this.tree[idx];
            idx -= (idx & (-idx));
        }
        return sum;
    }

    sumInRange(i, j) {
        return this.prefixSum(j) - this.prefixSum(i - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const bit = new BIT(arr);

console.log(bit.prefixSum(2))
console.log(bit.sumInRange(0, 3));

bit.update(0, 2);
console.log(bit.prefixSum(2))
