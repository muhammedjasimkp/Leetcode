/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
const num1 = BigInt(digits.join(''));
const num2=num1+1n
const r=num2.toString()
return r.split("").map(Number)
};