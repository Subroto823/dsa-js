/*
Stable Matching (Gale–Shapley algorithm)
    Time Complexity of Gale-Shapley Algorithm is O(n^2)
*/

/*
wPartner - Stores partner of women. This is our output array that stores passing information. The value of wPartner[i] indicates the partner assigned to woman N+i. Note that the woman numbers between N and 2*N-1. The value -1 indicates that (N+i)'th woman is free

mEngaged - An array to store availability of men. If mEngaged[i] is false, then man 'i' is free, otherwise engaged.
*/

function stableMarriage(prefer, N) {
    const wPartner = new Array(N).fill(-1);
    const mEngaged = new Array(N).fill(false);
    let freeMen = N;

    while(freeMen) {
        for(let currentMan = 0; currentMan < N; currentMan++) {
            for(let woman of prefer[currentMan]) {
                if(mEngaged[currentMan]) break;

                // The woman of preference is free, w and m become partners (Note that the partnership maybe changed later). So we can say they are engaged not married
                if(wPartner[woman - N] === -1) {
                    wPartner[woman - N] = currentMan;
                    mEngaged[currentMan] = true;
                    freeMen--;
                } else {
                    let previousMan = wPartner[woman - N];

                    if(!womenPrefersPrevMan(prefer, woman, previousMan, currentMan)) {
                        wPartner[woman - N] = currentMan;
                        mEngaged[currentMan] = true;
                        mEngaged[previousMan] = false;
                    }
                }
            }
        }
    }
    return helper(wPartner, N);
}

function womenPrefersPrevMan(prefer, woman, previousMan, currentMan) {
    for(let preferedMan of prefer[woman]) {
        if(preferedMan === previousMan) {
            return true;
        }
        if(preferedMan === currentMan) {
            return false;
        }
    }
}

function helper(womenPartner, N) {
    let matchArray = [];
    
    womenPartner.forEach((partner, i) => {
        matchArray.push([partner, i + N]);
    });
    return matchArray;
}

// index 0 to 3 represents man and their preferences, index 4 to 7 represents woman and their preferences, N is number of men or women
let prefer = [
    [7, 5, 6, 4], // man 0
    [5, 4, 6, 7],
    [4, 5, 6, 7],
    [4, 5, 6, 7],
    [0, 1, 2, 3], // woman 4
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3]
], N = 4;
console.log(stableMarriage(prefer, N));