class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const records  = new Map<number, number>()
        for (const num of nums) {
            if(records.get(num)) {
                records.set(num, records.get(num)+1)
            }else {
                records.set(num, 1)
            }
        }
        console.log(records)
        return [...records.keys()].sort((a,b) => records.get(b) - records.get(a)).slice(0,k)
    }
}
