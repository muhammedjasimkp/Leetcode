/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();

    function dp(i, j) {
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        // If we reached the end of the pattern, s must also be fully matched
        if (j === p.length) {
            return i === s.length;
        }

        // Check if the current characters match
        const firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));

        let ans = false;

        // If the next character in pattern is '*'
        if (j + 1 < p.length && p[j + 1] === '*') {
            // Option 1: skip '*' and its preceding element (0 occurrences)
            // Option 2: use '*' if firstMatch is true, moving forward in string `s`
            ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {
            // Normal character or '.' match, move forward in both string and pattern
            ans = firstMatch && dp(i + 1, j + 1);
        }

        memo.set(key, ans);
        return ans;
    }

    return dp(0, 0);
};