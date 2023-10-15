# Binary Tree
A Binary Tree is a tree structure in which every parent node can have a maximum of two children. Each node in a binary tree is comprised of three items:

1. Data item
2. Pointer to the left child
3. Pointer to the right child

## Types Of Binary Trees
- **Binary Search Tree (BST)**: A specialized binary tree in which each node's left child contains values less than the parent, and the right child contains values greater than the parent.

- **Full Binary Tree (Proper Binary Tree)**: In this type of binary tree, every parent/internal node has either two children or none.

- **Perfect Binary Tree**: It is a type of binary tree in which every internal node has exactly two children, and all leaf nodes are at the same level.

- **Complete Binary Tree**: A complete binary tree is similar to a full binary tree but with two key differences:
    - Every level must be completely filled
    - All leaf nodes lean left, and the last leaf might not have a right sibling.

- **Degenerate or Pathological Tree**: This tree has only one child, either left or right, for each node.

- **Skewed Binary Tree**: A skewed binary tree is pathological and is dominated by either left or right nodes, leading to two types: left-skewed and right-skewed binary trees.

- **Balanced Binary Tree**: In this binary tree, the height difference between the left and right subtrees of each node is either 0 or 1.


## Binary Tree Traversal
A hierarchical data structure like a tree can be traversed in different ways.
- Depth First Search (DFS)
- Breadth First Search (BFS)


### DFS - Depth First Search
The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

* Depending on the order in which we do this, there can be three types of DFS traversals in a Binary Tree.

    1. Preorder
    2. Inorder
    3. Postorder

1. Preorder Traversal (Root/Parent -> Left -> Right):
    - Read the node's data.
    - Visit the left subtree.
    - Visit the right subtree.

2. Inorder Traversal (Left -> Root/Parent -> Right):
    - Visit the left subtree.
    - Read the node's data.
    - Visit the right subtree.
    
*(In a Binary Search Tree (BST), this produces a sorted sequence.)*

3. Postorder Traversal (Left -> Right -> Root/Parent):
    - Visit the left subtree.
    - Visit the right subtree.
    - Read the node's data.


### BFS - Breadth First Search
BFS (Breadth-First Search) traversal in a tree involves visiting nodes level by level, starting from the root and moving outward to each level from left to right.This traversal ensures that nodes at the same level are visited before moving on to deeper levels, making it a "level-order" traversal.
    
* BFS Traversal Approach
    - Create a queue
    - Enqueue the root node
    - While the queue is not empty
        - Dequeue a node from the front of the queue
        - Process the node
        - Enqueue the node's left child if it exists
        - Enqueue the node's right child if it exists
 

 ## Applications of Binary Trees

- Quick data access and storage.
- Routing algorithms in networks.
- Implementation of heap data structures.
- Syntax tree in compilers.