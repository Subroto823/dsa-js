const map = new Map([["a", 1], ["b", 2]]);

for(let [key, value] of map) {
    process.stdout.write(`${key}: ${value} \n`);
}

console.log(map.get("a"));
map.set("c", 3);

console.log(map.has("a"));
console.log(map);

console.log(map.size);

map.delete("c");
console.log(map);

// to delete all the value of the maps
map.clear();