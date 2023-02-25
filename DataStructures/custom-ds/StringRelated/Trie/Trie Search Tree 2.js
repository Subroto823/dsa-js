/*
Trie is an another type of tree structure. 

A trie is an ordered search tree commonly used to hold strings, or more generically associative arrays or dynamic datasets in which the keys are strings. 

They are very good at storing sets of data when many keys will have overlapping prefixes, for example, all the words in a dictionary. 

Unlike a binary tree, nodes are not associated with actual values. 
Instead, the path to a node represents a specific key. For instance, if we wanted to store the string code in a trie, we would have four nodes, one for each letter: c — o — d — e. 
Following that path through all these nodes will then create code as a string — that path is the key we stored. 

Then, if we wanted to add the string coding, it would share the first three nodes of code before branching away after the d. 
In this way, large datasets can be stored very compactly. In addition, search can be very quick because it is effectively limited to the length of the string you are storing. 

Furthermore, unlike binary trees a node can store any number of child nodes. As you might have guessed from the above example, some metadata is commonly stored at nodes that hold the end of a key so that on later traversals that key can still be retrieved. 

For instance, if we added codes in our example above we would need some way to know that the e in code represents the end of a key that was previously entered. Otherwise, this information would effectively be lost when we add codes. */

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};

const Trie = function () {
    this.root = new Node();

    this.add = function (input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        }
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
        else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }

    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            }
            else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }

    this.print = function () {
        let words = new Array();
        let search = function (node = this.root, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
};

const myTree = new Trie();
myTree.add('ball');
myTree.add('bat');
myTree.add('doll');
myTree.add('dork');
myTree.add('do');
myTree.add('dorm');
myTree.add('send');
myTree.add('sense');

console.log(myTree.isWord('doll'));
console.log(myTree.isWord('dor'));
console.log(myTree.isWord('dorf'));
console.log(myTree.isWord('do'));

console.log(myTree.print());

