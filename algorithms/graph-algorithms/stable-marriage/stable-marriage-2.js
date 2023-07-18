
function stableMarriage(prefer, N) {
    const wPartner = {},
        mEngaged = {},
        mList = Object.keys(prefer.Men);
    let freeMen = N;

    for (let man in prefer.Men) {
        mEngaged[man] = false;
    }

    for (let woman in prefer.Women) {
        wPartner[woman] = null;
    }

    while (freeMen) {
        for (let currentMan of mList) {
            for (let woman of prefer.Men[currentMan]) {
                if (mEngaged[currentMan]) break;

                if (wPartner[woman] === null) {
                    wPartner[woman] = currentMan;
                    mEngaged[currentMan] = true;
                    freeMen--;
                } 
                else {
                    let prevMan = wPartner[woman];

                    if (!wPrefersPrevMan(prefer.Women[woman], prevMan, currentMan)) {
                        wPartner[woman] = currentMan;
                        mEngaged[currentMan] = true;
                        mEngaged[prevMan] = false;
                    }
                }
            }
        }
    }
    return wPartner;
}

function wPrefersPrevMan(preference, previousMan, currentMan) {
    for (let preferedMan of preference) {
        if (preferedMan === previousMan) {
            return true;
        }
        if (preferedMan === currentMan) {
            return false;
        }
    }
}

let prefer = {
    Men: {
        Tom: ["Alice", "Mary", "Lucy"],
        Bob: ["Lucy", "Mary", "Alice"],
        Peter: ["Mary", "Alice", "Lucy"]
    },
    Women: {
        Alice: ["Bob", "Tom", "Peter"],
        Mary: ["Tom", "Bob", "Peter"],
        Lucy: ["Peter", "Bob", "Tom"]
    }
}, N = 3;
console.log(stableMarriage(prefer, N));


prefer = {
    Men: {
        Tom: ["Alice", "Mary", "Lucy"],
        Bob: ["Lucy", "Mary", "Alice"],
        Peter: ["Alice", "Lucy", "Mary"]
    },
    Women: {
        Alice: ["Bob", "Tom", "Peter"],
        Mary: ["Tom", "Bob", "Peter"],
        Lucy: ["Peter", "Bob", "Tom"]
    }
}, N = 3;
console.log(stableMarriage(prefer, N));