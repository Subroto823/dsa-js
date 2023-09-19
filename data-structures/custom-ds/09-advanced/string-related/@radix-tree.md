# Radix Trees

* A radix tree is like a trie, but it saves space by combining nodes together if they only have one child. 

* Radix trees are more cache friendly than tries, since the characters within a single node are usually stored in an array of characters, adjacent to each other in memory.