class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>()//num, freq
        const res = []
        for(const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }
        const bucket: number[][] = Array.from({length: nums.length+1}, () =>[])

        for (const [num, freq] of count) {
            bucket[freq].push(num)
        }

        for (let i = bucket.length - 1; i >= 0 && res.length < k;i--) {
            if(bucket[i].length === 0) continue
            for(let j =0; j < bucket[i].length && res.length < k; j++) {
                res.push(bucket[i][j])
            }
        }
        return res
    }
}
