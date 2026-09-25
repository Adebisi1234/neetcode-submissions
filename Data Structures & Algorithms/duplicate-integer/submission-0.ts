class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counter:Set<number> = new Set()
        
        for (let i = 0; i < nums.length; i++) {
            if(counter.has(nums[i])) {
                return true
            }
            counter.add(nums[i])
            console.log(nums[i])
        }
        return false
    }
}
