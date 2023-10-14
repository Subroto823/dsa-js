const obj = {
    name: "Heisenberg",
    age: 25,
    1: "whta!!",
    sayMayName: function() {
        console.log(this.name);
    },
}

// to check if a key exists in array
console.log("name" in obj);

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj[1]);

obj.sayMayName();

delete obj[1];
console.log(obj);