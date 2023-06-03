
const numberToText = (number) => {

    const twoDigits = (number) => {
        const numbers = {
            0: "Zero",
            1: "One",
            2: "Two", 
            3: "Three", 
            4: "Four", 
            5: "Five", 
            6: "Six", 
            7: "Seven", 
            8: "Eight", 
            9: "Nine",
            twoDigits: {
                10: "Ten", 
                11: "Eleven", 
                12: "Twelve",
                13: "Thirteen",
                15: "Fifteen",
                18: "Eighteen",
                20: "Twenty",
                30: "Thirty",
                50: "Fifty"
            }
        }

        number = parseInt(number);
    
        if(number < 10) 
            return numbers[number];
    
        if(number < 100)
            if(numbers["twoDigits"][number] !== undefined)
                return numbers["twoDigits"][number];
            else {
                let str = number.toString();
    
                if(str.charAt(0) == 1) {
                    return numbers[str.charAt(1)] + "teen";
                }
    
                if(str.charAt(0) == 2) return "Twenty " + numbers[str.charAt(1)];
                if(str.charAt(0) == 3) return "Thirty " + numbers[str.charAt(1)];
                if(str.charAt(0) == 5) return "Fifty " + numbers[str.charAt(1)];
                if(str.charAt(0) == 8) return "Eighty " + numbers[str.charAt(1)];

                return numbers[str.charAt(0)] + "ty " + (numbers[str.charAt(1)] || "");
            }
    }

    const threeDigits = (number) => {
        let str = number.toString();
        if(number > 99) {
            return twoDigits(str.charAt(0)) + " Hundred " + twoDigits(str.substring(1));
        }
        return twoDigits(number);
    }

    if(number < 100) {
        return twoDigits(number);
    }
    if( number < 1000) {
        return threeDigits(number);
    } 
    if( number < 1000000) {
        let str = number.toString();

        if(str.length === 4) {
            return twoDigits(str.charAt(0)) + " Thousand " + (str.substring(1) != 0 ? threeDigits(str.substring(1)) : "");
        } 
        else if(str.length === 5) {
            return twoDigits(str.substring(0, 2)) + " Thousand " + (str.substring(2) != 0 ? threeDigits(str.substring(2)) : "");
        }
        else {
            return threeDigits(str.substring(0, 3)) + " Thousand " + (str.substring(3) != 0 ? threeDigits(str.substring(3)) : "");
        }
    }
    
}

console.log(numberToText(991011));