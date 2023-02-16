// Segment Tree - With Lazy Propagation
class Node {
    constructor(sum) {
        this.sum = sum;
        this.prop = 0;
    }
}

class SegmentTree{
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n * 4).fill(0);
        this.build(arr, 0, 0, this.n - 1);
    }

    // build segment tree - for sum
    build(arr, at, start, end) {
        if(start === end) {
            this.tree[at] = arr[start];
            return;
        }

        let left = at * 2 + 1;
        let right = at * 2 + 2;
        let mid = start + Math.floor((end - start) / 2);

        this.build(arr, left, start, mid);
        this.build(arr, right, mid + 1, end);

        // we will change this line according to our needs
        this.tree[at] = this.tree[left] + this.tree[right];
    }

    sumQuery(at, start, end, leftIndx, rightIndx) {
        if(leftIndx > end || rightIndx < start) return 0;
        if(leftIndx <= start && rightIndx >= end) return this.tree[at];

        let left = 2 * at + 1;
        let right = 2 * at + 2;
        let mid = start + Math.floor((end - start) / 2);

        let x = this.sumQuery(left, start, mid, leftIndx, rightIndx);
        let y = this.sumQuery(right, mid + 1, end, leftIndx, rightIndx);

        return x + y;
    }

    sumInRange(leftIndx, rightIndx) {
        if(leftIndx < 0 || rightIndx > this.n - 1 || rightIndx < leftIndx) {
            process.stdout.write("Invalid input!\n");
            return -1;
        }
        return this.sumQuery(0, 0, this.n - 1, leftIndx, rightIndx)
    }

    updateQuery(at, start, end, pos, newValue) {
        if(pos < start || pos > end) return;

        if(start === end) {
            this.tree[at] = newValue;
            return;
        }

        let left = 2 * at + 1;
        let right = 2 * at + 2;
        let mid = start + Math.floor((end - start) / 2);

        this.updateQuery(left, start, mid, pos, newValue);
        this.updateQuery(right, mid + 1, end, pos, newValue);

        this.tree[at] = this.tree[left] + this.tree[right];
    }
    
    update(pos, newValue) {
        this.updateQuery(0, 0, this.n - 1, pos, newValue);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const st = new SegmentTree(arr);
console.log(st.tree);
console.log(st.sumInRange(0, 3));

st.update(2, 10);
console.log(st.sumInRange(0, 3));
