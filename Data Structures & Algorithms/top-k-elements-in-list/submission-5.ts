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

        const buckets: number[][]= Array.from({length: nums.length+1}, () => [])

        for (const [key, count] of freqMap) {
            buckets[count].push(key)
        }

        const results = []
        for (let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
            if(buckets[i].length === 0) continue
            for (let j = 0; j < buckets[i].length && results.length < k; j++) {
                results.push(buckets[i][j])
            }
        }
        return results
    }
}
