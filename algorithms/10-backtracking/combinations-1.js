// Given two integers n and k, return all possible combinations of k numbers out of 1 … n.

const combinations = (n, k) => {
    const result = [];

    const generate = (start, k, comb = []) => {
        if(k === 0) {
            result.push([...comb]);
            return;
        }

        for(let i = start; i <= n; i++) {
            comb.push(i);
            generate(i + 1, k - 1, comb);
            comb.pop();
        }
    }

    generate(1, k);
    return result;
}

let  n = 4, k = 2
console.log(combinations(n, k)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]