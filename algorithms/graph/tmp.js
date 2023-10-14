function sc(str) {
    let x = 0;
    for (let c of str) {
        x += c.charCodeAt(0);
    }

    return x;
}

console.log(sc("JFK"))
console.log()
console.log(sc("ATL"))