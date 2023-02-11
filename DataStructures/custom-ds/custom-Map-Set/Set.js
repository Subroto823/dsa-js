class MySet{
    #size = 0;
    constructor() {
        this.dictionary = {};
    }

    size() {
        return this.#size;
    }

    has(key) {
        return this.dictionary[key] !== undefined;
    }

    add(element) {
        let succ = false;

        if(!this.has(element)) {
            this.dictionary[element] = element;
            this.#size++;
            succ = true;
        }
        return succ;
    }

    remove(element) {
        let succ = false;

        if(this.has(element)) {
            delete this.dictionary[element];
            this.#size--;
            succ = true;
        }
        return succ;
    }

    values() {
        return Object.values(this.dictionary);
    }

    clear() {
        this.dictionary = {};
        this.#size = 0;
    }

    union(set) {
        const newSet = new MySet();

        this.values().forEach(element => {
            newSet.add(element);
        });

        set.values().forEach(element => {
            newSet.add(element);
        });
        return newSet;
    }

    intersection(set) {
        const newSet = new MySet();

        this.values().forEach(element => {
            if(set.has(element)) {
                newSet.add(element);
            }
        });
        return newSet;
    }

    difference(set) {
        const newSet = new MySet();

        this.values().forEach(element => {
            if(!set.has(element)) {
                newSet.add(element);
            }
        });
        return newSet;
    }

    isSubsetOf(set) {
        for(let element of this.values()) {
            if(!set.has(element)) {
                return false;
            }
        }
        return true;
    }
}

const setA = new MySet()
setA.add("a");
setA.add("b");
setA.add("c");

const setB = new MySet();
setB.add("b");
setB.add("c");

console.log(setA.isSubsetOf(setB));