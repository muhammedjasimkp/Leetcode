/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Initialize 9 sets each for rows, columns, and 3x3 sub-boxes
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // Skip empty cells
            if (val === '.') continue;

            // Calculate the 0-8 index for the current 3x3 sub-box
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check if the digit already exists in the current row, column, or sub-box
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
                return false;
            }

            // Record the digit
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIdx].add(val);
        }
    }

    return true;
};