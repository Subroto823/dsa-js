# Tree
A tree is a hierarchical data structure in computer science that consists of nodes connected by edges. It is a simple way to organize data in a branched or hierarchical manner. 

* In a tree,
    - There is one node called the "root" that serves as the starting point.
    - Nodes are connected by directed edges.
    - Each node can have zero or more child nodes, but it has exactly one parent node (except for the root).
    - Nodes without any children are called "leaves."
    - The length of the path from the root to a node is called its "depth."
    - The level of a node is its depth plus one.
    - A "subtree" is a smaller tree within a larger tree, consisting of a node and all its descendants.

Trees are used to represent hierarchical structures like file systems, organization charts, or the structure of a webpage. They also play a crucial role in algorithms and data structures, such as binary search trees and heaps, which enable efficient data retrieval and manipulation.


## Binary Tree
A binary tree is a type of tree data structure in which each node has at most two children, referred to as the "left child" and the "right child." 
This structure ensures that each node has a clear, binary (two-way) branching pattern. Binary trees are commonly used in computer science and data structures for efficient searching, sorting, and organizing data.

## BST - Binary Search Tree
A Binary Search Tree (BST) is a binary tree where each node's left child contains values less than the node's value, and the right child contains values greater than the node's value. 
This property allows for efficient searching, insertion, and deletion of elements, making it a fundamental data structure for ordered data.


### Tree Traversal
Tree traversal is a process of systematically visiting and exploring all the nodes in a tree data structure. 

* A hierarchical data structure like a tree can be traversed in different ways.
    - Depth First Search (DFS)
    - Breadth First Search (BFS)


#### DFS - Depth First Search
The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

* Depending on the order in which we do this, there can be three types of DFS traversals.

    1. Preorder
    2. Inorder
    3. Postorder


1. Preorder Traversal (root/parent -> left -> right)
    * Read the data of the node
    * Visit the left subtree
    * Visit the right subtree

2. Inorder Traversal (left -> root/parent -> right)
    * Visit the left subtree
    * Read the data of the node
    * Visit the right subtree

    (Inorder traversal of a Binary Search Tree (BST) produces a sorted sequence of the elements stored in the tree.)

3. Postorder Traversal (left -> right -> root/parent)
    * Visit the left subtree
    * Visit the right subtree
    * Read the data of the node

#### BFS - Breadth First Search
BFS (Breadth-First Search) traversal in a tree involves visiting nodes level by level, starting from the root and moving outward to each level from left to right.This traversal ensures that nodes at the same level are visited before moving on to deeper levels, making it a "level-order" traversal.
    
* BFS Traversal Approach
    - Create a queue
    - Enqueue the root node
    - While the queue is not empty
        * Dequeue a node from the front of the queue
        * Process the node
        * Enqueue the node's left child if it exists
        * Enqueue the node's right child if it exists
 