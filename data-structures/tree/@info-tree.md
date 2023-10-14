### Tree
    # A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges

    # A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.

    # In linear data structures, the time required to search is proportional to the size of the data set.

    # Trees however, owing to the  nonlinear nature allow quicker and easier access to the data.

    # A tree will not contain any loops or cycles.


# Why Tree Data Structure?

    Other data structures such as arrays, linked list, stack, and queue are linear data structures that store data sequentially. In order to perform any operation in a linear data structure, the time complexity increases with the increase in the data size. But, it is not acceptable in today's computational world.

    Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure.


# Tree Usage

    # File systems for directory structure
    # A family tree
    # An organisation tree
    # DOM
    # Chat bots
    # Abstract syntax trees


# Tree Terminology
    
    # Node 
       A node is an entity that contains a key or value and pointers to its child nodes.
    
    # Parent node 
        # A node that is immediate predacessor of any node is called a parent node

    # Child node
        # A node that is an immediate successor of a node is called a child node

    # Root node
        # A node from which the tree is originated is called the root node. It doesn't have a parent node. (topmost node of a tree)

    # Leaf node
       # nodes which doesn't have any child node. (The last nodes of each path)

    # Siblings
       # Child node with the same parent are called siblings.

    # Ancestor node
        # parent's parent node

    # Path
        # Sequence of nodes and edges from one node to another
    
    # Degree
        # The degree of a node is a total number of child nodes it has.

        # The degree of a tree is the maximum degree of a node in the tree.

    # Depth
        # The depth of node is the number of edges from the root to that node.
        # The depth of root node is always zero

    # Height
        # The height of a node is the number of edges from the deepest leaf to that node.(the longest path from the node to a leaf node)
        
        # Height of the root node is the height of tree.

    # Forest
        A collection of disjoint trees is called a forest.

        We can create a forest by cutting the root of a tree.


# Tree Applications

    Binary Search Trees(BSTs) are used to quickly check whether an element is present in a set or not.

    Heap is a kind of tree that is used for heap sort.

    A modified version of a tree called Tries is used in modern routers to store routing information.

    Most popular databases use B-Trees and T-Trees, which are variants of the tree structure we learned above to store their data
    
    Compilers use a syntax tree to validate the syntax of every program you write


###
When it comes to trees, you're rarely asked to implement generic tree.

More often or not, interviews are circle around one specific type of tree. Which is the Binary Search Tree.



### Binary Tree
* A binary tree is a tree data structure in which each parent node can have at most two children. Each node of a binary tree consists of three items:

    1. data item
    2. address of left child
    3. address of right child


    # Types of Binary Tree

    1. Full Binary Tree
        A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.
        * It is also known as a proper binary tree

    2. Perfect Binary Tree
        A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

    3. Complete Binary Tree
        A complete binary tree is just like a full binary tree, but with two major differences

            * Every level must be completely filled
            * All the leaf elements must lean towards the left.
            * The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.

    4. Degenerate or Pathological Tree
        A degenerate or pathological tree is the tree having a single child either left or right.

    5. Skewed Binary Tree
        A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. 
        Thus, there are two types of skewed binary tree: left-skewed binary tree and right-skewed binary tree.

    6. Balanced Binary Tree
        It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.


    # Binary Tree Applications

    * For easy and quick access to data
    * In router algorithms
    * To implement heap data structure
    * Syntax tree


