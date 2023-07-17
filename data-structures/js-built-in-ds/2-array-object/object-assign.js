var targetObject = { a: 10 };
var obj2 = { b: 20 };
var obj3 = { c: 30 };

var newObject = Object.assign(targetObject, obj2, obj3);

console.log(newObject);
console.log(obj1);
console.log(obj2);