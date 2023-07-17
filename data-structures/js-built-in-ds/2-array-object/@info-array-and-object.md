# Array
* an array is an ordered collection of values
* It is a data structure that can hold a collection of values

   * arrays can contain a mix of different data types in JS. We can store strings, booleans, numbers of even objects all in the same array.

   * JS arrays are resizable. we don't have to declare the size of an array before creating

   * zero-indexed and the insertion order is maintained

   * arrays are iterables.


# Array Big-O

* Insert/remove at the end - O(1)
* Insert/remove at beginning - O(n)
* Access - O(1)
* Search - O(n)
* Push/pop - O(1)
* Shift/unshift/concat/slice/splice - O(n)
* forEach/map/filter/reduce - O(n)
   

# # # 
* when solving a problem we might use array.forEach or array.filter and the callback function would also contains a for loop. In such a scenario, our time complexity is quadratic(the runtime of the algorithm is directly proportional to the square of the size of the input).


# Object

* an object is an unordered collection of key-value pairs. The key must be string or symbol data type where as the value can be any data type
* is not iterable

* objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs

# an object is a collection of key value pairs

# Objects Big-O
* Insert O(1)
* Remove O(1)
* Access O(1)
* Search O(n)

# let's take a look at few methods of object

* Object.keys() - O(n)  ... returns an array of all the keys
* Object.values() - O(n)  ... returns an array of all the values
* Object.entries() - O(n) ...returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

   const obj = { foo: 'bar', baz: 42 };

   console.log(Object.entries(obj));
   output: [ ['foo', 'bar'], ['baz', 42] ];


* Object.assign() ...which is used to copy the values and properties from one or more source objects to a target object.

    Object.assign(target, ...sources)
    
    var targetObject = { a: 10 };
    var obj2 = { b: 20 };
    var obj3 = { c: 30 };

    var newObject = Object.assign(targetObject, obj2, obj3);

    console.log(newObject);
    Output : Object { a: 10, b: 20, c: 30 }

    