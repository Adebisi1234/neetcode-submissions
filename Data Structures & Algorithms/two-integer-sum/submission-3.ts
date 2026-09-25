class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>()
        for (let i =0; i < nums.length; i++) {
            const prevIndex = seen.get(target - nums[i])

            if(prevIndex !== undefined) {
                return [prevIndex, i]
            }
            seen.set(nums[i], i)
        }
        return []
    }
}
