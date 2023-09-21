/* 
Disjoint Set (basic implementation) 
    
Time Complexity:
    find: O(n)
*/

class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }
  
    find(x) {
        if (this.parent[x] === x) {
            return x;
        }
        return this.find(this.parent[x]);
    }
  
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
  
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}

const ds = new DisjointSet(5);

ds.union(0, 2);
ds.union(0, 4);

console.log(ds.find(4) === ds.find(0));

ds.union(1, 3);
console.log(ds.find(2) === ds.find(3));


/*
Optimization: Path Compression
    
Path compression is an optimization technique used in disjoint-set data structures to improve the efficiency of the "find" operation. T
he primary goal of path compression is to reduce the height of the trees or sets in the disjoint-set forest, making future "find" operations faster.

Time Complexity: 
    find: O(logn)
*/
class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }
  
    find(x) {
        if (this.parent[x] === x) {
            return x;
        }

        // path compression
        return this.parent[x] = this.find(this.parent[x]);
    }
  
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
  
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}