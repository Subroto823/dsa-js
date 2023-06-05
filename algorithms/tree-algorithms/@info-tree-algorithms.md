### Tree Traversal :
* Visiting every node in the tree
* A hierarchical data structure like a tree can be traversed in different ways.

    1. Depth First Search (DFS)
    2. Breadth First Search (BFS)


    ### Depth First Search
    * The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

    * Vist the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree.


    * Depending on the order in which we do this, there can be three types of DFS traversals.

    1. Preorder
    2. Inorder
    3. Postorder


    1. Preorder Traversal
        * Read the data of the node
        * Visit the left subtree
        * Visit the right subtree
            @@@ (root/parent-left-right)

    2. Inorder Traversal
        * Visit the left subtree
        * Read the data of the node
        * Visit the right subtree
            @@@ (left-root/parent-right)

    3. Postorder Traversal
        * Visit the left subtree
        * Visit the right subtree
        * Read the data of the node
            @@@ (left-right-root/parent)


    ### Breadth First Search :
    * Explore all nodes at the present depth prior to  moving on to the nodes at the next depth level.
        
        * BFS Traversal Approach
            * Create a queue
            * Enqueue the root node
            * As long as a node exists in the queue
                * Dequeue the node from the front
                * Read the node's value
                * Enqueue the node's left child if it exists
                * Enqueue the node's right child if it exists


            
 