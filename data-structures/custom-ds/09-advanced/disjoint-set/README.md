# Disjoint Set
A disjoint-set, also known as a union-find data structure, is like a tool that helps keep track of groups of items that belong together. 
Imagine you have a bunch of elements, and you want to organize them into separate groups, such that each element belongs to one and only one group. This data structure allows you to do that efficiently.

## It has two main operations:

* Union: You can merge two groups into one. For example, if you have groups A and B, you can use the union operation to combine them into a single group, let's call it AB.

* Find: You can quickly find out which group an element belongs to. For example, you can ask, "Which group does element X belong to?" And it will tell you that it's in group AB.


## Disjoint-set data structures are commonly used in various algorithms and applications, including:

* Kruskal's algorithm for finding the minimum spanning tree of a graph.
* Connected component labeling in image processing.
* Detecting cycles in graphs and finding connected components.
* Implementing data structures like sets and equivalence relations.


*The key idea behind disjoint-set data structures is to represent each subset/element as a tree. Where one element is at the top (the root), and the others are below it.*
*When you want to combine two groups, you connect the top of one tree to the top of another tree. This makes one tree part of the other.*

*If you want to know which group an element belongs to, you follow the tree upward to find the top element (the root). That top element represents the whole group.*


Disjoint-set data structures can be implemented in various ways, with different optimizations for the union and find operations. One common optimization is path compression, which flattens the tree structure during the "find" operation, reducing the height of the trees and improving overall performance.

Overall, disjoint-set data structures are a versatile tool for solving a wide range of problems related to partitioning and connectivity in various algorithms and applications.*