/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    let closest = nums[0] + nums[1] + nums[2];
    let minDiff = Math.abs(closest - target);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Smallest possible sum starting with nums[i]
        const minPossible = nums[i] + nums[i + 1] + nums[i + 2];
        if (minPossible > target) {
            const diff = minPossible - target;
            if (diff < minDiff) {
                minDiff = diff;
                closest = minPossible;
            }
            // Any larger i will only yield sums >= minPossible > target
            break;
        }

        // Largest possible sum starting with nums[i]
        const maxPossible = nums[i] + nums[n - 2] + nums[n - 1];
        if (maxPossible < target) {
            const diff = target - maxPossible;
            if (diff < minDiff) {
                minDiff = diff;
                closest = maxPossible;
            }
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) return target;

            const diff = sum > target ? sum - target : target - sum;
            if (diff < minDiff) {
                minDiff = diff;
                closest = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};