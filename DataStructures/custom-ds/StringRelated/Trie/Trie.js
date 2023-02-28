class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(word) {
        let curr = this.root;
        for(let charToInsert of word) {

            // check if the letter is already available in the current node or not
            //if not available
            if(!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new Node();
            }

            // if available
            curr = curr.children[charToInsert];
        }
        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;
        for(let charToFind of word) {
            if(!(charToFind in curr.children)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return curr.isWordEnd;
    }

    startsWith(prefix) {
        let curr = this.root;

        for(let charToFind of prefix) {
            if(!(charToFind in curr.children)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return true;
    }

    print() {
        let words = [];

        const reTRIEve= (node = this.root, string = '') => {
            for (let char in node.children) {
                reTRIEve(node.children[char], string.concat(char));
            }
            if(node.isWordEnd) {
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

console.log(myTrie.contains("doll"));
console.log(myTrie.contains("do"));
console.log(myTrie.contains("dor"));

myTrie.print();