# Hash Table
* A hash table, also known as hash map, is a data structure that is used to store key-value pairs
*  Given a key, we can associate a value with that key for very fast lookup
* JavaScript's Object is a special implementation of the Hash Table data structure. However, Object class adds its own keys. Keys that we input may conflict and overwrite the inherited default properties.

    # Maps which were introduced in 2015 allow us to store key-value pairs.

* Although JS has two hash table implementation. Writing our own hash table implementation is a very popular JS interview Question.


# Hash Table contd.
* Hash tables store key value pairs.
* We store the key value pairs in a fix sized array. But we know that Arrays have a numeric index.

# How do we go from using a string as an index to number as an index?
* A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
* Using the index, store the value.
* The same hashing function is reused to retrieve the value given key.

# Hash Table Supports three main operation -
* Set to store a key-value pairs
* Get to retrieve a value given its key
* Remove to delete a key value pairs

# Hash Table Usage
* Hash tables are typically implemented where constant time lookup and insertion are required
* Database indexing
* Caches

