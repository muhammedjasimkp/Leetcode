/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let a = [...nums1, ...nums2];
    let b = a.sort((a, b) => a - b);

    let mid = Math.floor(b.length / 2);

    if (b.length % 2 === 1) {
        return b[mid];
    } else {
        return (b[mid - 1] + b[mid]) / 2;
    }
};
