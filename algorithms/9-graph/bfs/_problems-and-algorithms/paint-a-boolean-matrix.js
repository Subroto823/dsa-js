/**
 @Paint a Boolean Matrix

    Problem Statement:

    Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y).

    The 2 colors will be represented by 0’s and 1’s.
 */

function flipColor(image, x, y) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let color = image[x][y];
    image[x][y] ^= 1;

    let queue = [];
    queue.push([x, y]);
    let currentPosition, neighbor;
    
    while(queue.length) {
        currentPosition = queue.shift();

        for(let direction of directions) {
            neighbor = [currentPosition[0] + direction[0], currentPosition[1] + direction[1]];

            if(isFeasible(image, neighbor, color)) {
                image[neighbor[0]][neighbor[1]] ^= 1; // flipping color (1^1 = 0, 0^1=1)
                queue.push(neighbor);
            }
        }
    }
    return image;
}

function isFeasible(image, neighbor, color) {
    let x = neighbor[0], y = neighbor[1];
    return x >= 0 && x < image.length && y >= 0 && y < image[x].length && image[x][y] === color;
}

var image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
]

console.table(flipColor(image, 1, 1));

/*
Time complexity: O(mn) */
