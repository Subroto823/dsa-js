// combinations from 1 to n numbers
function combinations(n) {
    const result = [];

    function getCombinations (start, comb = []) {
        for(let i = start; i <= n; i++) {
            let tmp = [...comb, i];
            result.push(tmp);
            getCombinations(i + 1, tmp);
        }
    }

    getCombinations(1);
    return result;
}

console.log(combinations(2));