/**
 @Problem Statement

 Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists.

 We’ll represent the white entries with 0’s and black entries with 1’s. The white entries represent open areas and the black entries walls.
*/

var hasPath = function(maze, start, destination) {

};

var maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
]
console.log((hasPath(maze, [0, 4], [3, 2])));

/*
Time Complexity: O(V+E) */