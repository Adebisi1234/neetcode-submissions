class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r=nums.length - 1
        
        while (l <= r) {
              const m = Math.floor((l + r) / 2);

            if (nums[m] === target) return m;
            if (nums[r] === target) return r;
            if (nums[l] === target) return l;

            if (nums[l] <= nums[m]) {
                // Left sorted
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // Right sorted
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1
    }
}
