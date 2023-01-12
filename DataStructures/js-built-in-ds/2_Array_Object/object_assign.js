var obj1 = { a: 10 };
var obj2 = { b: 20 };
var obj3 = { c: 30 };

var new_obj = Object.assign(obj1, obj2, obj3);

console.log(new_obj);
console.log(obj1);
console.log(obj2);