class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>()
        for(let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        }

        return Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]).map((x) => x[0]).slice(0, k)
    }
}
