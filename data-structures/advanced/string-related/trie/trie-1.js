class TrieNode {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let curr = this.root;

        for(let charToInsert of word) {
            // If the letter is not already available in the current node 
            if(!(curr.children.hasOwnProperty(charToInsert))) {
                curr.children[charToInsert] = new TrieNode();
            }

            curr = curr.children[charToInsert];
        }

        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;

        for(let charToFind of word) {
            if(!(curr.children.hasOwnProperty(charToFind))) {
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

    reTRIEve (node, word, wordList = []) {
        if(node.isWordEnd) {
            wordList.push(word);
        }

        for (let char in node.children) {
            this.reTRIEve(node.children[char], word.concat(char), wordList);
        }

        return wordList;
    }
    
    print() {
        let words = this.reTRIEve(this.root, '');
        process.stdout.write(words.join(" ") + "\n");
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