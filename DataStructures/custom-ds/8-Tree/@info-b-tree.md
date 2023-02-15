### B-tree
    
    B-tree is a special type of self-balancing search tree in which each node can contain more than one key and can have more than two children. It is a generalized form of the binary search tree.

    It is also known as a height-balanced m-way tree.

    

    ### B-tree Properties

        1. Maintains sorted data. (For each node x, the keys are stored in increasing order.)
        
        2. Generalization of bst in which a node can have more than one key and more than 2 children.
        
        3. All leaves have the same depth (all leaf nodes must be at same level).
    
        4. Children(m-way)

            # Max Children
                Every node can have max m children.
        
            # Min Children(at least)
                leaf -> 0
                root -> 2
                internal -> ceil(m/2)
    
                The root has at least 2 children and contains a minimum of 1 key.
        
        5. Keys
            # Max Keys: 
                If m is the order of the tree, each internal node can contain at most (m - 1) keys along with a pointer to each child.

            # Min Keys:
                root -> 1
                all other nodes -> ceil(m/2) - 1

        6. In each node, there is a boolean value x.leaf which is true if x is a leaf.

        7. If n ≥ 1, then for any n-key B-tree of height h and minimum degree t ≥ 2, h ≥ logt (n+1)/2.


    
    ### Operations on a B-tree

        # Searching an element in a B-tree

            Searching for an element in a B-tree is the generalized form of searching an element in a Binary Search Tree. The following steps are followed.

            1. Starting from the root node, compare k with the first key of the node.
            
            2. If k = the first key of the node, return the node and the index.
            
            3. If k.leaf = true, return NULL (i.e. not found).
            
            4. If k < the first key of the root node, search the left child of this key recursively.
            
            5. If there is more than one key in the current node and k > the first key, compare k with the next key in the node.
            
            6. If k < next key, search the left child of this key (ie. k lies in between the first and the second keys).
            Else, search the right child of the key.
            
            7. Repeat steps 1 to 4 until the leaf is reached.
    

    ### Why do we need a B-tree data strcuture?

        The need for B-tree arose with the rise in the need for lesser time in accessing the physical storage media like a hard disk. The secondary storage devices are slower with a larger capacity. There was a need for such types of data structures that minimize the disk accesses.

        Other data structures such as a binary search tree, avl tree, red-black tree, etc can store only one key in one node. If you have to store a large number of keys, then the height of such trees becomes very large and the access time increases.

        However, B-tree can store many keys in a single node and can have multiple child nodes. This decreases the height significantly allowing faster disk accesses.