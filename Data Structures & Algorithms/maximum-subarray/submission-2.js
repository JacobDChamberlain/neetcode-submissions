class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /**
     * initialize curr + max sums @ nums[0]
     * loop through THE REST of the array
     * set current sum to max of current element (starting @ 1) AND current element + current sum
     * set max sum to max of current sum and max sum
     * 
     * after loop, return max sum
     * 
     * 
     * EDGE CASES:
     * if there's only 1 element, return that element's value
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
