class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length == 1 || nums.length == 0) return false;

        let counter = {};

        for (let i = 0; i < nums.length; i++) {
            if (!counter[nums[i]]) {
                counter[nums[i]] = 1;
                continue;
            }
            return true;
        }

        return false;
    }
}
