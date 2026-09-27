class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const prev = target - nums[i]
            if(seen.has(prev)) {
                return [seen.get(prev), i]
            }else {
                seen.set(nums[i], i)
            }
        }

        return []
    }
}
