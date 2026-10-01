/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let a = 1;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}
