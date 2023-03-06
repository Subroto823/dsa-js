function deepCopy(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if(obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if(obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepCopy(item);
            return arr;
        }, []);
    }

    if(obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key) => {
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {})
    }
}

const ironman = {
    name: "Tony Stark",
    heroprofile: {
        heroname: "Iron man",
        power: "Powered armor suit granting - superhuman strength, speed, durability, agility, reflexes, and senses."
    },
    getHeroProfile() {
        return this.heroprofile;
    }
}

const clonedIronMan = deepCopy(ironman);

clonedIronMan.heroprofile.city = "New York"
console.log(clonedIronMan, "\n");
console.log(ironman);