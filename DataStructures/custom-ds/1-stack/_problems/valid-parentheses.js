const Stack = require('../stack');

const validParentheses = (str) => {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        let ob = str[i];

        if (ob === '(' || ob === '{' || ob === '[') {
            stack.push(ob);
            continue;
        }

        if (stack.isEmpty()) return false;

        let check;

        switch (ob) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[') {
                    return false;
                }
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[') {
                    return false;
                }
                break;

            case ']':
                check = stack.pop();
                if (check == '{' || check == '(') {
                    return false;
                }
                break;
        }
    }

    return true;
}

console.log(validParentheses(""));
console.log(validParentheses("[({})]"));
console.log(validParentheses("[][[]](){}"));
console.log(validParentheses("[(}]"));
console.log(validParentheses("(]"));

