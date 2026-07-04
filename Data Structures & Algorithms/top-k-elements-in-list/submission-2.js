class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    /**
     * Brute Force:
     *      sort arr
     *      init counter obj
     *      loop through, increment counter obj for each ele
     *      return Object.values(counter) sliced from 0 to k
     * 
     * Edge Cases:
     *      only 1 num in arr, return that value
     */

    topKFrequent(nums, k) {
        if (nums.length === 1) return [nums[0]];

        nums.sort();
        const counter = {};
        
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            if (counter[curr] !== undefined) {
                counter[curr]++;
            } else {
                counter[curr] = 1;
            }
        }

        console.log(counter);

        return Object.keys(counter).sort((a, b) => counter[b] - counter[a]).slice(0, k);
    }
}
