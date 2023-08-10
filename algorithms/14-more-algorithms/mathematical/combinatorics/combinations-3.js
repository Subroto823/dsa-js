// combinations from 1 to n numbers
function combinations(n) {
    const result = [];

    function getCombinations (start, comb = []) {
        for(let i = start; i <= n; i++) {
            let curr = [...comb, i];
            result.push(curr);
            getCombinations(i + 1, curr);
        }
    }
    
    getCombinations(1);
    return result;
}

console.log(combinations(3));