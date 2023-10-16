/**
 * Hash Table - Basic Implementation
 * (Without Collision Resolution)
 */

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = [key, value];
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index] !== undefined) {
            return this.table[index][1];
        }
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(const item of this.table) {
            if(item) console.log(item);
        }
    }
}


function main() {
    const table = new HashTable(50);

    table.set("name", "BatMan");
    table.set("age", 25);
    table.display();
    console.log();

    // This will cause a collision with 'name' as it produces same hash value
    table.set("mane", "SpiderMan");
    table.display();

    console.log(table.get("name"));
    console.log(table.get("mane"));
}

if (require.main === module) main();

module.exports = HashTable;


