/**
Segment Tree - With Lazy Propagation

Lazy Propagation is an optimization technique used in Segment Trees to handle range updates (updates to a range of elements) efficiently. 
Without Lazy Propagation, standard Segment Trees would require updating the entire path from root to leaves, even when only part of the path is affected. It defers actual updates until needed, marking nodes as "lazy" and applying updates during query operations. 
This minimizes unnecessary updates, reduces the time complexity for both updates and queries, and ensures only essential nodes are updated as required.
 */

class SegmentTree{
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n * 4).fill()
            .map(() => ({sum: 0, prop: 0}));

        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, at, start, end) {
        if(start === end) {
            this.tree[at].sum = arr[start];
            return;
        }

        let LC = (at << 1) + 1;
        let RC = (at << 1) + 2;
        let mid = start + ((end - start) >> 1);

        this.build(arr, LC, start, mid);
        this.build(arr, RC, mid + 1, end);

        this.tree[at].sum = this.tree[LC].sum + this.tree[RC].sum;
    }

    sum(at, start, end, L, R, carry = 0) {
        if(L > end || R < start) return 0;
        if(L <= start && R >= end) return this.tree[at].sum + carry * (end - start + 1);

        const LC = (at << 1) + 1;
        const RC = (at << 1) + 2;
        const mid = start + ((end - start) >> 1);

        const x = this.sum(LC, start, mid, L, R, carry + this.tree[at].prop);
        const y = this.sum(RC, mid + 1, end, L, R, carry + this.tree[at].prop);

        return x + y;
    }

    sumQuery(L, R) {
        if(L < 0 || R > this.n - 1 || R < L) {
            process.stdout.write("Invalid input!\n");
            return 0;
        }
        
        return this.sum(0, 0, this.n - 1, L, R)
    }

    rangeUpdate(at, start, end, L, R, newValue) {
        if(R < start || L > end) return;

        if(start >= L && end <= R) {
            this.tree[at].sum += (end - start + 1) * newValue;
            this.tree[at].prop += newValue;
            return;
        }

        let LC = (at << 1) + 1;
        let RC = (at << 1) + 2;
        let mid = start + ((end - start) >> 1);

        this.rangeUpdate(LC, start, mid, L, R, newValue);
        this.rangeUpdate(RC, mid + 1, end, L, R, newValue);

        this.tree[at].sum = this.tree[LC].sum + this.tree[RC].sum + (end - start + 1) * this.tree[at].prop;
    }

    /*
    Update in range[L, R]
    Update the previous value with newValue, in [L, R] range.
        newValue = newValue + prevValue(sum)
    */
    rangeUpdateQuery(L, R, newValue) {
        this.rangeUpdate(0, 0, this.n - 1, L, R, newValue);
    }

    // Update value at index i(pos) 
    updateElement(pos, newValue) {
        this.rangeUpdate(0, 0, this.n - 1, pos, pos, newValue);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const st = new SegmentTree(arr);

console.log(st.sumQuery(0, 3));
st.rangeUpdateQuery(0, 2, 2);
console.log(st.sumQuery(0, 3));


/*
Time Complexity:
    build: O(N)
    sumQuery: O(log N)
    rangeUpdateQuery: O(log N)
*/