/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(current, open, close) {
        // Base case: valid combination of length 2 * n is complete
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // Option 1: Add an opening parenthesis if we haven't used all n
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Option 2: Add a closing parenthesis if it won't unbalance the string
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};
