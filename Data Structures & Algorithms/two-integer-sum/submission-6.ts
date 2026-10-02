class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const record = new Map<number, number>() //value, index
        for(let i =0; i < nums.length; i++) {
            const prev = target - nums[i]
            if(record.has(prev)) {
                return [record.get(prev),i]
            }
            record.set(nums[i], i)
        }
        return []
    }
}
