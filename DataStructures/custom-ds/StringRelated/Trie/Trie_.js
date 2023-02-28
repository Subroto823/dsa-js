class Node {
    constructor() {
        this.children = new Map();
        this.wordEnd = false;
    }

    setEnd() {
        this.wordEnd = true;
    }

    isWordEnd() {
        return this.wordEnd;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(word) {
        let curr = this.root;

        for (let char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new Node());
            }
            curr = curr.children.get(char);
        }
        curr.setEnd();
    }

    isWord(word) {
        let curr = this.root

        for (let char of word) {
            if (!curr.children.has(char)) {
                return false;
            }
            curr = curr.children.get(char);
        }
        return curr.isWordEnd();
    }

    startWithPrefix(prefix) {
        let curr = this.root;

        for (let char of prefix) {

            if (!curr.children.has(char)) {
                return false;
            }
            curr = curr.children.get(char);
        }
        return true;
    }

    print() {
        let words = [];

        const reTRIEve = (node = this.root, string = '') => {
            for (let char of node.children.keys()) {
                reTRIEve(node.children.get(char), string.concat(char));
            }
            if(node.isWordEnd()) {
                words.push(string);
            }
        }

        reTRIEve(this.root, '');
        process.stdout.write(words.join(" "));
    }
}

const myTrie = new Trie();

myTrie.add("dork");
myTrie.add("doll");
myTrie.add("dolphin");
myTrie.add("do");
myTrie.add("dorm");

console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("do"));
console.log(myTrie.isWord("dor"));

myTrie.print();

