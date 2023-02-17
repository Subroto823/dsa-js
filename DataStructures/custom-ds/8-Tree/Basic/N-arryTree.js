class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }

    addChildren(...val) {
        for (let i = 0; i < val.length; i++) {
            let node = new Node(val[i]);
            this.children.push(node);
        }
    }

    getChildren(i) {
        if (this.children.length !== 0) {
            return this.children[i];
        }
    }
}

class NArryTree {
    constructor(root) {
        this.root = root || null;
    }

    preorderHelper(root, ans = []) {
        if (!root) return ans;

        ans.push(root.val)
        for (let child of root.children) {
            this.preorderHelper(child, ans);
        }
        return ans;
    };

    preorder() {
        return this.preorderHelper(this.root);
    }

    postorderHelper(root, ans = []) {
        if (!root) return ans;

        for (let child of root.children) {
            this.postorderHelper(child, ans);
        }
        ans.push(root.val);

        return ans;
    };

    postorder() {
        return this.postorderHelper(this.root);
    }

    levelOrder() {
        let res = [];
        if (!this.root) return res;

        let queue = [];
        queue.push(this.root);

        let temp = [];

        while (queue.length) {
            let n = queue.length;

            for (let i = 0; i < n; i++) {
                let cur = queue.shift();
                temp.push(cur.val);

                for (let child of cur.children) {
                    queue.push(child);
                }
            }
            res.push(temp);
            temp = [];
        }
        return res;
    }
}

const root = new Node(1);
root.addChildren(2, 3, 4, 5);

root.getChildren(1).addChildren(6, 7);
root.getChildren(2).addChildren(8);
root.getChildren(3).addChildren(9, 10);

root.getChildren(1).getChildren(1).addChildren(11);
root.getChildren(2).getChildren(0).addChildren(12);
root.getChildren(3).getChildren(0).addChildren(13);

root.getChildren(1).getChildren(1).getChildren(0).addChildren(14);

const narryTree = new NArryTree(root);
console.log(narryTree.levelOrder());