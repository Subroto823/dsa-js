const Stack = require('../stack');

const simplifyPath = (path) => {
    const stack = new Stack(),
        arr = path.split('/');

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(item === '' || item === '.') continue;

        if(item === '..') stack.pop();
        else stack.push(item);
    }
    return "/" + stack.join("/");
}

const res1 = simplifyPath("../hello//world");
const res2 = simplifyPath("/../abc/./def/");
const res3 = simplifyPath("/a/./b/../../c/");

console.log(res1);
console.log(res2);
console.log(res3);
