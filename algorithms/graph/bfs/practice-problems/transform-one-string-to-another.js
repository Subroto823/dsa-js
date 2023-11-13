/**
Transform one string to another (Word Ladder)

Problem Statement:

Given a start word, an end word, and a dictionary of valid words, return the number of words in the shortest transformation sequence from the start word to the end word.
In each step, you can change one letter of the current word to create a new word, and that word must be in the dictionary.
Return -1 if no such sequence exists.


Example:
    Input: 
        beginWord = "hit"
        endWord = "cog"
        wordList = ["hot", "dot", "dog", "lot", "log", "cog"

    Output: 5

    Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.


Solution Approach:

    1. Build Graph

    - Treat each word as a node in a graph.
    - Connect nodes with an edge if the corresponding words differ by just one letter.
    - Use the given dictionary to determine valid edges.

    2. BFS (Breadth-First Search)

    - Start BFS from the start word.
    - Explore neighbors (words that can be reached by changing one letter) level by level.
    - Keep track of the minimum number of steps needed to reach the end word.


    Time Complexity: O(M x N x N), where M is the length of each word and N is the total number of words in the dictionary.

    Note: The provided solution can be further optimized.
*/


const transformString = function(beginWord, endWord, wordList) {
    const graph = buildGraph(beginWord, wordList);
    if (!(endWord in graph)) return -1;

    const queue = [beginWord];
    const seen = new Set();
    seen.add(beginWord);
    let count = 1;

    while (queue.length) {
        const n = queue.length;

        for (let i = 0; i < n; i++) {
            const word = queue.shift();

            if (word === endWord) {
                return count;
            }

            graph[word].forEach(neighbor => {
                if (!seen.has(neighbor)) {
                    queue.push(neighbor);
                    seen.add(neighbor);
                }
            });
        }

        count++;
    }

    return -1;
}

const buildGraph = function(beginWord, wordList) {
    const graph = {};

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

const compareStrings = function(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;
    }
    return count;
}


console.log(transformString("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));