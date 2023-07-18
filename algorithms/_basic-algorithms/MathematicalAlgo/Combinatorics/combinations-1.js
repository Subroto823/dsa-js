/* 
Time: O(2^n)
Space: O(n^2) */

const combinations = (elements) => {
    if (elements.length === 0) return [[]];

    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];

    combsWithoutFirst.forEach(comb => {
        const combWithFirst = [firstEl, ...comb];
        combsWithFirst.push(combWithFirst);
    })

    return [...combsWithoutFirst, ...combsWithFirst];
};

console.log(combinations(["a", "b", "c"]));
console.log(combinations(["a", "b"]));