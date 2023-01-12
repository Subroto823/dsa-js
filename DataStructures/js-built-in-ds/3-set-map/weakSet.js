/*
The WeakSet is similar to a Set. 
But, WeakSet can only contain objects whereas a Set can contain any data types such as strings, numbers, objects, etc.  

    # WeakSets are not iterable

*/

const weakSet = new WeakSet();

let obj = {
    msgOne: "Hello World!",
    sendMessage: false
}

// add element to WeakSet
weakSet.add(obj);
console.log(weakSet);

// check if an object is in set
console.log(weakSet.has(obj));

// delete element from set
weakSet.delete(obj);