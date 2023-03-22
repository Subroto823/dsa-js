function permutation(num1, num2) {
    const visited = new Array(num2 + num1 + 1).fill(false);
    const number = new Array(num2 - num1 + 1).fill(0);

    function generate(idx) {
        if (idx === num2 + 1) {
            console.log(...number);
            return;
        }
    
        for (let i = num1; i <= num2; i++) {
            if (visited[i]) continue;
    
            visited[i] = true;
            number[idx - num1] = i;
            generate(idx + 1);
            visited[i] = false;
        }
    }
    
    generate(num1);
}

permutation(1, 3);