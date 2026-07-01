class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const compare = {};

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (compare[diff] !== undefined) {
                return [compare[diff], i];
            }
            compare[nums[i]] = i;
            console.log(compare)
        }
    }
}
