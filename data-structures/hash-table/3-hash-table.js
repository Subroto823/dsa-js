var called = 0;

var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};

const HashTable = function () {
    this.collection = {};

    this.add = function (key, value) {
        const hashedKey = hash(key);
        this.collection[hashedKey] = this.collection[hashedKey] || {};
        this.collection[hashedKey][key] = value;
    }

    this.lookup = function (key) {
        const hashedKey = hash(key);
        return this.collection[hashedKey][key];
    }

    this.remove = function (key) {
        const hashedKey = hash(key);
        delete this.collection[hashedKey][key];

        if (Object.keys(this.collection[hashedKey]).length === 0) {
            delete this.collection[hashedKey];
        }

    }
};

const hashTable = new HashTable();
hashTable.add("abc", "hello");
hashTable.add("bca", "bye!");
hashTable.add("acb", "goodbye!")

hashTable.remove("abc");
hashTable.remove("bca");
// hashTable.remove("acb");
console.log(hashTable);

/*

A Hash table is used to implement associative arrays, or mappings of key-value pairs, like the objects and Maps we have just been studying.

A JavaScript object could be implemented as a hash table, for instance (its actual implementation will depend on the environment it's running in). 

The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value. This numerical value is then used as the actual key the associated value is stored by. 

Then, if you try to access the same key again, the hashing function will process the key, return the same numerical result, which will then be used to look up the associated value. 

This provides very efficient O(1) lookup time on average.

Hash tables can be implemented as arrays with hash functions producing array indices within a specified range. 

In this method, the choice of the array size is important, as is the hashing function. 

For instance, what if the hashing function produces the same value for two different keys? This is called a collision. One way to handle collisions is to just store both key-value pairs at that index. 

Then, upon lookup of either, you would have to iterate through the bucket of items to find the key you are looking for. A good hashing function will minimize collisions to maintain efficient search time. */