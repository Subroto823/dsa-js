const map = new Map([["a", 1], ["b", 2]]);

// iterate through a map
for(let [key, value] of map) {
    process.stdout.write(`${key}: ${value} \n`);
}

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// looping through a Map
for (let key of map.keys()) {
    console.log(key)
}

console.log(map.get("a"));
map.set("c", 3);

console.log(map.has("a"));
console.log(map);
console.log();

console.log(map.size);

map.delete("c");
console.log(map);
console.log();

// to delete all the value of the maps
map.clear();