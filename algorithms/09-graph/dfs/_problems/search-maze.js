/**
 @Search Maze

    Problem Statement

    Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists.

    We’ll represent the white entries with 0’s and black entries with 1’s. The white entries represent open areas and the black entries walls.
*/

var hasPath = function(maze, start, destination) {
    maze[start[0]][start[1]] = 1;
    return searchMazeHelper(maze, start, destination);

};

function searchMazeHelper(maze, start, destination) {
    if(start[0] === destination[0] && start[1] === destination[1]) {
        return true;
    }

    let neighborIndices;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // top, right, bottom, left

    for(let direction of directions) {
        neighborIndices = [start[0]+direction[0], start[1]+direction[1]];

        if(isFeasible(maze, neighborIndices)) {
            maze[neighborIndices[0]][neighborIndices[1]] = 1;
            if(searchMazeHelper(maze, neighborIndices, destination)) {
                return true;
            }
        }
    }
    return false;
}

function isFeasible(maze, indices) {
    let x = indices[0], y = indices[1];
    return x >= 0 && y >= 0 && x < maze.length && y < maze[x].length && maze[x][y] !== 1;
}

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