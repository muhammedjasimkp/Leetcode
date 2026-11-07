/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already in the map and within the current window, move the left pointer
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        // Store / update the last seen index of the character
        charMap.set(char, right);

        // Update the maximum length found
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
