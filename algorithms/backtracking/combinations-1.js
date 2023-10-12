// combinations from 1 to n numbers
const combinations = function(n) {
    const result = [];

    const generate = function (start, comb = []) {
       for(let i = start; i <= n; i++) {
            comb.push(i);
            result.push([...comb]);
            generate(i + 1, comb);
            comb.pop();
        }
    }
    
    generate(1);
    return result;
}

console.log(combinations(3));