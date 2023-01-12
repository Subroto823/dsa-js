const obj = {
    name: "Heisenberg",
    age: 25,
    1: "whta!!",               // we can also use number as a key
    sayMayName: function() {
        console.log(this.name);
    },
}

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj[1]);

obj.sayMayName();

delete obj[1];
console.log(obj);