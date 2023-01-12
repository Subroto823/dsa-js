const arr = [1, 2, 3, "Hello"];

arr.push(4); //insert at the end
arr.unshift(0); //insert at the beginning
arr.pop();  // remove from the last
arr.shift(); // remove from the first

for(const item of arr) {
    process.stdout.write(item + " ");
}

/*
 *
 * Insert/remove from the end - O(1)
 * Insert/remove from the begginning - O(n)
 * Access - O(1)
 * Search - O(n)
 * 
 * push/pop - O(1)
 * shift/unshift/concat/slice/splice - O(n)
 * forEach/map/filter/reduce - O(n)
 * 
 */