class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /**
     * 2 pointers: left(0) & right(1)
     * Get current sum
     * check right + 1
     *  if nums[right+1] > sum
     *      left = right
     *      right++
     *      currSum = nums[left] + nums[right]
     *  else
     *      right++
     *      currSum += nums[right]
     * 
     * 
     *  Edge Cases:
     *      only 1 or 2 nums in arr
     *      calculate sum & return
     */
    maxSubArray(nums) {
        if (nums.length === 1) return nums[0];

        let currSum = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;
    }
}
