### Red Black Tree

* Red-Black tree is a self-balancing binary search tree in which each node contains an extra bit for denoting the color of the node, either red or black.

    * A red-black tree satisfies the following properties:

        1. It is a self-balancing BST
        2. Red/Black Property: Every node is colored, either red or black.
        3. The root is always black.
        3. Every leaf (NIL) is black.
        4. If a node is red then, the children are always black.
        5. For each node, any simple path from the node to any of its descendant leaf(NIL node) has the same black-depth (the number of black nodes).


* Red-Black Tree Insertion

    During the repair(fixInsert), we have to deal with Four different cases:

    * Case 1: New node is the root
    * Case 2: Parent and uncle nodes are red
    * Case 3: Parent node is red, uncle node is black, inserted node is
    * "inner grandchild"
    * Case 4: Parent node is red, uncle node is black, inserted node is "outer
    * grandchild

 
    * Case 1: New Node Is the Root
        * If the new node is the root, color the root black, we don't have to do anything else.

    * Case 2: Parent and Uncle Nodes Are Red
        * Recolor parent and uncle nodes to black and the grandparent(new node) to red

    * Case 3: Parent Node Is Red, Uncle Node Is Black, Inserted Node Is "Inner Grandchild"

        * First, rotate at the parent node in the opposite direction of the inserted
        * node.
        * 
        * (If the inserted node is the left child of its parent node, we rotate to the
        * right at the parent node. If the inserted node is the right child, we rotate
        * to the left.)
        * 
        * Second, rotate at the grandparent node in the opposite direction to the
        * previous rotation.
        * 
        * Finally, color the newly inserted node as black and the
        * grandparent(grandparent before rotation) to red:
    

    * Case 4: Parent Node Is Red, Uncle Node Is Black, Inserted Node Is "Outer Grandchild"
        
        * In this case, rotate at the grandparent in the opposite direction of the
        * parent and inserted node.
        * 
        * Finally, color the former parent node as black and the former grandparent
        * node to red:


* Red-Black Tree Deletion

    First remove the node using BST Deletion algorithm
    * (Sumarry)
        1. If the node to be deleted has no children, we simply remove it.
        2. If the node to be deleted has one child, we remove the node and let its single child move up to its position.
        3. If the node to be deleted has two children, we copy the content (not the color!) of the in-order successor of the right child into the node to be deleted and then delete the in-order successor according to rule 1 or 2 (the in-order successor has at most one child by definition)

    * After that, we need to check the rules of the red-black tree and repair it if necessary. To do this, we need to remember the deleted node's color and which node we have moved up.

        1. If the deleted node is red, we cannot have violated any rule: Neither can it result in two consecutive red nodes (rule 4), nor does it change the number of black nodes on any path (rule 5).
        2. However, if the deleted node is black, we are guaranteed to have violated rule 5 (unless the tree contained nothing but a black root), and rule 4 may also have been violated – namely if both parent nodes and the moved-up child of the deleted node were red.


### Red-Black Tree Applications
  * To implement finite maps
  * To implement Java packages: java.util.TreeMap and java.util.TreeSet
  * To implement Standard Template Libraries (STL) in C++: multiset, map, multimap
  * In Linux Kernel
