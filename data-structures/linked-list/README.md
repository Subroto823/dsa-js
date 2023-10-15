# LinkedList

## What is a LinkedList?
A **LinkedList** is a fundamental data structure in computer science used to store and manage collections of data. It is a linear data structure consisting of a sequence of elements, each of which contains a reference to the next element. Unlike arrays, LinkedLists don't require contiguous memory allocation.

## LinkedList Node
A **LinkedList Node** is a fundamental unit of a LinkedList. It contains two main components:
- Data: The value or payload associated with the node.
- Next Pointer: A reference to the next node in the sequence.

## How LinkedList Works
1. **Initialization**: A LinkedList is created with a **head** (the first node) and an optional **tail** (the last node).
2. **Adding Elements**:
   - **Append**: New nodes are added to the end of the list. This involves updating the tail.
   - **Prepend**: New nodes are added at the beginning.
3. **Traversal**: You can traverse the LinkedList by following the next pointers from the head to the tail.
4. **Searching**: Finding specific elements by iterating through the list.
5. **Deletion**: Removing nodes from the list.

## Complexity of LinkedList
The time complexity of common/singly LinkedList operations:
- Prepend: O(1)
- Append: O(n)
- Search: O(n)
- Deletion: O(n)

## Optimizations and Variations

### Optimization with Tail Pointer
Maintaining a **tail pointer** that always points to the last node allows constant-time append operations, optimizing the append operation from O(n) to O(1).

### Circular LinkedList
A **Circular LinkedList** is a variation where the last node's next pointer points back to the first node, creating a loop. This structure can be helpful in certain algorithms.

### Doubly LinkedList
A **Doubly LinkedList** is an extension of the basic LinkedList, where each node has two pointers: one pointing to the next node and another pointing to the previous node. This enables traversal in both directions.

#### Optimization with Tail Pointer in Doubly LinkedList
Similar to the basic LinkedList, maintaining a tail pointer in a **Doubly LinkedList** allows constant-time append operations for both appending to the end and the beginning.