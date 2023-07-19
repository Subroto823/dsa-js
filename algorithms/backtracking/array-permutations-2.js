const permutations = (elements) => {
    const n = elements.length,
        result = [],
        visited = new Array(n).fill(false);

    const permute = (perm = []) => {
        if(perm.length === n) {
            result.push([...perm]);
            return;
        }

        for(let i = 0; i < n; i++) {
            if(visited[i]) continue;

            visited[i] = true;
            perm.push(elements[i]);
            permute(perm)

            // backtrack
            perm.pop();
            visited[i] = false;
        }
    }

    permute();
    return result;
}

console.log(permutations([1, 2, 3]));