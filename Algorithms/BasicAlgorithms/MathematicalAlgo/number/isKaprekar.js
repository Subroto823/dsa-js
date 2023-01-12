const isKaprekar = (n) => {
    if (n === 1) return true;

    let nSquare = n ** 2;
    let digits = String(nSquare).split("").length;
    let prefixNum;
    let suffixNum;
    
    for(let i = 1; i < digits; i++) {
        prefixNum = parseInt(nSquare / (10 ** i));
        suffixNum = nSquare % (10 ** i);

        if(suffixNum === 0 || prefixNum === 0) continue;
        if(suffixNum + prefixNum === n) return true;
    }

    return false;
}