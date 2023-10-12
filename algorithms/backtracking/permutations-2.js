const permutations = (elements) => {
    const n = elements.length;
    const seen = new Array(n).fill(false);
    const result = [];

    const permute = function (permutation = []) {
        if (permutation.length === n) {
            result.push([...permutation]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (seen[i]) continue;
            seen[i] = true;
            permutation.push(elements[i]);

            permute(permutation)

            permutation.pop();
            seen[i] = false;
        }
    }

    permute();
    return result;
}

const nums = [1, 2, 3];
console.log(permutations(nums));