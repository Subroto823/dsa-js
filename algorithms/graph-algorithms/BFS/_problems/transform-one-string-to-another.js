/**
@Transform one string to another

Problem Statement:

    Given a dictionary D and two strings s and f, write a program to determine if s produces t. Assume that all characters are lowercase alphabets. If s does produce f, output the length of a shortest production sequence; otherwise, output -1.


    @Solution Pseudocode:

    function compareStrings
        Compare two strings char by char
        Return how many chars differ

    function transformString
        1. Build graph using compareStrings function. Add edges if and only if  the two strings differ by 1 character
        2. Run BFS and increment length
        3. Return length of production sequence

    Time Complexity: O(M x M x N), where M is the length of each word and N is the total number of words in the dictionary
*/


function transformString(wordList, beginWord, endWord) {
    let graph = buildGraph(wordList, beginWord);
    if (!(endWord in graph)) return -1;

    let queue = [beginWord];
    let visited = {};
    visited[beginWord] = true;
    let count = 1;

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let currentWord = queue.shift();

            if (currentWord === endWord) {
                return count;
            }

            graph[currentWord].forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            });
        }
        count++;
    }
    return -1;
}

function compareStrings(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
    }
    return diff;
}

function buildGraph(wordList, beginWord) {
    let graph = {};

    for (let word of wordList) {
        graph[word] = [];

        for (let nextWord of wordList) {
            if (compareStrings(word, nextWord) === 1) {
                graph[word].push(nextWord);
            }
        }
    }

    if (!(beginWord in graph)) {
        graph[beginWord] = [];

        for (let nextWord of wordList) {
            if (compareStrings(beginWord, nextWord) === 1) {
                graph[beginWord].push(nextWord);
            }
        }
    }
    return graph;
}


console.log(transformString(["hot", "dot", "dog", "lot", "log", "cog"], "hit", "cog"))