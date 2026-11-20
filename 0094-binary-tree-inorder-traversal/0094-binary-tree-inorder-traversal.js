/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;
        dfs(node.left);        // 1. Left
        result.push(node.val); // 2. Root
        dfs(node.right);       // 3. Right
    }

    dfs(root);
    return result;
};