class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /**
     * dynamic programming:
     * 
     * initialize max + current sum with 1st element (nums[0])
     * loop through REST of the array (starting @ idx 1)
     *  each iteration:
     *      get curr sum (max bt current sum + current element & current element)
     *      get max sum (max bt current sum & max sum)
     * 
     * return max sum
     * 
     * edge cases:
     * only 1 ele in arr? return its value
     */
    maxSubArray(nums) {
        if (nums.length === 1) return nums[0];

        let currSum = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(currSum + nums[i], nums[i]);
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
