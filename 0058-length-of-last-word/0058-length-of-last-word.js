/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sp=s.trim().split(/\s+/)
    let g=sp[sp.length-1].length
    return g

    
};