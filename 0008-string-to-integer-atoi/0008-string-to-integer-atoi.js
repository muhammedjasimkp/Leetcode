/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    // 1. Skip leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Check for sign
    if (i < n) {
        if (s[i] === '-') {
            sign = -1;
            i++;
        } else if (s[i] === '+') {
            i++;
        }
    }

    // 3. Convert digits and avoid overflow
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // 4. Check for overflow and underflow before multiplying/adding
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};