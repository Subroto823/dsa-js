class MyMap{
    #size = 0;
    constructor() {
        this.collection = {};
    }

    size() {
        return this.#size;
    }

    add(key, value) {
        this.collection[key] = value;
        this.#size++;
    }

    remove(key) {
        if(this.has(key)) {
            delete this.collection[key];
            this.#size--;
        }
    }

    has(key) {
        return this.collection.hasOwnProperty(key);
    }

    get(key) {
        if(this.has(key)) {
            return this.collection[key];
        }

        return null;
    }

    values() {
        return Object.values(this.collection);
    }

    clear() {
        this.collection = {};
        this.#size = 0;
    }
}

const map = new MyMap()
map.add("a", "abc");
map.add("b", "bcd");
map.add("c", "cde");

console.log(map);