class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let curr = this.root;

        for (let char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }

            curr = curr.children.get(char);
        }

        curr.isWordEnd = true;
    }

    isWord(word) {
        const node = this.search(word);
        return node !== null && node.isWordEnd;
    }

    startsWith(prefix) {
        return this.search(prefix) !== null;
    }

    search(word) {
        let curr = this.root;

        for (let char of word) {
            if (!curr.children.has(char)) {
                return null;
            }

            curr = curr.children.get(char);
        }
        
        return curr;
    }

    wordsWithPrefix(prefix) {
        const words = [];
        const prefixNode = this.search(prefix);

        if(prefixNode !== null) {
            this.reTRIEve(prefixNode, prefix, words);
        }

        return words;
    }

    reTRIEve(node, word, wordList = []) {
        if(node.isWordEnd) {
            wordList.push(word);
        }

        for(let char of node.children.keys()) {
            this.reTRIEve(node.children.get(char), word.concat(char), wordList);
        }

        return wordList;
    }

    removeWord(word) {
        const list = [this.root];
        let curr = this.root;

        for(let char of word) {
            if(!curr.children.has(char)) {
                break;
            }

            curr = curr.children.get(char);
            list.push(curr);
        }

        const N = list.length - 1;

        // if list length - 1 and word length is not equal, or the last node of the list is not the word end, then the word is not in the Trie
        if(N !== word.length || !list[N].isWordEnd) {
            return;
        }

        list[N].isWordEnd = false;

        for(let i = N; i > 0; i--) {
            curr = list[i];
            let parent = list[i-1];

            // if we get any node, that is a end of other word, or if the current node has children, then it's a prefix of another word, break the loop
            if(curr.isWordEnd || curr.children.size !== 0) {
                break;
            } else {
                parent.children.delete(word[i-1]);
            }
        }
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
myTrie.add("mat");
myTrie.add("maniac");
myTrie.add("matrix");

console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("do"));
console.log(myTrie.isWord("dor"));

myTrie.print();
console.log(myTrie.wordsWithPrefix("ma"));