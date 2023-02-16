class SegmentTree{
    constructor(arr) {
        let n = arr.length;
        this.tree = new Array(n * 3).fill(0);
        this.build(arr, 0, 0, n - 1);
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
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const segTree = new SegmentTree(arr);
console.log(segTree.tree);