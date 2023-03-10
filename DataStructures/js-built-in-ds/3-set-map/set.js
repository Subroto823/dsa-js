const set = new Set([1, 2, 3]);

// add element in set
set.add(4);
set.add(4);   // set will ignore this

// delete element from set
set.delete(3);

for (const item of set) {
    process.stdout.write(item + " ");
}

console.log();
console.log(set.values());

console.log("\nSet size: " + set.size);

// to check if a value exists in the set
console.log(set.has(2));

// to delete all the value of the set
set.clear();

console.log(set);