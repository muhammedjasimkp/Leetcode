/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let move = 10;
    let aliceTurn = true;

    while (n >= move) {
        n -= move;
        move--;
        aliceTurn = !aliceTurn;
    }

    return !aliceTurn;
};