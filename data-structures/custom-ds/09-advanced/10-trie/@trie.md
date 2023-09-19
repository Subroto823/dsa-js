# Trie
* Tries are an extremely special and useful data-structure that are based on the prefix of a string. They are used to represent the “reTRIEval” of data and thus the name Trie. 

* It is an advanced data structure that is sometimes also known as prefix tree or digital tree.

* A trie is an ordered search tree commonly used to hold strings, or more generically associative arrays or dynamic datasets in which the keys are strings. 
 


# Properties of a Trie Data Structure

* Every node (except root) will store a letter in the alphabet

* Each node of a Trie represents a string and each edge represents a character. Unlike a binary tree, nodes are not associated with actual values. 

Instead, the path to a node represents a specific key. For instance, if we wanted to store the string code in a trie, we would have four nodes, one for each letter: c — o — d — e. 
Following that path through all these nodes will then create code as a string — that path is the key we stored.
    
* Every node consists of hashmaps or an array of pointers, with each index representing a character and a flag to indicate if any string ends at the current node.

* Unlike binary trees a node can store any number of child nodes.

* Each path from the root to any node represents a word or string.

* They are very good at storing sets of data when many keys will have overlapping prefixes, for example, all the words in a dictionary. 



#  Strengths

* Sometimes Space-Efficient. If you're storing lots of words that start with similar patterns, tries may reduce the overall storage cost by storing shared prefixes once.

* Efficient Prefix Queries. Tries can quickly answer queries about words with shared prefixes, like:
    * How many words start with "choco"?
    * What's the most likely next letter in a word that starts with "strawber"?


# Weaknesses

* Usually Space-Inefficient. Tries rarely save space when compared to storing strings in a set.

* ASCII characters in a string are one byte each. Each link between trie nodes is a pointer to an address—eight bytes on a 64-bit system. 
So, the overhead of linking nodes together often outweighs the savings from storing fewer characters.
    
* Not Standard. Most languages don't come with a built-in trie implementation. You'll need to implement one yourself.


# Advantages of Trie Data Structure over a Hash Table:

* We can efficiently do prefix search (or autocomplete) with Trie.

* We can easily print all words in alphabetical order which is not easily possible with hashing.
    
* There is no overhead of Hash functions in a Trie data structure.
    
* Searching for a String even in the large collection of strings in a Trie data structure can be done in O(L) Time complexity, Where L is the number of words in the query string. This searching time could be even less than O(L) if the query string does not exist in the trie.



#  Some other variations of Tries are ternary search trees, HAT-tries, and burst tries.
