/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.length === 0) {
                return false;
            }

            if (stack[stack.length - 1] !== pairs[ch]) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
};