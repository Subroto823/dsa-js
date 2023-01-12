/* 
JavaScript WeakMap object is used to store the elements as key-value pair where keys are weakly referenced

    (difference with Map)
    # WeakMap object can not contains the primitive type elements. 
    # It can contains only object type elements.
    # WeakMap is not iterable
*/

const weakMap = new WeakMap();

let objOne = {};
let objTwo = {};

// adding elements in WeakMap - only object can be a key in WeakMap
weakMap.set(objOne, "Hello World");
weakMap.set(objTwo, "GoodBye World");

console.log(weakMap);
console.log();

// access elements
console.log(weakMap.get(objOne));
console.log(weakMap.get(objTwo));
console.log();

// delete elements
weakMap.delete(objTwo);
console.log(weakMap);
console.log();

// check if a key exist in WeakMap
console.log(weakMap.has(objOne));
console.log(weakMap.has(objTwo));


/*
Another major difference is that the key of WeakMap is weakly referenced. 

    It means that whenever an object is used as a key for WeakMap, that object can be garbage collected. It can happen when the reference to that object is lost( i.e. assign that object reference to NULL). 
    And when the object is no longer in use, JavaScript Garbage Collection detects it and frees it from the memory. Therefore keys of WeakMaps are weakly referenced. */