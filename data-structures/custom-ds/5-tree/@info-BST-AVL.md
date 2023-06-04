# Binary Tree
    # A binary tree is a tree data structure in which each node has at most two children.
    # They are referred to as left child and right child.


### BST - Binary Search Tree

    # A binary tree that has two following property
        # The value of each left node must be smaller than the parent node
        # The value of each right node must be greater than the parent node
        (Each node has at most two children.)
        # Both subtrees of each node are also BSTs i.e. they have the above two properties

    # It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.


    Binary Search Tree Operations :
        # Insertion - To add node to the tree.
        # Search - To find a node given its value.
        # DFS & BFS - To visit all nodes in the tree.
        # Deletion - To remove a node given its value.


    BST Usage :
        # Searching
        # Sorting (For dynamic sorting)
        # To implement abstract data types such as lookup tables and priority queues
        # In multilevel indexing in the database
        # For managing virtual memory areas in Unix kerne



@@@ AVL Tree

    (Height balanced bst)
    AVL tree is a self-balancing binary search tree in which each node maintains extra information called a balance factor whose value is either -1, 0 or +1.

    AVL tree got its name after its inventor Georgy Adelson-Velsky and Landis.


    # Why do we need AVl tree?
        * Almost all the operations in a bst are the order of O(h) where h is height of the tree.
        * If we don't plan our tree properly, this height can get as high as n, where n is the number of nodes in BST (skewed tree).
        * To guarantee an upper bound of O(logn) for all these operations, we use balanced trees.



    # Balance Factor
        Balance factor of a node in an AVL tree is the difference between the height of the left subtree and that of the right subtree of that node.

        Balance Factor = (Height of Left Subtree - Height of Right Subtree) or (Height of Right Subtree - Height of Left Subtree)

        The self balancing property of an avl tree is maintained by the balance factor. The value of balance factor should always be -1, 0 or +1
    


    # Operations on an AVL tree

        # Rotating the subtrees in an AVL Tree

            In rotation operation, the positions of the nodes of a subtree are interchanged.

            * There are two types of rotations:
                1. Left Rotate
                    In left-rotation, the arrangement of the nodes on the right is transformed into the arrangements on the left node.

                    # algorithm
                        1. Let the initial tree be.
                        2. If y has a left subtree, assign x as the parent of the left subtree of y.
                        3. If the parent of x is NULL, make y as the root of the tree.
                        4. Else if x is the left child of p, make y as the left child of p.
                        5. Else assign y as the right child of p.
                        6. Make y as the parent of x.

                2. Right Rotate
                    In right-rotation, the arrangement of the nodes on the left is transformed into the arrangements on the right node.

                    # algorithm
                        1. Let the initial tree be.
                        2. If x has a right subtree, assign y as the parent of the right subtree of x.
                        3. If the parent of y is NULL, make x as the root of the tree.
                        4. Else if y is the right child of its parent p, make x as the right child of p
                        5. Else assign x as the left child of p.
                        6. Make x as the parent of y. 
        


        # Algorithm to insert a newNode
            
            A newNode is always inserted as a leaf node with balance factor equal to 0.

            1. insert the newNode as a leaf node. (like in the bst);
            2. Update balanceFactor of the nodes.

            3. If the nodes are unbalanced, then rebalance the node.
                
                1. If balanceFactor > 1, it means the height of the left subtree is greater than that of the right subtree. So, do a right rotation or left-right rotation

                    * If newNodeKey < leftChildKey do right rotation.
                    * Else, do left-right rotation.

                2. If balanceFactor < -1, it means the height of the right subtree is greater than that of the left subtree. So, do right rotation or right-left rotation

                    * If newNodeKey > rightChildKey do left rotation.
                    * Else, do right-left rotation


        
        # Algorithm to Delete a node

            A node is always deleted as a leaf node. After deleting a node, the balance factors of the nodes get changed. In order to rebalance the balance factor, suitable rotations are performed.

                1. delete the node (using bst node deleting algorithm)
                2. Update balanceFactor of the nodes.

                3. Rebalance the tree if the balance factor of any of the nodes is not equal to -1, 0 or 1. 
                    
                    1. If balanceFactor of currentNode > 1,
                        * If balanceFactor of leftChild >= 0, do right rotation. 
                        * Else do left-right rotation

                    2. If balanceFactor of currentNode < -1,
                        * If balanceFactor of rightChild <= 0, do left rotation.
                        * Else do right-left rotation


    # Complexities of Different Operation in AVL tree
        Insertion: O(logn)
        Deletion: O(logn)
        Search: O(logn)

        
    # AVL Tree Applications
        For indexing large records in databases
        For searching in large databases
