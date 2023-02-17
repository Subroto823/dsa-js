### Tree
    # A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges

    # A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.

    # In linear data structures, the time required to search is proportional to the size of the data set.

    # Trees however, owing to the  nonlinear nature allow quicker and easier access to the data.

    # A tree will not contain any loops or cycles.


# Why Tree Data Structure?

    Other data structures such as arrays, linked list, stack, and queue are linear data structures that store data sequentially. In order to perform any operation in a linear data structure, the time complexity increases with the increase in the data size. But, it is not acceptable in today's computational world.

    Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure.


Tree Usage
    # File systems for directory structure
    # A family tree
    # An organisation tree
    # DOM
    # Chat bots
    # Abstract syntax trees


Tree Terminology
    
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

@@@
When it comes to trees, you're rarely asked to implement generic tree.

More often or not, interviews are circle around one specific type of tree. Which is the Binary Search Tree.



