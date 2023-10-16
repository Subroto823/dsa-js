# Hashtable
A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
It is a widely used data structure that allows efficient data retrieval and storage. 


## Hash Tables and Conversion to Numeric Indices

In hash tables, key-value pairs are stored within a fixed-sized array. However, arrays utilize numeric indices. So, how do we transition from using a string as an index to a number as an index?

1. A hashing function is employed to accept the string key, which converts it into a hash code using a predefined algorithm.
2. This hash code is then mapped to a numeric index that falls within the array's bounds.
3. The value is stored at this numeric index.
4. When the need arises to retrieve the value, the same hashing function is applied to the key, providing the numeric index for efficient retrieval.


## A hash table supports three key operations:

- **Set**: Used to store key-value pairs.
- **Get**: Retrieves a value given its associated key.
- **Remove**: Deletes a key-value pair from the table.


## Key Components

- **Key**: An identifier that is used to access the associated value.
- **Value**: Data or information stored in the hashtable, accessible through its key.
- **Hash Function**: A mathematical function that converts a key into an index within the array.
- **Bucket**: Each index in the array where key-value pairs are stored.
- **Collision**: Occurs when two different keys produce the same hash value.


## Collision in Hash Table
Collision Occurs when two different keys produce the same hash value.

Consider a simple hashtable with five buckets (indexed from 0 to 4). We want to store the following key-value pairs:

1. "apple" => "red"
2. "banana" => "yellow"
3. "grape" => "purple"

Now, let's calculate the hash values for these keys using a hypothetical hash function:

- Hash("apple") = 2
- Hash("banana") = 1
- Hash("grape") = 2 (collision)

The collision occurs because both "apple" and "grape" produced the same hash value (2). When we attempt to store "grape," it would overwrite the value of "apple" in the bucket at index 2.

## Resolving Collisions

There are several methods to resolve collisions in a hashtable:

1. **Separate Chaining**: In this method, each bucket contains a linked list or another data structure to store multiple key-value pairs with the same hash value. Collisions are managed within these structures.

2. **Open Addressing**: In open addressing, when a collision occurs, the hashtable searches for the next available bucket (using a probing sequence) and stores the key-value pair there. Linear probing, quadratic probing, and double hashing are common open addressing techniques.

There are many collsion resolving techniques. Choosing the collision resolution method depends on the specific use case and the expected distribution of keys in the hashtable. Each method has its advantages and trade-offs in terms of performance, memory usage, and implementation complexity.


## Hash Table Usage
Hash tables are typically implemented where constant or efficient time lookup and insertion are required.
- Database indexing
- Caching
- Symbol Tablse


# Hash Table in JavaScript
JavaScript's Object is a special implementation of the Hash Table data structure. However, they come with some default keys that users may accidentally overwrite. To avoid conflicts and make things more straightforward, consider using JavaScript Maps.

- JavaScript Maps were introduced in ECMAScript 6 (ES6), which was finalized in 2015. 

*Although JavaScript offers two built-in hash table implementations, writing yur own hash table is a common and popular interview question in JavaScript.*




