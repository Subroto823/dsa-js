import java.util.ArrayList;
import java.util.List;

/*
* 
*/

public class Rat_in_a_Maze_Simple {
    static List<String> possiblePaths = new ArrayList<>();
    static String path = "";

    public static boolean isItSafe(int row, int col, int m[][], int n) {
        if(row <= -1 || row >= n || col <= -1 || col >= n || m[row][col] == 0) {
            return false;
        }
        return true;
    }

    public static void printPathHelper(int row, int col, int m[][], int n) {
        if (row == n - 1 && col == n - 1) {
            possiblePaths.add(path);
            return;
        }

        if (isItSafe(row, col, m, n)) {
            path += 'D';
            printPathHelper(row + 1, col, m, n);
            path = path.substring(0, path.length() - 1);
            path += "R";
            printPathHelper(row, col + 1, m, n);
            path = path.substring(0, path.length() - 1);
        }
    }

    public static void main(String[] args) {
        int[][] maze = {
                { 1, 0, 0, 0 },
                { 1, 1, 0, 0 },
                { 1, 1, 1, 0 },
                { 0, 0, 1, 1 }
        };

        int n = maze.length;
        printPathHelper(0, 0, maze, n);
        for(int i = 0; i < possiblePaths.size(); i++) {
            System.out.println(possiblePaths.get(i));
        }
    }
}