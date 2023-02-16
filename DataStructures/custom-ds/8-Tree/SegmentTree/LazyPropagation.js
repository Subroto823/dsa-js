// Segment Tree - With Lazy Propagation (Using Node Class)

class Node {
    constructor() {
        this.sum = 0;
        this.prop = 0;
    }
}

class SegmentTree{
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n * 4);

        for(let i = 0; i < this.n * 4; i++) {
            this.tree[i] = new Node();
        }
        this.build(arr, 0, 0, this.n - 1);
    }

    // build segment tree - for sum
    build(arr, at, start, end) {
        if(start === end) {
            this.tree[at].sum = arr[start];
            return;
        }

        let left = (at << 1) + 1;
        let right = (at << 1) + 2;
        let mid = (start + end) >> 1;

        this.build(arr, left, start, mid);
        this.build(arr, right, mid + 1, end);

        // we will change this line according to our needs
        this.tree[at].sum = this.tree[left].sum + this.tree[right].sum;
    }

    sumInRangeQuery(at, start, end, i, j, carry = 0) {
        if(i > end || j < start) return 0;
        if(i <= start && j >= end) return this.tree[at].sum + carry * (end - start + 1);

        let left = (at << 1) + 1;
        let right = (at << 1) + 2;
        let mid = (start + end) >> 1;

        let x = this.sumInRangeQuery(left, start, mid, i, j, carry + this.tree[at].prop);
        let y = this.sumInRangeQuery(right, mid + 1, end, i, j, this.tree[at].prop);

        return x + y;
    }

    sumInRange(leftIndx, rightIndx) {
        if(leftIndx < 0 || rightIndx > this.n - 1 || rightIndx < leftIndx) {
            process.stdout.write("Invalid input!\n");
            return -1;
        }
        return this.sumInRangeQuery(0, 0, this.n - 1, leftIndx, rightIndx)
    }

    // update in range[i, j]
    updateInRangeQuery(at, start, end, i, j, newValue) {
        if(j < start || i > end) return;

        if(start >= i && end <= j) {
            this.tree[at].sum += (end - start + 1) * newValue;
            this.tree[at].prop += newValue;
            return;
        }

        // (at << 1) is same as -> at * 2
        let left = (at << 1) + 1;
        let right = (at << 1) + 2;
        let mid = (start + end) >> 1;

        this.updateInRangeQuery(left, start, mid, i, j, newValue);
        this.updateInRangeQuery(right, mid + 1, end, i, j, newValue);

        this.tree[at].sum = this.tree[left].sum + this.tree[right].sum + (end - start + 1) * this.tree[at].prop;
    }

    // update the previous value with newValue, in [i, j] range 
    // newValue = newValue + prevValue(sum)
    updateInRange(i, j, newValue) {
        this.updateInRangeQuery(0, 0, this.n - 1, i, j, newValue);
    }

    // update value at index i(pos) 
    update(pos, newValue) {
        this.updateInRangeQuery(0, 0, this.n - 1, pos, pos, newValue);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const st = new SegmentTree(arr);

st.updateInRange(1, 1, 2);
console.log(st.tree);
console.log(st.sumInRange(0, 2));

