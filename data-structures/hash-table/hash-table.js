/**
 * Hash Table
 */

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.table = new Array(this.table.length);
        this.size = 0;
    }

    _hash(key) {
        const prime = 31;
        let total = 0;
        key = key.toString();

        for (let i = 0; i < Math.min(key.length, 50); i++) {
            const charValue = key.charCodeAt(i) - 96;
            total = (total * prime + charValue) % this.table.length;
        }

        return total;
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.table[index]) this.table[index] = [];

        const bucket = this.table[index];
        const sameKeyItem = bucket.find(item => item[0] === key);

        if (sameKeyItem) {
            sameKeyItem[1] = value;
        } else {
            bucket.push([key, value]);
            this.size++;
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (const entry of bucket) {
                if (entry[0] === key) {
                    return entry[1];
                }
            }
        }

        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    this.size--;
                    return;
                }
            }
        }
    }

    entries() {
        const entries = [];

        for (const items of this.table) {
            if (items) {
                for (const item of items) {
                    entries.push(item);
                }
            }
        }
        
        return entries;
    }

    keys() {
        const keys = [];

        for (const items of this.table) {
            if (items) {
                for (const item of items) {
                    keys.push(item[0]);
                }
            }
        }
        
        return keys;
    }

    values() {
        const values = [];

        for (const items of this.table) {
            if (items) {
                for (const item of items) {
                    values.push(item[1]);
                }
            }
        }
        
        return values;
    }
}

function main() {
    const table = new HashTable(50);

    table.set("name", "BatMan");
    table.set("age", 25);
    table.set("mane", "SpiderMan");

    console.log(table.get("name"));
    console.log(table.get("mane"));

    console.log(table.entries());

    table.remove('age');
    console.log(table.entries());
}

if (require.main === module) main();

module.exports = HashTable;