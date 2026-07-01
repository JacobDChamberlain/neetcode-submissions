class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compare = {}; // key: num, val: idx
        
        for (let i = 0; i < nums.length; i++) {
            if (compare[target - nums[i]] !== undefined) {
                return [compare[target - nums[i]], i];
            }
            compare[nums[i]] = i;
        }
    }
}
