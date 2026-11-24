/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    const n = nums.length;
    if (n < 4) return res;

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        // Avoid duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Optimization: Smallest possible sum for current i is greater than target
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        // Optimization: Largest possible sum for current i is smaller than target
        if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Avoid duplicates for the second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Optimization: Smallest possible sum for current i and j is greater than target
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            // Optimization: Largest possible sum for current i and j is smaller than target
            if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicates for the third element
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth element
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};