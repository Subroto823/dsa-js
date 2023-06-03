var newInv = [
    [2, "Dirty Sock"],
    [21, "Bowling Ball"],
    [1, "Hair Pin"],
    [5, "Microphone"],
    [2, "Hair Pin"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

var myArray = [
    [1, 'Alfred'],
    [23, 'Berta'],
    [2, 'Zimmermann'],
    [4, 'Albert'],
  ]

// comparator function for sorting in alphabetical order
function Comparator(a, b) {
    let x = a[1].toUpperCase();
    let y = b[1].toUpperCase();
    
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
}

const comparator = (a, b) => a[1].localeCompare(b[1]);

newInv.sort(Comparator);
console.log(newInv);