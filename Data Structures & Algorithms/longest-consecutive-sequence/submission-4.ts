class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const counts: {[key: number]: number} = {}
        const sorted = Array.from(new Set(nums)).sort((a,b) => a -b)
        let pointer = sorted[0]
        if(pointer !== undefined) {counts[pointer] = 1}else return 0
        for(const num of sorted) {
            
            if(num === pointer + counts[pointer]) {
                counts[pointer] += 1
                
            } else {
                
                pointer = num
                counts[num] = 1
            }
        }
        
        console.log(counts)
        return Math.max(...Object.values(counts))
    }
}
