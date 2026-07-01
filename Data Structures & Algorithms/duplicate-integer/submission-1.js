class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {};

        for (let i = 0; i < nums.length; i++) {
            if (!seen[nums[i]]) {
                seen[nums[i]] = 1;
                continue;
            }
            return true;
        }

        return false;
    }
}
