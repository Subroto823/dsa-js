const Stack = require('./@stack');

const simplifyPath = (str) => {
    const stack = new Stack();

    let simplifyPath = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ".") continue;

        if(str[i] === "/" && stack.peek() !== "/") {
            stack.push("/");
            continue;
        }

        stack.push(str[i]);
        simplifyPath += str[i];
    }
    return simplifyPath;
}

const res1 = simplifyPath("../hello//world");
const res2 = simplifyPath("/../abc/./def/");

console.log(res1);
console.log(res2);