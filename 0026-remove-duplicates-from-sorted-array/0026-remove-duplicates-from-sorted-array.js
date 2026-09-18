/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k=1;
    let i=1;
    for(i;i<nums.length;i++){
        if(nums[i]!==nums[k-1]){
            nums[k]=nums[i]
            k++
        }

    }
    return k;
    
};