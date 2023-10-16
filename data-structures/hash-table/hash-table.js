/**
 * Hash Table
 */

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = 0;
    }

    _hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0]=== key)
            if(sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}


const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log();

// our hashing function is so simple. This will cause a collision and we will loose the data "Bruce"
table.set("mane", "Clark");
table.display();

console.log(table.get("name"));
console.log(table.get("mane"));

table.set("name", "Diana");
table.display();