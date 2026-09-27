class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqCount = new Map<number, number>()
        for (const num of nums) {
            freqCount.set(num, (freqCount.get(num) || 0) + 1)
        }
        const bucket = Array.from({length: nums.length+1}, () => [])
        const result = []
        for (const [num, count] of freqCount) {
            bucket[count].push(num)
        }
        for(let i = bucket.length - 1; i > 0 && result.length < k; i-- ) {
            if( bucket[i].length === 0 ) continue;
            for (let j = 0; j < bucket[i].length && result.length < k; j++) {
                result.push(bucket[i][j])
            }
        } 

        return result
    }
}
