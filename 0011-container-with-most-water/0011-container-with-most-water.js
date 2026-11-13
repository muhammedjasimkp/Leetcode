/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let currentWidth = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentWater = currentWidth * currentHeight;

        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};