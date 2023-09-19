/*
# Segment Tree

Segment Tree is a versatile and efficient data structure used for various range-query and update operations on arrays or sequences. 
It is particularly useful when we need to perform range-based queries, such as finding the sum, minimum, maximum, or other aggregate values within a specified range of elements in an array. 

When to Use Segment Trees:

    Use Segment Trees when you need to perform range-based queries (e.g., sum, minimum, maximum) on an array or sequence.
    It's especially helpful for problems that involve dynamic data or frequent updates, as it efficiently handles both queries and updates.
*/

class SegmentTree{
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n * 4).fill(0);
        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, at, start, end) {
        if(start === end) {
            this.tree[at] = arr[start];
            return;
        }

        const LC = at * 2 + 1;
        const RC = at * 2 + 2;
        const mid = start + Math.floor((end - start) / 2);

        this.build(arr, LC, start, mid);
        this.build(arr, RC, mid + 1, end);

        this.tree[at] = this.tree[LC] + this.tree[RC];
    }

    sum(at, start, end, L, R) {
        if(L > end || R < start) return 0;
        if(L <= start && R >= end) return this.tree[at];

        const LC = 2 * at + 1;
        const RC = 2 * at + 2;
        const mid = start + Math.floor((end - start) / 2);

        const x = this.sum(LC, start, mid, L, R);
        const y = this.sum(RC, mid + 1, end, L, R);

        return x + y;
    }

    // Will return sum in range [L, R]
    sumQuery(L, R) {
        if(L < 0 || R > this.n - 1 || R < L) {
            process.stdout.write("Invalid Range!\n");
            return 0;
        }

        return this.sum(0, 0, this.n - 1, L, R)
    }

    update(at, start, end, pos, newValue) {
        if(pos < start || pos > end) return;

        if(start === end) {
            this.tree[at] = newValue;
            return;
        }

        const LC = 2 * at + 1;
        const RC = 2 * at + 2;
        const mid = start + Math.floor((end - start) / 2);

        this.update(LC, start, mid, pos, newValue);
        this.update(RC, mid + 1, end, pos, newValue);

        this.tree[at] = this.tree[LC] + this.tree[RC];
    }
    
    // Will update value at index 'pos'
    updateQuery(pos, newValue) {
        this.update(0, 0, this.n - 1, pos, newValue);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const segTree = new SegmentTree(arr);

console.log(segTree.sumQuery(0, 3));
segTree.updateQuery(2, 10);
console.log(segTree.sumQuery(0, 3));


/*
Time Complexity:
    build: O(n)
    sumQuery: O(log N)
    updateQuery: O(log N)

    
In a Segment Tree, it's common to allocate an array of size 4 times the size of the input array. 
This choice is made to ensure that the tree has enough nodes to represent the segments and to provide a comfortable margin for accommodating the tree structure. 
*/