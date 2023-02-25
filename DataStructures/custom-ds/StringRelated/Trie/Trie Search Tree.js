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

    this.add = (wordParam) => {
        function addWord(word, root) {
            if (word) {
                if (Object.keys(root.keys).includes(word[0])) {
                    let letter = word[0];
                    addWord(word.substring(1), root.keys[letter]);
                }
                else {
                    const node = new Node();

                    let letter = word[0];
                    root.keys[letter] = node;

                    if (word.length === 1) {
                        node.setEnd();
                    }
                    addWord(word.substring(1), root.keys[letter]);
                }
            }
        }

        addWord(wordParam, this.root);
    };

    this.isWord = word => {
        let root = this.root;
        while (word) {
            let firstLetter = word[0];
            if (Object.keys(root.keys).includes(firstLetter)) {
                if (word.length === 1) {
                    if (!root.keys[firstLetter].isEnd()) {
                        return false;
                    }
                }
                word = word.substring(1);
            }
            else {
                return false;
            }
            root = root.keys[firstLetter];
        }
        return true;
    };

    this.print = () => {
        const words = [];

        function reTRIEve(root, word) {
            if (Object.keys(root.keys).length != 0) {
                for (let letter of Object.keys(root.keys)) {
                    reTRIEve(root.keys[letter], word.concat(letter));
                }
                if (root.isEnd()) {
                    words.push(word);
                }
            }
            else {
                word.length > 0 ? words.push(word) : undefined;
                return;
            }
        }

        reTRIEve(this.root, "");
        console.log(words);
        return words;
    };
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

myTree.print();

/*
    # add(): For the add() method, consider a recursion that calls for the root and word, the root being passed on to every subtree and the word being depreciated by one letter for each recursion (preferably the first letter: use pop()).

        Check if each subtree at each level has the then first letter of word as a key, and proceed by adding the letter to the subtree if not already there.

        Don’t forget to call the setEnd() method when you have the last letter of the word to be added: it helps decide if the word ended.

    # isWord(): You could use a while loop here to check for each letter of the given word starting from the first. Check if each subtree contains (.includes()) the current word(in each loop), starting from the root:
        if you can’t find any, it’s evident that the word’s not there: return false, but, in the opposite case, use the isEnd() method (which is triggered by the setEnd() in add() method by setting it as true for a word’s end) which helps you to find if the word ends at at specific key!
        If each letter is found in each level of the tree in each loop, in the end, when the while loop exits (for a given condition: for example, as you use up each first letter of the given word, the word diminishes and becomes empty at the end and that could be the condition for the loop), return true.

        Don’t forget to re-assign the word for each loop: you may use substring() method of the String class.

    # print(): print() is the easiest if you understand the point of recursion. (Even if you don’t understand recursion very well, don’t worry, you’re not alone: Beau Carnes 6 have a lot of lectures that might help you with that.)

        Have an empty list initialized with “new Array()” or “[” & “]” to add up the words into.
        Define a function with root and word as parameters: word as an empty string, so it helps not to keep track of the last word that is already to the list, and the root is passed on to its subtrees by means of the property [root].keys (not the built-in Object property) which contains all the subtrees that contain the letters whereupon.

        So, as you loop through each of the subtrees and their respectives and so on, call the function recursively so that the word is added up with each letter thereupon. But, keep in mind that isEnd() property helps to know if the word ends, so, right after the loop in which you make the recursive call, check if the word that was concatenated (you may use concat() method String class) until then is a whole word (eg: [root].isEnd()).

        For the cases like when you don’t have further subtrees to explore, but, have a word that is lettered up, you can already might be having a condition to check the size of each keys of each subtree (starting from root). Once you’re done, add that word up in the else case as you won’t have any further recursive call(s) or loop(s) left. (Although you can use a different approach where you can avoid adding the word up in an else by using a different condition or same condition with a little difference (eg: loop until ‘0’ instead of stopping at ‘0’).)

    Always check for null or empty values: it surely helps and is highly recommended!

*/