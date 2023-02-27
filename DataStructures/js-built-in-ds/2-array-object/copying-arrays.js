/**
 * 
 * @ArrayCopying
 * 
 */

var original = [1, 2, 3, 4];

// slice
var copy1 = original.slice(0);

// spread operator
var copy2 = [...original];

copy1.push(5);
copy2.push(7);
console.log(original, copy1, copy2);


/**
 * @DEEP copying
 * 
 */
var deepArray = [["Hello!"]];

// var shallowCopy = deepArray.slice(0);

// shallowCopy[0].push("world!");
// console.log(deepArray,shallowCopy);


var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("world!");
console.log(deepArray, deepCopy);