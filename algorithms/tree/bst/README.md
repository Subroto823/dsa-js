# Binary Search Trees (BST)
It is a specialized binary tree in which each node's left child contains values less than the parent, and the right child contains values greater than the parent. 


## Usage and Applications

- **Efficient Search**: BSTs are primarily used for quick data retrieval. Their ordering rule enables rapid searching, making them ideal for dictionaries, databases, and indexing.

- **Dynamic Set**: BSTs are used to implement dynamic sets, allowing for easy insertion, deletion, and searching of elements.

- **In-Order Traversal**: BSTs support in-order traversal, providing elements in sorted order, which is useful for various sorting algorithms.


## What is Balanced BST?
A BST where the heights of left and right subtrees differ by at most one.


## Self-Balancing BSTs

- **AVL Tree**: An AVL Tree is a self-balancing binary search tree where the heights of left and right subtrees differ by at most one. This self-balancing property ensures that, even in the worst-case scenarios, search, insertion, and deletion operations remain efficient. AVL Trees are essential in maintaining predictable performance.

- **Red-Black Tree**: A Red-Black Tree is another self-balancing binary search tree. It enforces specific rules to guarantee balanced heights. These trees are widely used in libraries and language implementations to maintain performance predictability, especially in scenarios with frequent data modifications.


### Why Self-Balancing BSTs?

The need for self-balancing BSTs arises because in real-world applications, data is dynamic and often subject to insertions and deletions. 
Without balancing, a standard BST can become skewed and degrade into a linked list-like structure, leading to inefficient operations. 
Self-balancing trees, such as AVL and Red-Black Trees, automatically maintain balance, ensuring consistent and efficient performance regardless of the data distribution or operation sequence.